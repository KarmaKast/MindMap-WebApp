<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    :style="canvasContainerStyle"
    @mousemove="getMousePos"
    v-touch:moving="getMousePos"
    v-touch:end.prevent="deactivateAllEntities"
    v-touch:start.self="startCanvasDragging"
    v-touch:end.self="endCanvasDragging"
    @mouseleave="endCanvasDragging"
    v-touch:tap.self="handleCanvasTap"
  >
    <div
      v-if="grid.show && grid.opacity > 0 && grid.size > 1 && grid.width > 0"
      id="grid"
      :style="gridStyle"
    ></div>
    <div
      v-if="grid.show && grid.opacity > 0 && grid.size > 1 && grid.width > 0"
      id="gridCenterTop"
      :style="gridCenterTopStyle"
    ></div>
    <div
      v-if="grid.show && grid.opacity > 0 && grid.size > 1 && grid.width > 0"
      id="gridCenterHor"
      :style="gridCenterHorStyle"
    ></div>
    <!--<div class="gridBetter" :style="gridBetterStyle"></div>-->
    <div id="entities">
      <entityComponent
        v-for="(value, key_) in processedEntitiesBetter"
        :key="key_"
        :colors="colors"
        :entityID="key_"
        :apiUrl="apiUrl"
        :autoSave="false"
        :apiValidity="apiValidity"
        :canvasSize="canvasSize"
        :canvasLocation="canvasLocation"
        :canvasMousePos="value.canvasMousePos"
        @setStartingCanvasMousePos="setStartingCanvasMousePos"
        :dragging="value.dragging"
        :pressed="value.pressed"
        :entitySelected="value.entitySelected"
        :entityLocationDef="value.entityLocationDef"
        :grid="grid"
        :targetRelSpots="value.targetRelSpots"
        :updateEntityData="value.updateEntityData"
        @prevActiveEntityID="setPrevActiveEntityID"
        @removeEntity="removeEntity"
        @entityActivated="entityActivated"
        @setSelfRelSpots="setSelfRelSpots(key_, $event)"
        @assignTargetRelSpots="assignTargetRelSpots(key_, $event)"
      >
      </entityComponent>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
//import entityComponent from "./entityComponent";
const entityComponent = () => import("./entityComponent");

import axios from "axios";
import qs from "querystring";
//import lodash from "lodash";
import lodashIsEqual from "lodash/isEqual";

