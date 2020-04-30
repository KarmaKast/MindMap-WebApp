<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    :style="canvasContainerStyle"
    @mousemove="getMousePos"
    v-touch:moving="getMousePos"
    v-touch:end.prevent="deactivateAllEntities"
    v-touch:start.self="setCanvasDragging"
    v-touch:end.self="setCanvasDragging"
    v-touch:tap.self="handleCanvasTap"
  >
    <div
      v-if="grid.show && grid.opacity > 0 && grid.size > 1 && grid.width > 0"
      id="grid"
      :style="gridStyle"
    ></div>
    <div
      v-if="grid.show && grid.opacity > 0 && grid.size > 1 && grid.width > 0"
      id="gridCenter"
      :style="gridCenterStyle"
    ></div>
    <div id="entities">
      <entityComponent
        v-for="(value, key_) in processedEntitiesBetter"
        :key="key_"
        :colors="colors"
        :entityID="key_"
        :apiUrl="apiUrl"
        :autoSave="false"
        :apiValidity="apiValidity"
        :canvasSize="{ height: height, width: width }"
        :canvasLocation="canvasLocation"
        :canvasMousePos="value.canvasMousePos"
        @setStartingCanvasMousePos="setStartingCanvasMousePos"
        :defaultColors="colors"
        :dragging="value.dragging"
        :pressed="value.pressed"
        :entitySelected="value.entitySelected"
        :entityLocationDef="value.entityLocationDef"
        :grid="grid"
        :targetRelSpots="value.targetRelSpots"
        :updateEntityData="value.updateEntityData"
        @removeEntity="removeEntity"
        @entityActivated="entityActivated"
        @setSelfRelSpots="
          (relSpots) => {
            setSelfRelSpots(key_, relSpots);
          }
        "
        @assignTargetRelSpots="
          (targetID) => {
            assignTargetRelSpots(key_, targetID);
          }
        "
      >
      </entityComponent>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import entityComponent from "./entityComponent";

