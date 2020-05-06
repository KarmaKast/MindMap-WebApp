<template>
  <div ref="entityContainer" :style="entityContainerStyleFinal">
    <div v-if="true" class="relSpotsContainer">
      <div
        v-show="showSpots.left"
        class="relSpotLeft relSpots"
        :style="relSelfSpotsLeftStyle"
      ></div>
      <div
        v-show="showSpots.bottom"
        class="relSpotBottom relSpots"
        :style="relSelfSpotsBottomStyle"
      ></div>
      <div
        v-show="showSpots.right"
        class="relSpotRight relSpots"
        :style="relSelfSpotsRightStyle"
      ></div>
      <div
        v-show="showSpots.top"
        class="relSpotTop relSpots"
        :style="relSelfSpotsTopStyle"
      ></div>
    </div>
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
              :config="relationLineConfigs[relClaim.To]"
            ></v-line>
          </v-group>
        </v-layer>
      </v-stage>
    </div>
    <div
      v-show="entitySelectedFinal"
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
        v-touch:start.self="toggleRelClaimMode"
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
import Vue from "vue";
//import ColorPicker from "./general/ColorPicker.vue";

//import {uuidv1} from 'uuid/v1';
import axios from "axios";
import qs from "querystring";
//import lodash from "lodash";
import lodashIsEqual from "lodash/isEqual";
//import * as morphCore from "@karmakast/morph-dbms-core";

