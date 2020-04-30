<template>
  <div ref="entityContainer" :style="entityContainerStyle">
    <div class="relationWires" :style="relationWiresStyle">
      <v-stage
        :config="{
          width: this.relStageSize.width,
          height: this.relStageSize.height,
        }"
      >
        <v-layer>
          <v-group>
            <v-line
              v-for="(relClaim, index) in entityData.source.RelationClaims"
              :key="index"
              :config="{
                points: relationWirePoints[relClaim.To],
                stroke: relWireColor,
                strokeWidth: dragging.state || entitySelected ? 2 : 1,
                lineCap: 'round',
                lineJoin: 'round',
              }"
            ></v-line>
          </v-group>
        </v-layer>
      </v-stage>
    </div>
    <div
      v-if="entitySelected"
      class="entityUI"
      :style="{
        position: 'absolute',
        display: 'grid',
      }"
    >
      <div
        class="editLabelBttn"
        :style="{
          position: 'absolute',
          bottom: '5px',
          height: '25px',
          width: '25px',
          backgroundColor: '#ad37de',
          borderRadius: '50%',
          pointerEvents: 'all',
        }"
        v-touch:tap.self="editentityLabel"
      >
        <input
          v-if="editingLabel"
          ref="labelInput"
          type="text"
          :style="inputTextStyle"
          v-model.lazy="entityLabel"
          @input="entityLabel = $event.target.value"
          @keyup.enter="editentityLabel"
        />
      </div>
      <color-picker v-if="false"></color-picker>
      <div
        class="removeEntityBttn"
        :style="{
          position: 'absolute',
          left: '30px',
          bottom: '5px',
          height: '25px',
          width: '25px',
          backgroundColor: '#ff1a02',
          borderRadius: '50%',
          pointerEvents: 'all',
        }"
        v-touch:tap.self="
          () => {
            this.$emit('removeEntity', this.entityID);
          }
        "
      ></div>
      <div
        class="startRelClaimBttn"
        :style="{
          position: 'absolute',
          top: '14px',
          left: `${relationSpots.right - relationSpots.left + 5}px`,
          height: '25px',
          width: '25px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          pointerEvents: 'all',
        }"
        v-touch:start.self="startRelClaimMode"
      ></div>
    </div>
    <div
      class="entity"
      :style="entityStyle"
      v-touch:start.self="startdrag"
      v-touch:end="confirmRelClaimTarget"
    >
      <!--<input type="text" :style="entityTextStyle" :value="entityLabel" />-->
      <p :style="entityTextStyle">{{ entityLabel }}</p>
    </div>
  </div>
</template>

<script>
import ColorPicker from "./general/ColorPicker.vue";

//import {uuidv1} from 'uuid/v1';
import axios from "axios";
import qs from "querystring";
import lodash from "lodash";
//import * as morphCore from "@karmakast/morph-dbms-core";