export default {
  name: "MindMapCanvas",
  components: {
    entityComponent,
  },
  props: {
    colors: Object,
    colorsProcessed: Object,
    entities: Array,
    entityLimit: {
      // context: setting this to 10. With some optimizations should be increased to 100
      // or extra entitys could be loaded with minimum memory usage.
      default: 10,
      type: Number,
    },
    apiUrl: String,
    apiValidity: Boolean,

    grid: {
      default() {
        /*
        size : [1,infinite*)
        opacity : [0,1],
        width : [0,5]
        */
        return {
          size: 1,
          opacity: 0,
          width: 0,
          show: true,
          snap: true,
        };
      },
      type: Object,
    },

    popupLock: {
      // context: if true disables this canvas from using popup feature * WIP *
      default: true,
      type: Boolean,
    },
  },
  data: function () {
    return {
      mindmapCanvas: null,
      dragItemId: null,
      canvasLocation: { x: 0, y: 0 },
      canvasMousePos: { x: 0, y: 0 },
      canvasContainerBoxLoc: { x: 0, y: 0 },
      prevActiveEntityID: undefined,
      activeEntity: {
        entityID: undefined,
        dragging: { state: false },
        pressed: { state: false },
        selected: false,
      },
      canvas: {
        taps: {
          timer: undefined,
          count: 0,
        },
        dragging: {
          state: false,
          event: undefined,
          deltas: { x: 0, y: 0 },
        },
      },
      relClaimTargetSpots: {},
      relClaimSpots: {},
      entitiesToUpdate: [],
      processedEntitiesBetter: {}, // better optimized updates
      canvasSize: { height: 0, width: 0 },
    };
  },
  computed: {
    windowSize: function () {
      let height = this.$store.state.window_height;
      let width = this.$store.state.window_width;
      return {
        height: height ? height : 0,
        width: width ? width : 0,
      };
    },
    canvasContainerStyle: function () {
      return {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        overflow: "hidden",
        backgroundColor: "inherit",
        cursor: this.canvas.dragging.state ? "grabbing" : "move",
      };
    },
    gridStylePart1: function () {
      // todo: move color processing functionality to vuex store
      let processedColor = `hsla(${this.colors["theme_light"].h}, ${
        this.colors["theme_light"].s
      }%, ${this.colors["theme_light"].l}%, ${this.grid.opacity / 1.4})`;
      let size_ = this.grid.size * 2;
      /*const part = `transparent, ${processedColor} 0px, ${processedColor} ${
        this.grid.width / 2
      }px, transparent ${this.grid.width / 2}px, transparent ${
        size_ - this.grid.width / 2
      }px, ${processedColor} ${
        size_ - this.grid.width / 2
      }px, ${processedColor}  ${size_}px `;*/
      const part = `transparent, ${processedColor} 0px, ${processedColor} ${parseInt(
        this.grid.width / 2
      )}px, transparent ${this.grid.width / 2}px, transparent ${parseInt(
        size_ - this.grid.width / 2
      )}px, ${processedColor} ${parseInt(
        size_ - this.grid.width / 2
      )}px, ${processedColor}  ${size_}px `;
      return {
        position: "absolute",
        backgroundImage: `repeating-linear-gradient( ${part} ), repeating-linear-gradient(90deg, ${part} )`,
        pointerEvents: "none",
      };
    },
    gridStylePart2: function () {
      let size_ = this.grid.size * 2;
      let height = this.canvasSize.height + size_ * 2;
      let width = this.canvasSize.width + size_ * 2;
      /*const top =
        ((this.canvasSize.height / 2 + this.canvasLocation.y) % size_) - size_;*/
      const top = ((height / 2 + this.canvasLocation.y) % size_) - size_ * 1;
      /*const left =
        ((this.canvasSize.width / 2 + this.canvasLocation.x) % size_) - size_;*/
      const left = ((width / 2 + this.canvasLocation.x) % size_) - size_ * 1;
      if (Math.abs(left) > size_ || Math.abs(top) > size_)
        console.log("This shouldnt have happened");
      return {
        height: `${height}px`,
        width: `${width}px`,
        top: `${top}px`,
        left: `${left}px`,
      };
    },
    gridStyle: function () {
      return Object.assign({}, this.gridStylePart1, this.gridStylePart2);
    },
    gridCenterTopStylePart1: function () {
      return {
        left: `${this.canvasLocation.x}px`,
      };
    },
    gridCenterTopStylePart2: function () {
      return {
        height: "100%",
        width: "100%",
        position: "absolute",
        top: "0px",
        backgroundImage: `linear-gradient(to right, transparent calc(50% - ${
          this.grid.width / 2
        }px), hsla(183, 91%, 35%,${this.grid.opacity * 2}) calc(50% - ${
          this.grid.width / 2
        }px), hsla(183, 91%, 35%, ${this.grid.opacity * 2}) calc(50% + ${
          this.grid.width / 2
        }px) , transparent calc(50% + ${this.grid.width / 2}px))`,
        pointerEvents: "none",
      };
    },
    gridCenterTopStyle: function () {
      return Object.assign(
        {},
        this.gridCenterTopStylePart2,
        this.gridCenterTopStylePart1
      );
    },
    gridCenterHorStylePart1: function () {
      return {
        top: `${this.canvasLocation.y}px`,
      };
    },
    gridCenterHorStylePart2: function () {
      return {
        height: "100%",
        width: "100%",
        position: "absolute",
        left: "0px",
        backgroundImage: `linear-gradient(to bottom, transparent calc(50% - ${
          this.grid.width / 2
        }px), hsla(19, 100%, 35%,${this.grid.opacity * 2}) calc(50% - ${
          this.grid.width / 2
        }px), hsla(19, 100%, 35%, ${this.grid.opacity * 2}) calc(50% + ${
          this.grid.width / 2
        }px) , transparent calc(50% + ${this.grid.width / 2}px))`,
        pointerEvents: "none",
      };
    },
    gridCenterHorStyle: function () {
      return Object.assign(
        {},
        this.gridCenterHorStylePart1,
        this.gridCenterHorStylePart2
      );
    },
    gridBetterStyle: function () {
      return {
        position: "absolute",
        top: "-50%",
        left: "-50%",

        height: "200%",
        width: "200%",
      };
    },
  },
  methods: {
    setPrevActiveEntityID(ID) {
      console.log("I should only be called once");
      this.prevActiveEntityID = ID;
      Vue.set(this.activeEntity, "entityID", ID);
      Vue.set(this.activeEntity, "selected", true);
    },
    handleTouchEnd(event) {
      event.preventDefault();

      if (event.target) this.setcanvas.dragging();

      this.deactivateAllEntities(event);
    },
    updateCanvasContainerBoxLoc() {
      // context: since canvas bounding box x,y is taken once at the start of the drag, if for some reason canvas container position changes relative to the window top-left it may make the drag to malfunction
      this.canvasContainerBoxLoc.x = this.$refs.canvasContainer.getBoundingClientRect().x;
      this.canvasContainerBoxLoc.y = this.$refs.canvasContainer.getBoundingClientRect().y;
    },
    entityActivated(event, ID) {
      /**
       * context: wait for 100ms to see if canvas has no mouseup Event.
       * If it does within 100ms consider it as a mouse press else drag.
       */
      //console.log("drag started at canvas");

      let diffEntity = this.activeEntity.entityID !== ID;
      this.activeEntity.entityID = ID;
      //console.log("entity pressed");
      this.activeEntity.pressed.state = true;

      setTimeout(() => {
        if (this.activeEntity.pressed.state) {
          //console.log("started dragging");
          /**
           * also check for mouse position change to detect drag. eg: if delta is more than 5px
           */
          this.activeEntity.dragging.state = true;
          this.activeEntity.selected = false;

          this.updateCanvasContainerBoxLoc();
        } else {
          if (ID === this.activeEntity.entityID) {
            this.activeEntity.selected = diffEntity
              ? true
              : !this.activeEntity.selected;
            //console.log(this.activeEntity.selected);
          }
        }
      }, 200);
    },
    deactivateAllEntities(event) {
      if ([1].includes(event.which) || event.type === "touchend") {
        //console.log(event);
        if (this.activeEntity.pressed.state === false) {
          // context: this is on the canvas
          if (this.$refs.canvasContainer === event.target) {
            this.activeEntity.selected = false;
            this.activeEntity.entityID = undefined;
            if (this.$store.state.relClaimMode.mode)
              this.$store.commit("update_relClaimMode", {
                mode: false,
                targetID: null,
                claimantID: this.$store.state.relClaimMode.claimantID,
              });
          }
        } else {
          // context: this is for the entity
          //console.log("entity unpressed");
          if (this.$refs.canvasContainer !== event.target) {
            this.activeEntity.pressed.state = false;
            if (this.activeEntity.dragging.state) {
              //console.log(event);
              this.activeEntity.dragging.state = false;
            }
          }
        }
      }
    },
    getMousePos(event) {
      if (this.activeEntity.dragging.state === true) {
        // todo: if dragging pass canvasMousePos to entitys else pass undefined
      }
      if (this.activeEntity.dragging.state || this.canvas.dragging.state) {
        if (event.type === "mousemove") {
          //console.log(event);
          Vue.set(
            this.canvasMousePos,
            "x",
            event.clientX - this.canvasContainerBoxLoc.x
          );
          Vue.set(
            this.canvasMousePos,
            "y",
            event.clientY - this.canvasContainerBoxLoc.y
          );
        } else if (event.type === "touchmove") {
          //console.log(event);
          Vue.set(
            this.canvasMousePos,
            "x",
            event.touches[0].clientX - this.canvasContainerBoxLoc.x
          );
          Vue.set(
            this.canvasMousePos,
            "y",
            event.touches[0].clientY - this.canvasContainerBoxLoc.y
          );
        }

        if (this.canvas.dragging.state) {
          Vue.set(
            this.canvasLocation,
            "x",
            this.canvasMousePos.x -
              this.canvasSize.width / 2 -
              this.canvas.dragging.deltas.x
          );
          Vue.set(
            this.canvasLocation,
            "y",
            this.canvasMousePos.y -
              this.canvasSize.height / 2 -
              this.canvas.dragging.deltas.y
          );
        }
      }
    },
    startCanvasDragging(event) {
      //event.preventDefault();
      /*
      if (event.type is touch or a middle mouse bttn) but not if (this.canvas.dragging.state is false and event.type is touchend or mouseup)
      */
      /*
      event.which === 2 is for middle click
       */
      if (
        ((event.type.startsWith("mouse") && event.which === 1) ||
          ["touchend", "touchstart"].includes(event.type)) &&
        !(
          this.canvas.dragging.state === false &&
          ["mouseup", "touchend"].includes(event.type)
        )
      ) {
        // doing: start drag

        this.updateCanvasContainerBoxLoc();

        let clientPos = { x: 0, y: 0 };
        if (event.type === "mousedown") {
          this.canvas.dragging.state = true;
          this.canvas.dragging.event = event;

          clientPos.x = event.clientX;
          clientPos.y = event.clientY;
        } else if (event.type.startsWith("touch")) {
          // todo: check for double tap

          this.canvas.dragging.state = true;
          this.canvas.dragging.event = event;
          //console.log(event);
          clientPos.x = event.changedTouches[0].clientX;
          clientPos.y = event.changedTouches[0].clientY;
        }

        // todo: set dragging deltas
        if (this.canvas.dragging.state) {
          this.canvas.dragging.deltas.x =
            clientPos.x -
            this.canvasSize.width / 2 -
            this.canvasLocation.x -
            this.canvasContainerBoxLoc.x;
          this.canvas.dragging.deltas.y =
            clientPos.y -
            this.canvasSize.height / 2 -
            this.canvasLocation.y -
            this.canvasContainerBoxLoc.y;
        }
      }
      /*if (event.type.startsWith("mouse") && event.which === 3)
        console.log("canvas right click detected");*/
    },
    endCanvasDragging(event) {
      if (
        ((event.type.startsWith("mouse") && event.which === 1) ||
          ["touchend", "touchstart"].includes(event.type)) &&
        !(
          this.canvas.dragging.state === false &&
          ["mouseup", "touchend"].includes(event.type)
        )
      ) {
        // doing: stop drag
        this.canvas.dragging.state = false;
        this.canvas.dragging.deltas = { x: 0, y: 0 };
        this.canvas.dragging.event = undefined;
        // todo: reset dragging deltas (not necessary)
        this.canvas.dragging.deltas = { x: 0, y: 0 };
      }
    },
    handleCanvasTap(event) {
      event.preventDefault();
      //console.log(event);
      this.canvas.taps.count += 1;
      let tapMaxInterval = 250;
      //if (this.canvas.taps.timer === undefined) {
      this.canvas.taps.timer = setTimeout(() => {
        if (this.canvas.taps.count > 1) {
          this.canvas.taps.count = 0;
          //console.log("this is double tap i guess?");

          let entityLocationDef_ = { x: 0, y: 0 };
          if (event.type.startsWith("mouse")) {
            entityLocationDef_ = { x: event.clientX, y: event.clientY };
          } else {
            entityLocationDef_ = {
              x: event.changedTouches[0].clientX,
              y: event.changedTouches[0].clientY,
            };
          }
          entityLocationDef_.x =
            entityLocationDef_.x -
            this.canvasSize.width / 2 -
            this.canvasLocation.x;
          entityLocationDef_.y =
            entityLocationDef_.y -
            this.canvasSize.height / 2 -
            this.canvasLocation.y;
          //console.log(entityLocationDef_);
          this.$emit("create-new-entity", entityLocationDef_);
        } else {
          this.canvas.taps.count = 0;
          //console.log("this is single tap i guess?");
        }
        this.canvas.taps.timer = undefined;
      }, tapMaxInterval);
      //}
    },
    setStartingCanvasMousePos(event) {
      this.updateCanvasContainerBoxLoc();
      //console.log(event);
      if (event.type === "touchstart") {
        //console.log(event.clientX - this.canvasContainerBoxLoc.x);
        this.canvasMousePos.x =
          event.changedTouches[0].clientX - this.canvasContainerBoxLoc.x;
        this.canvasMousePos.y =
          event.changedTouches[0].clientY - this.canvasContainerBoxLoc.y;
      } else {
        this.canvasMousePos.x = event.clientX - this.canvasContainerBoxLoc.x;
        this.canvasMousePos.y = event.clientY - this.canvasContainerBoxLoc.y;
      }
      //console.log([this.canvasMousePos.x, this.canvasMousePos.y]);
    },
    assignTargetRelSpots(claimantID, targetID) {
      if (this.relClaimTargetSpots[claimantID])
        Vue.set(
          this.relClaimTargetSpots[claimantID],
          targetID,
          this.relClaimSpots[targetID]
        );
      else
        Vue.set(this.relClaimTargetSpots, claimantID, {
          [targetID]: this.relClaimSpots[targetID],
        });
    },
    setSelfRelSpots(entityID, relSpots) {
      //console.log(claimantID, targetID);
      this.relClaimSpots = Object.assign({}, this.relClaimSpots, {
        [entityID]: relSpots,
      });
      for (const claimantID in this.relClaimTargetSpots) {
        for (const targetID in this.relClaimTargetSpots[claimantID]) {
          if (targetID === entityID) {
            if (this.relClaimTargetSpots[claimantID])
              Vue.set(this.relClaimTargetSpots[claimantID], targetID, relSpots);
            else
              Vue.set(this.relClaimTargetSpots, claimantID, {
                [targetID]: relSpots,
              });
          }
        }
      }
    },
    removeEntity(entityID) {
      let url_ = this.apiUrl;
      axios({
        method: "POST",
        url: url_ + "/entity/remove",
        data: qs.stringify({ entityID: entityID }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then((response) => {
        //console.log(response.data.claimantIDs);
        this.$emit("dropEntity", entityID, response.data.claimantIDs);
        // for all entities with claimantIDs, update entity_data
        this.entitiesToUpdate = response.data.claimantIDs;
      });
    },
    initiateProcessedEntities() {
      Object.keys(this.processedEntitiesBetter).forEach((entityID, index) => {
        if (!this.entities.some((x) => x.ID === entityID)) {
          //console.log("to delete : ", entityID);
          Vue.delete(this.processedEntitiesBetter, entityID);
          Vue.delete(this.relClaimTargetSpots, entityID);
        }
      });
      this.entities.forEach((value, index) => {
        if (!Object.keys(this.processedEntitiesBetter).includes(value.ID))
          Vue.set(this.processedEntitiesBetter, value.ID, {
            dragging: {
              state:
                value.ID === this.activeEntity.entityID
                  ? this.activeEntity.dragging.state
                  : false,
            },
            pressed: {
              state:
                value.ID === this.activeEntity.entityID
                  ? this.activeEntity.pressed.state
                  : undefined,
            },
            entitySelected: undefined,
            canvasMousePos: this.activeEntity.dragging
              ? this.activeEntity.entityID === value.ID
                ? Object.assign({}, this.canvasMousePos)
                : undefined
              : undefined,
            entityLocationDef:
              this.entities[index]["entityLocationDef"] === undefined
                ? { x: 0, y: 0 }
                : Object.assign({}, this.entities[index]["entityLocationDef"]),
            targetRelSpots: Object.assign(
              {},
              this.relClaimTargetSpots[value.ID]
            ),
            updateEntityData: false, //this.entitiesToUpdate.includes(value.ID),
          });
      });
    },
  },
  watch: {
    windowSize() {
      //this.canvasSize.height = this.canv
      //console.log("I should not be seen when dragging canvas");
      let box = this.$refs.canvasContainer;
      if (!box) this.canvasSize = { height: 0, width: 0 };
      else {
        setTimeout(() => {
          box = box.getBoundingClientRect();
          this.canvasSize = {
            height: box.height,
            width: box.width,
          };
        }, 50);
      }
    },
    entities: {
      handler() {
        this.initiateProcessedEntities();
        //console.log("i should appear when creating new entity");
      },
      deep: true,
    },
    relClaimTargetSpots: {
      handler() {
        Object.entries(this.relClaimTargetSpots).forEach(([key, value]) => {
          if (
            Object.keys(this.processedEntitiesBetter).some(
              (entityID) => entityID !== key
            )
          ) {
            if (
              !lodashIsEqual(
                value,
                this.processedEntitiesBetter[key].targetRelSpots
              )
            ) {
              //console.log(value[0], JSON.stringify(value[1]));
              //console.log("updating processedEntitiesBetter[x].targetRelSpots");
              Vue.set(
                this.processedEntitiesBetter[key],
                "targetRelSpots",
                value
              );
            }
          } else {
            //console.log("wait this shouldn't be happening");
            //console.log(value[0], JSON.stringify(value[1]));
          }
        });
      },
      deep: true,
    },
    activeEntity: {
      handler() {
        if (this.activeEntity.entityID) {
          if (this.prevActiveEntityID !== this.activeEntity.entityID) {
            /*console.log(
              "on clicking from one entity to another i should be seen"
            );*/
            if (
              this.prevActiveEntityID &&
              Object.keys(this.processedEntitiesBetter).includes(
                this.prevActiveEntityID
              )
            ) {
              Vue.set(
                this.processedEntitiesBetter[this.prevActiveEntityID],
                "pressed",
                { state: undefined }
              );
              Vue.set(
                this.processedEntitiesBetter[this.prevActiveEntityID],
                "entitySelected",
                undefined
              );
            }
            this.prevActiveEntityID = this.activeEntity.entityID;
          }
          if (
            this.activeEntity.pressed.state !==
            this.processedEntitiesBetter[this.activeEntity.entityID].pressed
              .state
          )
            Vue.set(
              this.processedEntitiesBetter[this.activeEntity.entityID],
              "pressed",
              { state: this.activeEntity.pressed.state }
            );
          /*if (
            this.activeEntity.selected !==
            this.processedEntitiesBetter[this.activeEntity.entityID]
              .entitySelected
          )*/
          //console.log("entitySelected is being modified");
          Vue.set(
            this.processedEntitiesBetter[this.activeEntity.entityID],
            "entitySelected",
            this.activeEntity.selected
          );
          if (
            this.activeEntity.dragging.state !==
            this.processedEntitiesBetter[this.activeEntity.entityID].dragging
              .state
          ) {
            Vue.set(
              this.processedEntitiesBetter[this.activeEntity.entityID],
              "dragging",
              { state: this.activeEntity.dragging.state }
            );
          }
        } else if (
          Object.keys(this.processedEntitiesBetter).includes(
            this.prevActiveEntityID
          )
        ) {
          //console.log("on clicking canvas i should be seen");
          Vue.set(
            this.processedEntitiesBetter[this.prevActiveEntityID],
            "pressed",
            { state: undefined }
          );
          Vue.set(
            this.processedEntitiesBetter[this.prevActiveEntityID],
            "entitySelected",
            undefined
          );
        }
      },
      deep: true,
    },
    canvasMousePos: {
      handler() {
        if (this.activeEntity.entityID)
          if (this.activeEntity.dragging.state)
            Vue.set(
              this.processedEntitiesBetter[this.activeEntity.entityID],
              "canvasMousePos",
              {
                x: this.canvasMousePos.x - this.canvasLocation.x,
                y: this.canvasMousePos.y - this.canvasLocation.y,
              }
            );
          else {
            Vue.set(
              this.processedEntitiesBetter[this.prevActiveEntityID],
              "canvasMousePos",
              undefined
            );
          }
      },
      deep: true,
    },
    entitiesToUpdate() {
      if (this.entitiesToUpdate.length) {
        Vue.set(
          this.processedEntitiesBetter[this.entitiesToUpdate[0]],
          "updateEntityData",
          true
        );
        Vue.delete(this.entitiesToUpdate, 0);
      }
    },
  },
  created: function () {},
  mounted: function () {
    let box = this.$refs.canvasContainer;
    if (!box) this.canvasSize = { height: 0, width: 0 };
    else {
      box = box.getBoundingClientRect();
      this.canvasSize = {
        height: box.height,
        width: box.width,
      };
    }
    this.initiateProcessedEntities();
  },
  beforeUpdate: function () {},
  updated: function () {},
};
</script>
<style lang="sass" scoped></style>