import axios from "axios";
import qs from "querystring";
import lodash from "lodash";

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
      // or extra nodes could be loaded with minimum memory usage.
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
      height: 0,
      width: 0,
      relClaimTargetSpots: {},
      relClaimSpots: {},
      entitiesToUpdate: [],
      processedEntitiesBetter: {}, // better optimized updates
    };
  },
  computed: {
    canvasConfig: function () {
      return {
        height: this.height,
        width: this.width,
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
      };
    },
    gridStyle: function () {
      // todo: move color processing functionality to vuex store
      var processedColor = `hsla(${this.colors["theme_light"].h}, ${this.colors["theme_light"].s}%, ${this.colors["theme_light"].l}%, ${this.grid.opacity})`;
      var size_ = this.grid.size * 2;
      return {
        height: "200%",
        width: "200%",
        position: "absolute",
        top: `${
          ((this.height / 2 + this.canvasLocation["y"]) % size_) - size_
        }px`,
        left: `${
          ((this.width / 2 + this.canvasLocation["x"]) % size_) - size_
        }px`,
        backgroundImage: `repeating-linear-gradient(rgba(255, 255, 255, 0), ${processedColor} ${this.grid.width}px, rgba(255, 255, 255, 0) ${this.grid.width}px, rgba(255, 255, 255, 0) ${size_}px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0), ${processedColor} ${this.grid.width}px, rgba(255, 255, 255, 0) ${this.grid.width}px, rgba(255, 255, 255, 0) ${size_}px)`,
        pointerEvents: "none",
      };
    },
    gridCenterStyle: function () {
      var size_x = this.width * 1.5;
      var size_y = this.height * 1.5;
      //var size_ = this.grid.size * 2;
      return {
        height: "400%",
        width: "400%",
        position: "absolute",
        top: `${
          ((this.height / 2 + this.canvasLocation["y"]) % size_y) - size_y
        }px`,
        left: `${
          ((this.width / 2 + this.canvasLocation["x"]) % size_x) - size_x
        }px`,
        backgroundImage: `repeating-linear-gradient(rgba(255, 255, 255, 0), hsla(19, 100%, 50%, ${
          this.grid.opacity * 2
        }) ${this.grid.width}px, rgba(255, 255, 255, 0) ${
          this.grid.width
        }px, rgba(255, 255, 255, 0) ${size_y}px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0), hsla(183, 91%, 32%, ${
          this.grid.opacity * 2
        }) ${this.grid.width}px, rgba(255, 255, 255, 0) ${
          this.grid.width
        }px, rgba(255, 255, 255, 0) ${size_x}px)`,
        pointerEvents: "none",
        /*backgroundImage: `linear-gradient(90deg, #FFFFFF 49.9%, rgba(0, 0, 0, 0.520833) 50%, rgba(255, 255, 255, 0) 51.1%)`*/
      };
    },
  },
  methods: {
    handleTouchEnd(event) {
      event.preventDefault();

      if (event.target) this.setcanvas.dragging();

      this.deactivateAllEntities(event);
    },
    updateCanvasContainerBoxLoc() {
      // context: since canvas bounding box x,y is taken once at the start of the drag, if for some reason canvas container position changes relative to the window top-left it will make the drag to malfunction
      this.canvasContainerBoxLoc.x = this.$refs.canvasContainer.getBoundingClientRect().x;
      this.canvasContainerBoxLoc.y = this.$refs.canvasContainer.getBoundingClientRect().y;
    },
    entityActivated(event, ID) {
      /**
       * context: wait for 100ms to see if canvas has no mouseup Event.
       * If it does within 100ms consider it as a mouse press else drag.
       */
      //console.log("drag started at canvas");

      var diffEntity = this.activeEntity.entityID !== ID;
      this.activeEntity.entityID = ID;
      //console.log("node pressed");
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
      }, 100);
    },
    deactivateAllEntities(event) {
      if ([1].includes(event.which) || event.type === "touchend") {
        //console.log(event);
        if (this.activeEntity.pressed.state === false) {
          // context: this is on the canvas
          if (this.$refs.canvasContainer === event.target) {
            this.activeEntity.selected = false;
            this.activeEntity.entityID = undefined;
          }
        } else {
          // context: this is for the node
          //console.log("node unpressed");
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
        // todo: if dragging pass canvasMousePos to nodes else pass undefined
      }
      if (this.activeEntity.dragging.state || this.canvas.dragging.state) {
        if (event.type === "mousemove") {
          //console.log(event);
          this.canvasMousePos.x = event.clientX - this.canvasContainerBoxLoc.x;
          this.canvasMousePos.y = event.clientY - this.canvasContainerBoxLoc.y;
        } else if (event.type === "touchmove") {
          //console.log(event);
          this.canvasMousePos.x =
            event.touches[0].clientX - this.canvasContainerBoxLoc.x;
          this.canvasMousePos.y =
            event.touches[0].clientY - this.canvasContainerBoxLoc.y;
        }

        if (this.canvas.dragging.state) {
          this.canvasLocation.x =
            this.canvasMousePos.x -
            this.width / 2 -
            this.canvas.dragging.deltas.x;
          this.canvasLocation.y =
            this.canvasMousePos.y -
            this.height / 2 -
            this.canvas.dragging.deltas.y;
        }
      }
    },
    setCanvasDragging(event) {
      //event.preventDefault();
      /*
      if (event.type is touch or a middle mouse bttn) but not if (this.canvas.dragging.state is false and event.type is touchend or mouseup)
      */
      /*
      event.which === 2 is for middle click
       */
      if (
        ((event.which === 2 && event.type.startsWith("mouse")) ||
          ["touchend", "touchstart"].includes(event.type)) &&
        !(
          this.canvas.dragging.state === false &&
          ["mouseup", "touchend"].includes(event.type)
        )
      ) {
        //console.log("drag event : ", event);
        //console.log("from setcanvas.dragging func");
        //console.log(event);
        //event.preventDefault();
        // todo: this toggling mechanism causes problems if mouse moves out of canvas container
        if (this.canvas.dragging.state) {
          // doing: stop drag
          this.canvas.dragging.state = false;
          this.canvas.dragging.deltas = { x: 0, y: 0 };
          this.canvas.dragging.event = undefined;
          // todo: reset dragging deltas (not necessary)
          this.canvas.dragging.deltas = { x: 0, y: 0 };
        } else {
          // doing: start drag

          this.updateCanvasContainerBoxLoc();

          var clientPos = { x: 0, y: 0 };
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
              this.width / 2 -
              this.canvasLocation.x -
              this.canvasContainerBoxLoc.x;
            this.canvas.dragging.deltas.y =
              clientPos.y -
              this.height / 2 -
              this.canvasLocation.y -
              this.canvasContainerBoxLoc.y;
          }
        }
      }
    },
    handleCanvasTap(event) {
      event.preventDefault();
      //console.log(event);
      this.canvas.taps.count += 1;
      var tapMaxInterval = 250;
      //if (this.canvas.taps.timer === undefined) {
      this.canvas.taps.timer = setTimeout(() => {
        if (this.canvas.taps.count > 1) {
          this.canvas.taps.count = 0;
          //console.log("this is double tap i guess?");

          var entityLocationDef_ = { x: 0, y: 0 };
          if (event.type.startsWith("mouse")) {
            entityLocationDef_ = { x: event.clientX, y: event.clientY };
          } else {
            entityLocationDef_ = {
              x: event.changedTouches[0].clientX,
              y: event.changedTouches[0].clientY,
            };
          }
          entityLocationDef_.x =
            entityLocationDef_.x - this.width / 2 - this.canvasLocation.x;
          entityLocationDef_.y =
            entityLocationDef_.y - this.height / 2 - this.canvasLocation.y;
          console.log(entityLocationDef_);
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
      var url_ = this.apiUrl;
      axios({
        method: "POST",
        url: url_ + "/entity/remove",
        data: qs.stringify({ entityID: entityID }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then((response) => {
        //console.log(response.data.claimantIDs);
        this.$emit("dropEntity", entityID, response.data.claimantIDs);
        // for all entities with claimantIDs, update node_data
        this.entitiesToUpdate = response.data.claimantIDs;
      });
    },
  },
  watch: {
    entities: {
      handler() {
        // doing: initializing processedEntitiesBetter
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
              entitySelected:
                value.ID === this.activeEntity.entityID
                  ? this.activeEntity.selected
                  : false,
              canvasMousePos: this.activeEntity.dragging
                ? this.activeEntity.entityID === value.ID
                  ? this.canvasMousePos
                  : undefined
                : undefined,
              entityLocationDef:
                this.entities[index]["entityLocationDef"] === undefined
                  ? { x: 0, y: 0 }
                  : this.entities[index]["entityLocationDef"],
              targetRelSpots: this.relClaimTargetSpots[value.ID],
              updateEntityData: this.entitiesToUpdate.includes(value.ID),
            });
        });

        //console.log("i should appear when creating new node");
      },
      deep: true,
    },
    relClaimTargetSpots: {
      handler() {
        Object.entries(this.relClaimTargetSpots).forEach((value, index) => {
          if (
            Object.keys(this.entities).some((entity) => entity.ID !== value[0])
          ) {
            if (
              !lodash.isEqual(
                value[1],
                this.processedEntitiesBetter[value[0]].targetRelSpots
              )
            ) {
              //console.log(value[0], JSON.stringify(value[1]));
              //console.log("updating processedEntitiesBetter[x].targetRelSpots");
              Vue.set(
                this.processedEntitiesBetter[value[0]],
                "targetRelSpots",
                value[1]
              );
            }
          } else {
            console.log("wait this shouldn't be happening");
            console.log(value[0], JSON.stringify(value[1]));
          }
        });
      },
      deep: true,
    },
    activeEntity: {
      handler() {
        if (this.activeEntity.entityID) {
          if (this.prevActiveEntityID !== this.activeEntity.entityID) {
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
                false
              );
              Vue.set(
                this.processedEntitiesBetter[this.prevActiveEntityID],
                "canvasMousePos",
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
          if (
            this.activeEntity.selected !==
            this.processedEntitiesBetter[this.activeEntity.entityID]
              .entitySelected
          )
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
            if (this.activeEntity.dragging.state)
              Vue.set(
                this.processedEntitiesBetter[this.activeEntity.entityID],
                "canvasMousePos",
                this.canvasMousePos
              );
          }
        } else if (
          Object.keys(this.processedEntitiesBetter).includes(
            this.prevActiveEntityID
          )
        ) {
          console.log("on clicking canvas i should be seen");
          Vue.set(
            this.processedEntitiesBetter[this.prevActiveEntityID],
            "pressed",
            { state: undefined }
          );
          Vue.set(
            this.processedEntitiesBetter[this.prevActiveEntityID],
            "entitySelected",
            false
          );
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
      /*Object.entries(this.processedEntitiesBetter).forEach((value) => {
        if (this.entitiesToUpdate.includes(value[0])) {
          Vue.set(
            this.processedEntitiesBetter[value[0]],
            "updateEntityData",
            true
          );
          const index = this.entitiesToUpdate.indexOf(value[0]);
          let temp = this.entitiesToUpdate.slice(0, index);
          if (!(index + 1 > this.entitiesToUpdate.length))
            temp.push(...this.entitiesToUpdate.slice(index + 1));
          this.entitiesToUpdate = temp;
          Vue.set(
            this.processedEntitiesBetter[value[0]],
            "updateEntityData",
            false
          );
        }
      });*/
    },
  },
  created: function () {
    this.$store.subscribeAction({
      after: (action) => {
        if ("update_window_size" === action.type) {
          var box = this.$refs.canvasContainer.getBoundingClientRect();
          this.height = box.height;
          this.width = box.width;
        }
      },
    });
  },
  mounted: function () {
    var box = this.$refs.canvasContainer.getBoundingClientRect();
    //console.log(box);
    this.height = box.height;
    this.width = box.width;
  },
  beforeUpdate: function () {
    //console.log("before update called");
    var box = this.$refs.canvasContainer.getBoundingClientRect();
    this.height = box.height;
    this.width = box.width;
  },
  updated: function () {
    /*var box = this.$refs.canvasContainer.getBoundingClientRect();
    this.height = box.height;
    this.width = box.width;*/
  },
};
</script>
<style lang="sass" scoped></style>