export default {
  name: "entityComponent",
  components: {
    ColorPicker,
  },
  props: {
    colors: Object,
    entityID: String,
    apiUrl: String,
    apiValidity: Boolean,
    canvasSize: { height: Number, width: Number },
    canvasLocation: Object,
    canvasMousePos: Object,
    autoSave: {
      default: false,
      type: Boolean,
    },
    grid: Object,
    defaultColors: Object,

    dragging: {
      default() {
        return {
          state: false,
        };
      },
      type: Object,
    },
    pressed: {
      default() {
        return {
          state: false,
        };
      },
      type: Object,
    },
    entitySelected: {
      default: false,
      type: Boolean,
    },
    entityLocationDef: {
      default() {
        return { x: 0, y: 0, z: 0 };
      },
      type: Object,
    },
    targetRelSpots: Object,
    updateEntityData: {
      default: false,
      type: Boolean,
    },
  },
  data: function () {
    return {
      minHeight: 60,
      minWidth: 120,
      entityLocation: this.entityLocationDef,
      entityLocationProcessed: {},
      entityLabel: "",
      entityColor: { h: 0, s: 0, l: 0, a: 1 },
      entityData: {
        source: { Label: "", RelationClaims: [] },
        viz_props: {
          location: { x: 0, y: 0, z: 0 },
          color: { h: 166, s: 89, l: 45, a: 1 },
        },
      },
      entitySize: { height: 60, width: 160 },
      entityBoundingBoxSize: { height: 0, width: 0 },
      draggingDeltas: { x: 0, y: 0 },
      editingLabel: false,
      relClaimMode: { mode: false, targetID: null },
    };
  },
  computed: {
    relWireColor: function () {
      return `hsla(${this.entityColor.h},${this.entityColor.s}%,${this.entityColor.l}%, ${this.entityColor.a})`;
    },
    entityContainerStyle: function () {
      return {
        position: "absolute",
        top: `${
          /*this.canvasLocation["y"] +*/
          this.canvasSize.height / 2 +
          this.entityLocation_.y -
          this.entityBoundingBoxSize.height / 2
        }px`,
        left: `${
          /*this.canvasLocation["x"] +*/
          this.canvasSize.width / 2 +
          this.entityLocation_.x -
          this.entityBoundingBoxSize.width / 2
        }px`,
        minWidth: `${this.entityLabel === "" ? this.minWidth : 0}px`,
        minHeight: `${this.entityLabel === "" ? this.minHeight : 0}px`,
        cursor: this.dragging.state ? "grabbing" : "grab",
        zIndex: this.dragging.state ? "5000" : "unset",
        transform: `translate(
          ${this.canvasLocation.x + "px"},
          ${this.canvasLocation.y + "px"}
        )`,

        backgroundColor:
          this.editingLabel && this.entitySelected
            ? "white"
            : "hsla(0,0%,0%,0.01)",
        /*border: `1px dotted hsla(${this.entityColor.h},${this.entityColor.s}%,${this.entityColor.l}%, 0.2)`,*/
        borderRadius:
          this.entitySize["height"] > this.entitySize["width"]
            ? `${this.entitySize["height"]}px`
            : `${this.entitySize["width"]}px`,
        boxShadow: `${
          this.dragging.state
            ? "rgba(0, 0, 0, 0.2) 0px 0px 13px 4px"
            : "rgba(0, 0, 0, 0.05) 0px 0px 3px 2px"
        }, inset 0px 0px 0 4px hsla(${this.entityColor.h},
        ${this.entityColor.s}%,
        ${this.entityColor.l}%, 0.2)`,
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "100%",
        padding: "4px",
        outline: "none",
      };
    },
    entityStyle: function () {
      return {
        position: "relative",
        borderRadius: "inherit",
        border: `1px solid hsla(${this.entityColor.h},${this.entityColor.s}%, ${this.entityColor.l}%, 0.8)`,
        backdropFilter: "blur(2px)",
        backgroundColor: CSS.supports("backdrop-filter: blur(3px)")
          ? `hsla(0,0%,${this.colors["background"].l + 5}%,0.2)`
          : `hsla(0,0%,${this.colors["background"].l + 5}%,1)`,
        pointerEvents: "all",
        display: "grid",
        placeItems: "center",
        boxSizing: "border-box",
        padding: "10px 15px 10px 15px",
      };
    },
    entityTextStyle: function () {
      return {
        pointerEvents: "none",
        margin: "0px",
        maxWidth: "100px",
        overflowWrap: "break-word",
        color: `hsla(${this.entityColor.h},${this.entityColor.s}%, ${
          this.entityColor.l
        }%, ${1})`,
        background: "none",
        border: "none",
        userSelect: "none",
      };
    },
    inputTextStyle: function () {
      return {
        position: "absolute",
        bottom: "20px",
        left: "20px",
      };
    },
    entityLocation_: function () {
      let entityLoc = {};
      //console.log("entityLocation_() is called from entity: ", this.entityID);
      if (this.canvasMousePos && this.pressed.state) {
        entityLoc.x = this.canvasMousePos.x - this.canvasSize.width / 2;

        entityLoc.y = this.canvasMousePos.y - this.canvasSize.height / 2;

        if (this.grid.snap) {
          entityLoc.x =
            (Math.floor((entityLoc.x - this.grid.size / 2) / this.grid.size) +
              1) *
            this.grid.size;

          entityLoc.y =
            (Math.floor((entityLoc.y - this.grid.size / 2) / this.grid.size) +
              1) *
            this.grid.size;
        }
      } else {
        entityLoc = Object.assign({}, this.entityLocation);
      }
      return entityLoc;
    },
    relationWiresStyle: function () {
      return {
        position: "absolute",
        left:
          0 -
          this.canvasLocation.x -
          this.canvasSize.width / 2 -
          this.entityLocation_.x +
          this.entityBoundingBoxSize.width / 2 +
          "px",
        top:
          0 -
          this.canvasLocation.y -
          this.canvasSize.height / 2 -
          this.entityLocation_.y +
          this.entityBoundingBoxSize.height / 2 +
          "px",
        pointerEvents: "none",
        position: "absolute",
      };
    },
    relationSpots: function () {
      var boundingBox = this.$refs.entityContainer.getBoundingClientRect();
      //console.log(boundingBox);
      if (this.dragging.state && this.canvasLocation.x)
        boundingBox = this.$refs.entityContainer.getBoundingClientRect();

      return {
        left:
          this.canvasLocation.x +
          this.canvasSize.width / 2 +
          this.entityLocation_.x -
          this.entityBoundingBoxSize.width / 2,
        right:
          this.canvasLocation.x +
          this.canvasSize.width / 2 +
          this.entityLocation_.x +
          this.entityBoundingBoxSize.width / 2,
        top:
          this.canvasLocation.y +
          this.canvasSize.height / 2 +
          this.entityLocation_.y -
          this.entityBoundingBoxSize.height / 2,
        bottom:
          this.canvasLocation.y +
          this.canvasSize.height / 2 +
          this.entityLocation_.y +
          this.entityBoundingBoxSize.height / 2,
      };
    },
    relationWirePoints: function () {
      let res = {};
      for (const relClaim of this.entityData.source.RelationClaims) {
        let targetSpots = this.targetRelSpots
          ? this.targetRelSpots[relClaim.To]
          : undefined;

        // todo: find closest set of points between this entity and target entity
        function dist(p1, p2) {
          return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        }
        const yMidSelf =
          (this.relationSpots.top + this.relationSpots.bottom) / 2;
        const xMidSelf =
          (this.relationSpots.left + this.relationSpots.right) / 2;
        const yMidTarget = (targetSpots.top + targetSpots.bottom) / 2;
        const xMidTarget = (targetSpots.left + targetSpots.right) / 2;
        targetSpots = {
          left: { x: targetSpots.left, y: yMidTarget },
          top: { x: xMidTarget, y: targetSpots.top },
          right: { x: targetSpots.right, y: yMidTarget },
          bottom: { x: xMidTarget, y: targetSpots.bottom },
        };
        let selfSpots = {
          left: { x: this.relationSpots.left, y: yMidSelf },
          top: { x: xMidSelf, y: this.relationSpots.top },
          right: { x: this.relationSpots.right, y: yMidSelf },
          bottom: { x: xMidSelf, y: this.relationSpots.bottom },
        };
        let minDistance;
        let minDistanceKeys;
        if (targetSpots) {
          for (const targetKey in targetSpots) {
            for (const selfKey in selfSpots) {
              const distance = dist(targetSpots[targetKey], selfSpots[selfKey]);
              if (minDistance === undefined || distance < minDistance) {
                minDistance = distance;
                minDistanceKeys = { target: targetKey, self: selfKey };
              }
            }
          }
          //console.log(minDistance, minDistanceKeys);
          res[relClaim.To] = [
            selfSpots[minDistanceKeys.self].x,
            selfSpots[minDistanceKeys.self].y,
            targetSpots[minDistanceKeys.target].x,
            targetSpots[minDistanceKeys.target].y,
          ];
        } else res[relClaim.To] = [0, 0, 0, 0];
      }
      return res;
    },
    relStageSize: function () {
      return this.canvasSize;
    },
  },
  methods: {
    startdrag(event) {
      //console.log("drag started at node");
      // doing: calculating draggingDeltas
      if ([1].includes(event.which) || event.type === "touchstart") {
        if (!this.pressed.state) {
          var boundingBox = this.$refs.entityContainer.getBoundingClientRect();
          //console.log(boundingBox);

          if (event.type === "mousedown") {
            this.draggingDeltas["x"] =
              event.clientX - boundingBox.x - this.canvasLocation.x;
            this.draggingDeltas["y"] =
              event.clientY - boundingBox.y - this.canvasLocation.y;
          } else if (event.type == "touchstart") {
            this.draggingDeltas["x"] =
              event.touches[0].clientX -
              boundingBox.x /*+ this.canvasLocation.x*/;
            this.draggingDeltas["y"] =
              event.touches[0].clientY -
              boundingBox.y /*+ this.canvasLocation.y*/;
          }
          this.$emit("setStartingCanvasMousePos", event);
          this.$emit("entityActivated", event, this.entityID);
        }
      }
    },
    getEntityData() {
      // doing: get node data from api
      // todo: check api url validity
      axios({
        method: "GET",
        url: this.apiUrl + `/entity/get`,
        params: { entityID: this.entityID },
        paramsSerializer: qs.stringify,
      }).then((response) => {
        //console.log(JSON.stringify(response.data));
        this.entityData.source = response.data[0];
        this.entityData.viz_props = response.data[1].Data;
        this.$emit("setSelfRelSpots", this.relationSpots);
        for (const relClaim of this.entityData.source.RelationClaims)
          this.$emit("assignTargetRelSpots", relClaim.To);
      });
    },
    savePropToAPI(propName, data) {
      axios({
        method: "POST",
        baseURL: this.apiUrl,
        url: `/entity/updateProps/`,
        params: {
          entityID: this.entityID,
        },
        paramsSerializer: qs.stringify,
        data: qs.stringify({
          props: JSON.stringify({
            [propName]: data,
          }),
        }),
      }).then(() => {
        this.entityData.viz_props[propName] = Object.assign({}, data);
        if (this.autoSave) {
          // doing: ask server save state to file
          axios.post(this.apiUrl + "/collection/save");
        }
      });
    },
    updateEntityBoundaryBox(time = 100) {
      // doing: updating node's bounding box width and height
      setTimeout(() => {
        var boundingBox = this.$refs.entityContainer.getBoundingClientRect();

        this.entityBoundingBoxSize = {
          width: boundingBox.width,
          height: boundingBox.height,
        };
        this.$emit("setSelfRelSpots", this.relationSpots);
        //console.log(boundingBox);
        //this.entityBoundingBoxSize = boundingBox;
      }, time);
    },
    editentityLabel(event) {
      console.log(event);
      this.editingLabel = this.editingLabel ? false : true;
      //setInterval
      if (this.editingLabel) {
        setTimeout(() => {
          this.$refs.labelInput.focus();
        }, 100);
      }
    },
    startRelClaimMode() {
      this.relClaimMode.mode = true;
      this.$store.commit("update_relClaimMode", this.relClaimMode);
      console.log("starting relclaim mode on node : ", this.entityID);
    },
    confirmRelClaimTarget(event) {
      event.preventDefault();
      if (!this.relClaimMode.mode && this.$store.state.relClaimMode.mode) {
        console.log(event);
        if (event.type === "mouseup") {
          this.$store.commit("update_relClaimMode", {
            mode: true,
            targetID: this.entityID,
          });
        } else {
          this.$store.commit("update_relClaimMode", {
            mode: true,
            targetID: this.entityID,
          });
          //alert("touch mode for adding relclaim not implimented yet");
        }
      }
    },
    addRelClaim() {
      axios({
        method: "POST",
        baseURL: this.apiUrl,
        url: `/entity/addRelClaim`,
        data: qs.stringify({
          claimantID: this.entityID,
          targetID: this.relClaimMode.targetID,
        }),
      }).then((response) => {
        this.relClaimMode.mode = false;
        this.relClaimMode.targetID = null;
        this.$store.commit("update_relClaimMode", this.relClaimMode);
        //console.log(JSON.parse(response.data.relClaim));

        const temp = this.entityData;
        temp.source.RelationClaims.push(JSON.parse(response.data.relClaim));
        this.entityData = Object.assign({}, temp);
        this.$emit(
          "assignTargetRelSpots",
          JSON.parse(response.data.relClaim).To
        );
      });
    },
  },
  watch: {
    "dragging.state"() {
      if (!this.dragging.state) {
      }
    },
    apiValidity() {},
    canvasLocation: {
      handler() {
        this.$emit("setSelfRelSpots", this.relationSpots);
      },
      deep: true,
    },

    entityLocation_() {
      // todo: save node location to database on drag end

      this.$emit("setSelfRelSpots", this.relationSpots);
      if (!this.dragging.state) {
        if (this.apiValidity) {
          if (
            !lodash.isEqual(
              this.entityLocation_,
              this.entityData.viz_props.location
            ) &&
            (!lodash.isEqual(this.entityLocation_, this.entityLocationDef) ||
              lodash.isEqual(
                this.entityLocationDef,
                this.entityData.viz_props.location
              ))
          ) {
            this.savePropToAPI("location", this.entityLocation_);
          }
        }
      } else {
        this.entityLocation = Object.assign({}, this.entityLocation_);
      }
    },
    "entityData.viz_props"() {
      if (
        !lodash.isEqual(
          this.entityLocation_,
          this.entityData.viz_props.location
        )
      ) {
        this.entityLocation = Object.assign(
          {},
          this.entityData.viz_props.location
        );
      }
      if (!lodash.isEqual(this.entityColor, this.entityData.viz_props.color))
        this.entityColor = Object.assign({}, this.entityData.viz_props.color);
    },
    "entityData.source"() {
      this.entityLabel = this.entityData.source.Label;
    },
    entityLabel() {
      // doing: updating node's bounding box width and height
      this.updateEntityBoundaryBox();
      this.$emit("setSelfRelSpots", this.relationSpots);
      // todo: save node Label to API
      if (this.apiValidity) {
        // todo: also set it to true when api disconnects
        axios({
          method: "POST",
          url: this.apiUrl + `/entity/updateLabel`,
          params: {
            entityID: this.entityID,
          },
          paramsSerializer: qs.stringify,
          data: qs.stringify({ Label: this.entityLabel }),
        }).then(() => {
          this.entityData.source.Label = this.entityLabel;
          //this.getEntityData();
          if (this.autoSave) {
            // doing: ask server save state to file
            this.$axios.post(this.apiUrl + "/collection/save");
          }
        });
      }
    },
    entityColor: {
      handler() {
        if (
          !lodash.isEqual(this.entityColor, this.entityData.viz_props.color)
        ) {
          this.savePropToAPI("color", this.entityColor);
        }
        //}
      },
      deep: true,
    },
    updateEntityData() {
      if (this.updateEntityData) {
        this.getEntityData();
      }
    },
  },
  created: function () {},
  mounted: function () {
    if (this.entityID !== undefined) {
      console.log(`@ mounted ${this.entityID}`);
      // todo: get node_label, relation_claims, data from the API using the nodeID
    }
    this.getEntityData();

    this.updateEntityBoundaryBox(0);

    //if (this.relClaimMode.mode)
    this.$store.subscribe((mutation, state) => {
      if (this.relClaimMode.mode)
        if (mutation.type === "update_relClaimMode") {
          console.log(state.relClaimMode.targetID);
          this.relClaimMode.targetID = state.relClaimMode.targetID;
          if (this.relClaimMode.targetID !== null && this.apiValidity)
            this.addRelClaim();
        }
    });
  },
  beforeUpdate() {},
  updated() {},
};
</script>

<style lang="sass" scoped></style>