export default {
  name: "entityComponent",
  components: {
    //ColorPicker,
  },
  props: {
    colors: Object,
    entityID: { type: String, required: true },
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
    relationSpotsOffset: {
      default: 7,
      type: Number,
    },
    entitySelected: {
      default: undefined,
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
      entitySelectedDef: undefined,
      entitySelectedFinal: this.entitySelected,
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
      entityContainerStylePartStatic: {
        position: "absolute",
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "100%",
        padding: "4px",
        outline: "none",
      },
      relationLineConfigs: {},
      //relationWirePointsPart1: {},
      /*showSpots: {
        left: false,
        bottom: false,
        right: false,
        top: false,
      },*/
    };
  },
  computed: {
    relWireColor: function () {
      return `hsla(${this.colors["backgroundShade1"].h},${this.colors["backgroundShade1"].s}%,${this.colors["backgroundShade1"].l}%, 1)`;
    },
    entityContainerStylePart1: function () {
      return {
        minWidth: `${this.entityLabel === "" ? this.minWidth : 0}px`,
        minHeight: `${this.entityLabel === "" ? this.minHeight : 0}px`,
        cursor: this.dragging.state ? "grabbing" : "grab",
        zIndex: this.dragging.state ? "5000" : "unset",
        backgroundColor:
          this.editingLabel && this.entitySelectedFinal
            ? "white"
            : "hsla(0,0%,0%,0.01)",
        /*border: `1px dotted hsla(${this.entityColor.h},${this.entityColor.s}%,${this.entityColor.l}%, 0.2)`,*/
        borderRadius:
          this.entitySize["height"] > this.entitySize["width"]
            ? `${this.entitySize["height"]}px`
            : `${this.entitySize["width"]}px`,
        /*boxShadow: `${
          this.dragging.state
            ? "rgba(0, 0, 0, 0.2) 0px 0px 13px 4px"
            : "rgba(0, 0, 0, 0.05) 0px 0px 3px 2px"
        }, inset 0px 0px 0 4px hsla(${this.entityColor.h},
        ${this.entityColor.s}%,
        ${this.entityColor.l}%, 0.2)`,*/
      };
    },
    entityContainerStylePart2: function () {
      return {
        top: `${
          this.canvasSize.height / 2 +
          this.entityLocation_.y -
          this.entityBoundingBoxSize.height / 2
        }px`,
        left: `${
          this.canvasSize.width / 2 +
          this.entityLocation_.x -
          this.entityBoundingBoxSize.width / 2
        }px`,
      };
    },
    entityContainerStyleFinal: function () {
      return Object.assign(
        {},
        this.entityContainerStylePartStatic,
        this.entityContainerStylePart1,
        this.entityContainerStylePart2,
        {
          transform: `translate(
          ${this.canvasLocation.x + "px"},
          ${this.canvasLocation.y + "px"}
        )`,
        }
      );
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
    relationWiresStylePart1: function () {
      return {
        position: "absolute",
        left:
          0 -
          /*this.canvasLocation.x -*/
          this.canvasSize.width / 2 -
          this.entityLocation_.x +
          this.entityBoundingBoxSize.width / 2,
        top:
          0 -
          /*this.canvasLocation.y -*/
          this.canvasSize.height / 2 -
          this.entityLocation_.y +
          this.entityBoundingBoxSize.height / 2,
        pointerEvents: "none",
        position: "absolute",
      };
    },
    relationWiresStyle: function () {
      return Object.assign({}, this.relationWiresStylePart1, {
        left: this.relationWiresStylePart1.left - this.canvasLocation.x + "px",
        top: this.relationWiresStylePart1.top - this.canvasLocation.y + "px",
      });
    },
    relationSpots: function () {
      //console.log("I should not be seen when dragging canvas");
      return {
        left:
          /*this.canvasLocation.x +*/
          /*this.canvasSize.width / 2 +*/
          this.entityLocation_.x -
          this.entityBoundingBoxSize.width / 2 -
          this.relationSpotsOffset,
        right:
          /*this.canvasLocation.x +*/
          /*this.canvasSize.width / 2 +*/
          this.entityLocation_.x +
          this.entityBoundingBoxSize.width / 2 +
          this.relationSpotsOffset,
        top:
          /*this.canvasLocation.y +*/
          /*this.canvasSize.height / 2 +*/
          this.entityLocation_.y -
          this.entityBoundingBoxSize.height / 2 -
          this.relationSpotsOffset,
        bottom:
          /*this.canvasLocation.y +*/
          /*this.canvasSize.height / 2 +*/
          this.entityLocation_.y +
          this.entityBoundingBoxSize.height / 2 +
          this.relationSpotsOffset,
      };
    },
    relationWirePointsPart1: function () {
      // todo: this is a object of objects. refactor this with a data object and watchers
      let res = {};
      /*let offsetsStatic = {
        x: {
          left: -1,
          top: 0,
          right: 1,
          bottom: 0,
        },
        y: { left: 0, top: 1, right: 0, bottom: -1 },
      };*/
      for (const relClaim of this.entityData.source.RelationClaims) {
        let targetSpots = this.targetRelSpots
          ? this.targetRelSpots[relClaim.To]
          : undefined;
        if (targetSpots) {
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

          for (const targetKey in targetSpots) {
            for (const selfKey in selfSpots) {
              const distance = dist(targetSpots[targetKey], selfSpots[selfKey]);
              if (minDistance === undefined || distance < minDistance) {
                minDistance = distance;
                minDistanceKeys = { target: targetKey, self: selfKey };
              }
            }
          }
          if (this.entityLabel === "client-side")
            console.log(minDistance, minDistanceKeys);
          // todo: .
          //this.showSpots[minDistanceKeys.self] = true;
          res[relClaim.To] = {
            points: [
              selfSpots[minDistanceKeys.self].x,
              selfSpots[minDistanceKeys.self].y,
              targetSpots[minDistanceKeys.target].x,
              targetSpots[minDistanceKeys.target].y,
            ],
            selfSpot: minDistanceKeys.self,
          };
        } else res[relClaim.To] = [0, 0, 0, 0];
      }
      return res;
    },
    showSpots() {
      const res = {
        left: false,
        bottom: false,
        right: false,
        top: false,
      };
      Object.entries(this.relationWirePointsPart1).forEach(
        ([entityID, value]) => {
          res[value.selfSpot] = true;
        }
      );
      return res;
    },
    relationWirePointsPart2: function () {
      const res = {};
      Object.entries(this.relationWirePointsPart1).forEach(
        ([entityID, value]) => {
          // doing: accounting for target radius offset
          const radiusOffset = this.relationSpotsOffset; // might be different to relationSpotsOffset in future
          const temp = value.points;
          const totalDist = Math.sqrt(
            Math.pow(temp[2] - temp[0], 2) + Math.pow(temp[3] - temp[1], 2)
          );
          const distanceRatio = radiusOffset / totalDist;
          res[entityID] = [
            temp[0],
            temp[1],
            // doing: accounting for target radius offset
            (1 - distanceRatio) * temp[2] + distanceRatio * temp[0],
            (1 - distanceRatio) * temp[3] + distanceRatio * temp[1],
          ];
        }
      );
      return res;
    },
    /*relationWirePoints: function () {
      //relationWireTargetPoints
      const res = {};
      Object.entries(this.relationWirePointsPart2).forEach(
        ([entityID, relationWirePoints]) => {
          res[entityID] = [
            relationWirePoints[0] + this.canvasLocation.x,
            relationWirePoints[1] + this.canvasLocation.y,
            relationWirePoints[2] + this.canvasLocation.x,
            relationWirePoints[3] + this.canvasLocation.y,
          ];
        }
      );
      return res;
    },*/
    relationWirePointsPart3: function () {
      // doing: accounting for canvas location changes
      //relationWireTargetPoints
      // a circle of radius this.relationSpotsOffset is created. and the target line should stop at the that circle
      // so the end points needs to calculation by removing a length of that radius * 2
      const res = {};
      Object.entries(this.relationWirePointsPart2).forEach(
        ([entityID, relationWirePoints]) => {
          res[entityID] = [
            relationWirePoints[0] + this.canvasLocation.x,
            relationWirePoints[1] + this.canvasLocation.y,
            relationWirePoints[2] + this.canvasLocation.x,
            relationWirePoints[3] + this.canvasLocation.y,
          ];
        }
      );
      return res;
    },
    relationWirePoints: function () {
      // doing: accounting for canvas resize
      const res = {};
      Object.entries(this.relationWirePointsPart3).forEach(
        ([entityID, relationWirePoints]) => {
          res[entityID] = [
            relationWirePoints[0] + this.canvasSize.width / 2,
            relationWirePoints[1] + this.canvasSize.height / 2,
            relationWirePoints[2] + this.canvasSize.width / 2,
            relationWirePoints[3] + this.canvasSize.height / 2,
          ];
        }
      );
      return res;
    },

    relStageSize: function () {
      return this.canvasSize;
    },
    relSelfSpotsStylePart1: function () {
      return {
        //height: this.relationSpotsOffset * 2 + "px",
        //width: this.relationSpotsOffset * 2 + "px",
        height: "4px",
        width: "4px",
        //border: `1px solid ${this.relWireColor}`,
        backgroundColor: `${this.relWireColor}`,
        boxSizing: "border-box",
        //boxShadow: `hsla(0,0%,${this.colors["backgroundShade2"].l}%,0.5) 0px 0px 0px 4px inset, ${this.relWireColor} 0px 0px 0px 8px inset`,
      };
    },
    relSelfSpotsLeftStyle: function () {
      return Object.assign({}, this.relSelfSpotsStylePart1, {
        top:
          (this.relationSpots.bottom - this.relationSpots.top) / 2 -
          this.relationSpotsOffset -
          2 +
          "px",
        left: -this.relationSpotsOffset - 2 + "px",
      });
    },
    relSelfSpotsBottomStyle: function () {
      return Object.assign({}, this.relSelfSpotsStylePart1, {
        bottom: -this.relationSpotsOffset - 2 + "px",
        left:
          (this.relationSpots.right - this.relationSpots.left) / 2 -
          this.relationSpotsOffset -
          2 +
          "px",
      });
    },
    relSelfSpotsRightStyle: function () {
      return Object.assign({}, this.relSelfSpotsStylePart1, {
        top:
          (this.relationSpots.bottom - this.relationSpots.top) / 2 -
          this.relationSpotsOffset -
          2 +
          "px",
        right: -this.relationSpotsOffset - 2 + "px",
      });
    },
    relSelfSpotsTopStyle: function () {
      return Object.assign({}, this.relSelfSpotsStylePart1, {
        top: -this.relationSpotsOffset - 2 + "px",
        left:
          (this.relationSpots.right - this.relationSpots.left) / 2 -
          this.relationSpotsOffset -
          2 +
          "px",
      });
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
        //console.log("I should not be seen when dragging canvas");
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
        this.entityData.viz_props[propName] =
          data instanceof Object ? Object.assign({}, data) : data;
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
        //console.log("I should not be seen when dragging canvas");
        this.$emit("setSelfRelSpots", this.relationSpots);
        //console.log(boundingBox);
        //this.entityBoundingBoxSize = boundingBox;
      }, time);
    },
    editentityLabel(event) {
      //console.log(event);
      this.editingLabel = this.editingLabel ? false : true;
      //setInterval
      if (this.editingLabel) {
        setTimeout(() => {
          this.$refs.labelInput.focus();
        }, 100);
      }
    },
    toggleRelClaimMode() {
      this.relClaimMode.mode = !this.relClaimMode.mode;
      //console.log("I should not have been called yet");
      this.$store.commit("update_relClaimMode", {
        mode: this.relClaimMode.mode,
        targetID: this.relClaimMode.targetID,
        claimantID: this.entityID,
      });
      //console.log("starting relclaim mode on node : ", this.entityID);
    },
    confirmRelClaimTarget(event) {
      event.preventDefault();
      if (!this.relClaimMode.mode && this.$store.state.relClaimMode.mode) {
        //console.log(event);
        //console.log("I should not have been called yet");
        if (event.type === "mouseup") {
          this.$store.commit("update_relClaimMode", {
            mode: true,
            targetID: this.entityID,
            claimantID: this.$store.state.relClaimMode.claimantID,
          });
        } else {
          this.$store.commit("update_relClaimMode", {
            mode: true,
            targetID: this.entityID,
            claimantID: this.$store.state.relClaimMode.claimantID,
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
    apiValidity() {},
    canvasLocation: {
      handler() {
        //this.$emit("setSelfRelSpots", this.relationSpots);
      },
      deep: true,
    },
    entitySelected: {
      handler() {
        this.entitySelectedFinal = this.entitySelected ? true : false;
      },
      deep: true,
    },
    relationSpots() {
      //console.log("I should not be seen when dragging canvas");
      this.$emit("setSelfRelSpots", this.relationSpots);

      // todo: this is a object of objects. refactor this with a data object and watchers
      /*let res = {};
      let offsetsStatic = {
        x: {
          left: -1,
          top: 0,
          right: 1,
          bottom: 0,
        },
        y: { left: 0, top: 1, right: 0, bottom: -1 },
      };
      for (const relClaim of this.entityData.source.RelationClaims) {
        let targetSpots = this.targetRelSpots
          ? this.targetRelSpots[relClaim.To]
          : undefined;
        if (targetSpots) {
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

          for (const targetKey in targetSpots) {
            for (const selfKey in selfSpots) {
              const distance = dist(targetSpots[targetKey], selfSpots[selfKey]);
              if (minDistance === undefined || distance < minDistance) {
                minDistance = distance;
                minDistanceKeys = { target: targetKey, self: selfKey };
              }
            }
          }
          console.log(minDistance, minDistanceKeys);
          // todo: .
          this.showSpots[minDistanceKeys.self] = true;
          res[relClaim.To] = [
            selfSpots[minDistanceKeys.self].x,
            selfSpots[minDistanceKeys.self].y,
            targetSpots[minDistanceKeys.target].x,
            targetSpots[minDistanceKeys.target].y,
          ];
        } else res[relClaim.To] = [0, 0, 0, 0];
      }
      this.relationWirePointsPart1 = Object.assign({}, res);*/
    },

    relationWirePoints() {
      // doing: initiate and modify relationLineConfigs data
      Object.entries(this.relationWirePoints).forEach(([key, points]) => {
        // doing: if key doesn't exist in relationLineConfigs add it.
        if (
          Object.keys(this.relationLineConfigs).some(
            (targetEntityID) => targetEntityID === key
          )
        ) {
          if (!lodashIsEqual(points, this.relationLineConfigs[key].points)) {
            Vue.set(
              this.relationLineConfigs,
              key,
              Object.assign({}, this.relationLineConfigs[key], {
                points: points,
              })
            );
          }
        } else {
          Vue.set(
            this.relationLineConfigs,
            key,
            Object.assign({}, this.relationLineConfigs[key], {
              points: points,
              stroke: this.relWireColor,
              strokeWidth:
                this.dragging.state || this.entitySelectedFinal ? 2 : 1,
              lineCap: "round",
              lineJoin: "round",
              // currently only starting and endling points are used. for bezier to work some points in the middle maybe needed
              //tension: 5,
              //bezier: true,
              closed: false,
            })
          );
        }
      });
      // doing: if relationLineConfigs has a key that relationWirePoints doesn't have remove it
      Object.keys(this.relationLineConfigs).some((targetEntityID) => {
        if (!Object.keys(this.relationWirePoints).includes(targetEntityID)) {
          Vue.delete(this.relationLineConfigs, targetEntityID);
        }
      });
    },
    relWireColor() {
      Object.entries(this.relationLineConfigs).forEach(([key, config]) => {
        //
        Vue.set(
          this.relationLineConfigs,
          key,
          Object.assign({}, this.relationLineConfigs[key], {
            stroke: this.relWireColor,
          })
        );
      });
    },
    "dragging.state"() {
      Object.entries(this.relationLineConfigs).forEach(([key, config]) => {
        Vue.set(
          this.relationLineConfigs,
          key,
          Object.assign({}, this.relationLineConfigs[key], {
            strokeWidth:
              this.dragging.state || this.entitySelectedFinal ? 2 : 1,
          })
        );
      });
    },

    entitySelectedFinal() {
      if (this.apiValidity) {
        if (
          !lodashIsEqual(
            this.entitySelectedFinal,
            this.entityData.viz_props.selected
          )
        ) {
          this.savePropToAPI("selected", this.entitySelectedFinal);
        }
      }
      Object.entries(this.relationLineConfigs).forEach(([key, config]) => {
        Vue.set(
          this.relationLineConfigs,
          key,
          Object.assign({}, this.relationLineConfigs[key], {
            strokeWidth:
              this.dragging.state || this.entitySelectedFinal ? 2 : 1,
          })
        );
      });
    },
    entityLocation_() {
      // todo: save node location to database on drag end

      this.$emit("setSelfRelSpots", this.relationSpots);
      if (!this.dragging.state) {
        if (this.apiValidity) {
          if (
            !lodashIsEqual(
              this.entityLocation_,
              this.entityData.viz_props.location
            ) &&
            (!lodashIsEqual(this.entityLocation_, this.entityLocationDef) ||
              lodashIsEqual(
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
        !lodashIsEqual(this.entityLocation_, this.entityData.viz_props.location)
      ) {
        this.entityLocation = Object.assign(
          {},
          this.entityData.viz_props.location
        );
      }
      if (this.entityData.viz_props.selected !== this.entitySelectedFinal) {
        if (this.entitySelectedDef === undefined) {
          this.entitySelectedDef = this.entityData.viz_props.selected;
        }
        if (this.entitySelectedDef)
          this.$emit("prevActiveEntityID", this.entityID);
        this.entitySelectedFinal = this.entityData.viz_props.selected;
      }
      if (!lodashIsEqual(this.entityColor, this.entityData.viz_props.color))
        this.entityColor = Object.assign({}, this.entityData.viz_props.color);
    },
    "entityData.source"() {
      if (this.entityData.source.Label)
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
          Vue.set(this.entityData.source, "Label", this.entityLabel);
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
        if (!lodashIsEqual(this.entityColor, this.entityData.viz_props.color)) {
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
    pressed: {
      handler() {
        /*console.log(
          ` ${this.entityID} If i haven't pressed any entity I should not be seen`
        );*/
        //if (this.pressed.state)
        /*if (this.entitySelected !== undefined) {
          console.log(
            "im called",
            this.entitySelectedFinal,
            this.entitySelected
          );
          this.entitySelectedFinal = this.entitySelected;
        }*/
      },
      deep: true,
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
          //console.log(state.relClaimMode.targetID);
          this.relClaimMode.targetID = state.relClaimMode.targetID;
          if (this.relClaimMode.targetID !== null && this.apiValidity)
            this.addRelClaim();
          if (state.relClaimMode.claimantID === this.entityID)
            this.relClaimMode.mode = state.relClaimMode.mode;
        }
    });
  },
  beforeUpdate() {},
  updated() {},
};
</script>

<style scoped>
.relSpots {
  border-radius: 50%;
  position: absolute;
}
</style>
