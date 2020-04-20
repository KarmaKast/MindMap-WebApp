<template>
  <div ref="nodeContainer" :style="nodeContainerStyle">
    <div
      id="relationWires"
      :style="{
        position: 'absolute',
        left: '0px',
        top: '0px',
        pointerEvents: 'none',
        position: 'absolute',
      }"
    >
      <v-stage
        :config="{
          width: this.canvasSize.width,
          height: this.canvasSize.height,
        }"
      >
        <v-layer>
          <v-group>
            <v-line
              v-for="(relClaim, index) in node_data.source.RelationClaims"
              :key="index"
              :config="{
                points: getRelWirePoints(relClaim),
                stroke: 'red',
                strokeWidth: 1,
                lineCap: 'round',
                lineJoin: 'round',
              }"
            ></v-line>
          </v-group>
        </v-layer>
      </v-stage>
    </div>
    <div
      v-if="nodeSelected"
      id="nodeUI"
      :style="{
        position: 'absolute',
        display: 'grid',
      }"
    >
      <div
        id="editLabelBttn"
        :style="{
          position: 'absolute',
          bottom: '5px',
          height: '25px',
          width: '25px',
          backgroundColor: 'red',
          borderRadius: '50%',
          pointerEvents: 'all',
        }"
        v-touch:tap.self="editNodeLabel"
      >
        <input
          v-if="editingLabel"
          ref="labelInput"
          type="text"
          :style="inputTextStyle"
          v-model.lazy="nodeLabel"
          @input="nodeLabel = $event.target.value"
          @keyup.enter="editNodeLabel"
        />
      </div>
      <color-picker v-if="false"></color-picker>

      <div
        :style="{
          position: 'absolute',
          top: '18px',
          left: '130px',
          height: '25px',
          width: '25px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          pointerEvents: 'all',
        }"
        v-touch:start.self="startRelClaimMode"
        v-touch:end="confirmRelClaimTarget"
      ></div>
    </div>
    <div
      id="node"
      :style="nodeStyle"
      v-touch:start.self="startdrag"
      v-touch:end="confirmRelClaimTarget"
    >
      <!--<input type="text" :style="nodeTextStyle" :value="nodeLabel" />-->
      <p :style="nodeTextStyle">{{ nodeLabel }}</p>
    </div>
  </div>
</template>

<script>
import ColorPicker from "./general/ColorPicker.vue";

//import {uuidv1} from 'uuid/v1';
import axios from "axios";
import qs from "querystring";
//import * as morphCore from "@karmakast/morph-dbms-core";

export default {
  name: "nodeComponent",
  components: {
    ColorPicker,
  },
  props: {
    ID: String,
    newNodeDef: Boolean,
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
    nodeSelected: {
      default: false,
      type: Boolean,
    },
    nodeLocationDef: {
      default() {
        return { x: 0, y: 0, z: 0 };
      },
      type: Object,
    },
    targetRelSpots: Object,
  },
  data: function () {
    return {
      minHeight: 60,
      minWidth: 120,
      nodeLocation: this.nodeLocationDef,
      nodeLabel: "",
      node_ID: this.ID,
      nodeColor: { h: 0, s: 0, l: 0, a: 1 },
      newNode: this.newNodeDef,
      node_data: {
        source: { Label: "", RelationClaims: [] },
        viz_props: {
          location: { x: 0, y: 0, z: 0 },
          color: { h: 166, s: 89, l: 45, a: 1 },
        },
      },
      nodeSize: { height: 60, width: 160 },
      nodeBoundingBoxSize: { height: 0, width: 0 },
      draggingDeltas: { x: 0, y: 0 },
      editingLabel: false,
      relClaimMode: { mode: false, targetID: null },
    };
  },
  computed: {
    nodeContainerStyle: function () {
      return {
        position: "absolute",
        top: `${
          this.canvasLocation["y"] +
          this.canvasSize.height / 2 +
          this.nodeLocation_.y -
          this.nodeBoundingBoxSize.height / 2
        }px`,
        left: `${
          this.canvasLocation["x"] +
          this.canvasSize.width / 2 +
          this.nodeLocation_.x -
          this.nodeBoundingBoxSize.width / 2
        }px`,
        minWidth: `${this.nodeLabel === "" ? this.minWidth : 0}px`,
        minHeight: `${this.nodeLabel === "" ? this.minHeight : 0}px`,
        cursor: this.dragging.state ? "grabbing" : "grab",
        zIndex: this.dragging.state ? "5000" : "unset",

        backgroundColor:
          this.editingLabel && this.nodeSelected
            ? "white"
            : "hsla(0,0%,0%,0.01)",
        border: `1px dotted hsla(${this.nodeColor.h},${this.nodeColor.s}%,${this.nodeColor.l}%, 0.2)`,
        borderRadius:
          this.nodeSize["height"] > this.nodeSize["width"]
            ? `${this.nodeSize["height"]}px`
            : `${this.nodeSize["width"]}px`,
        boxShadow: `${
          this.dragging.state
            ? "rgba(0, 0, 0, 0.2) 0px 0px 13px 4px"
            : "rgba(0, 0, 0, 0.15) 0px 0px 3px 2px"
        }, inset 0px 0px 0 4px hsla(${this.nodeColor.h},
        ${this.nodeColor.s}%,
        ${this.nodeColor.l}%, 0.2)`,
        boxSizing: "border-box",
        display: "grid",
        gridTemplateColumns: "100%",
        padding: "4px",
        outline: "none",
      };
    },
    nodeStyle: function () {
      return {
        position: "relative",
        borderRadius: "inherit",
        border: `1px solid hsla(${this.nodeColor.h},${this.nodeColor.s}%, ${this.nodeColor.l}%, 0.8)`,
        backdropFilter: "blur(2px)",
        pointerEvents: "all",
        display: "grid",
        placeItems: "center",
        boxSizing: "border-box",
        padding: "10px 15px 10px 15px",
      };
    },
    nodeTextStyle: function () {
      return {
        pointerEvents: "none",
        margin: "0px",
        maxWidth: "100px",
        overflowWrap: "break-word",
        color: `hsla(${this.nodeColor.h},${this.nodeColor.s}%, ${
          this.nodeColor.l
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
    nodeLocation_: function () {
      var nodeLoc = this.nodeLocation;
      if (this.dragging.state) {
        // todo: this is working as intended. Just need to detect drag differently from simply clicking in.

        nodeLoc.x =
          this.canvasMousePos.x -
          this.canvasSize.width / 2 -
          this.canvasLocation.x;

        nodeLoc.y =
          this.canvasMousePos.y -
          this.canvasSize.height / 2 -
          this.canvasLocation.y;

        if (this.grid.snap) {
          nodeLoc.x =
            (Math.floor((nodeLoc.x - this.grid.size / 2) / this.grid.size) +
              1) *
            this.grid.size;

          nodeLoc.y =
            (Math.floor((nodeLoc.y - this.grid.size / 2) / this.grid.size) +
              1) *
            this.grid.size;
        } else {
          var boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
          nodeLoc.x += boundingBox.width / 2 - this.draggingDeltas.x;
          nodeLoc.y += boundingBox.height / 2 - this.draggingDeltas.y;
        }
      }
      return nodeLoc;
    },
    relationWiresStyle: function () {
      return 0;
    },
    relationSpots: function () {
      var boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
      //console.log(boundingBox);
      if (this.dragging.state)
        boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
      return [boundingBox.left, boundingBox.right];
    },
  },
  methods: {
    startdrag(event) {
      //console.log("drag started at node");
      // doing: calculating draggingDeltas
      if ([1].includes(event.which) || event.type === "touchstart") {
        if (!this.pressed.state) {
          var boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
          //console.log(boundingBox);

          if (event.type === "mousedown") {
            this.draggingDeltas["x"] =
              event.clientX - boundingBox.x + this.canvasLocation.x;
            this.draggingDeltas["y"] =
              event.clientY - boundingBox.y + this.canvasLocation.y;
          } else if (event.type == "touchstart") {
            this.draggingDeltas["x"] =
              event.touches[0].clientX - boundingBox.x + this.canvasLocation.x;
            this.draggingDeltas["y"] =
              event.touches[0].clientY - boundingBox.y + this.canvasLocation.y;
          }
          this.$emit("setStartingCanvasMousePos", event);
          this.$emit("nodeActivated", event, this.ID);
        }
      }
    },
    getNodeData() {
      // doing: get node data from api
      // todo: check api url validity
      axios({
        method: "GET",
        url: this.apiUrl + `/entity/get`,
        params: { entityID: this.node_ID },
        paramsSerializer: qs.stringify,
      }).then((response) => {
        console.log(response.data);
        this.node_data.source = response.data[0];
        this.node_data.viz_props = response.data[1].Data;
      });
    },
    savePropToAPI(propName, data) {
      axios({
        method: "POST",
        baseURL: this.apiUrl,
        url: `/entity/updateProps/`,
        params: {
          entityID: this.node_ID,
        },
        paramsSerializer: qs.stringify,
        data: qs.stringify({
          props: JSON.stringify({
            [propName]: data,
          }),
        }),
      }).then(() => {
        if (this.autoSave) {
          // doing: ask server save state to file
          axios.post(this.apiUrl + "/collection/save");
        }
      });
    },
    updateNodeBBox(time = 100) {
      // doing: updating node's bounding box width and height
      setTimeout(() => {
        var boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
        this.nodeBoundingBoxSize = {
          width: boundingBox.width,
          height: boundingBox.height,
        };
      }, time);
    },
    createNodeInDatabase() {
      //console.log(`from createNodeInDatabase: /node/create/${this.nodeLabel}`);
      axios({
        method: "POST",
        baseURL: this.apiUrl,
        url: `/entity/create`,
        data: qs.stringify({
          vizProps: JSON.stringify({
            location: {
              x: this.nodeLocationDef["x"],
              y: this.nodeLocationDef["y"],
              z: this.nodeLocationDef["z"],
            },
          }),
        }),
      }).then((response) => {
        //console.log("getting response");
        //console.log(response);
        this.node_ID = response.data.entityID;
      });
    },
    editNodeLabel(event) {
      console.log(event);
      /*if (this.newNode) {
        this.newNode = false;
      }*/
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
      console.log("starting relclaim mode on node : ", this.node_ID);
    },
    confirmRelClaimTarget(event) {
      if (!this.relClaimMode.mode && this.$store.state.relClaimMode.mode) {
        console.log(event);
        if (event.type === "mouseup") {
          this.$emit("");

          this.$store.commit("update_relClaimMode", {
            mode: true,
            targetID: this.node_ID,
          });
        } else {
          console.log("touch mode not implimented yet");
        }
      }
    },
    addRelClaim() {
      axios({
        method: "POST",
        baseURL: this.apiUrl,
        url: `/entity/addRelClaim`,
        data: qs.stringify({
          claimantID: this.node_ID,
          targetID: this.relClaimMode.targetID,
        }),
      }).then((response) => {
        //console.log("getting response");
        //console.log(response);
        //this.node_ID = response.data.entityID;
        this.relClaimMode.mode = false;
        this.relClaimMode.targetID = null;
        console.log(JSON.parse(response.data.relClaim));
        this.node_data.source.RelationClaims.push(
          JSON.parse(response.data.relClaim)
        );
      });
    },
    getRelWirePoints(relClaim) {
      console.log({ relClaim });
      this.$emit("getTargetRelSpots", relClaim.To);
      return [0, 25, 200, 25];
    },
  },
  watch: {
    "dragging.state"() {
      if (!this.dragging.state) {
        this.nodeLocation = this.nodeLocation_;
      }
    },
    apiValidity() {},

    nodeLocation_() {
      // todo: save node location to database on drag end
      if (!this.dragging.state) {
        if (this.apiValidity) {
          //var msg = `updated location from {x:${this.node_data.viz_props.location[0]},y: ${this.node_data.viz_props.location[1]}} to
          //  {x:${this.nodeLocation_.x},y:${this.nodeLocation_.y}}`;
          //console.log(msg);
          // todo: WIP
          //console.log([this.nodeLocation_.x, this.nodeLocation_.y, 0]);
          /*if (this.newNode) {
            this.newNode = false;
            this.createNodeInDatabase();
          }*/
          if (!this.newNode) {
            this.savePropToAPI("location", this.nodeLocation_);
          }
        }
      }
    },
    "node_data.viz_props"() {
      this.nodeLocation.x = this.node_data.viz_props.location.x;
      this.nodeLocation.y = this.node_data.viz_props.location.y;
      this.nodeColor = this.node_data.viz_props.color;
    },
    "node_data.source"() {
      this.nodeLabel = this.node_data.source.Label;
    },
    newNode() {
      // doing: updating node's bounding box width and height
      this.updateNodeBBox();
    },
    nodeLabel() {
      if (!this.newNode) {
        // doing: updating node's bounding box width and height
        this.updateNodeBBox();
        // todo: save node Label to API
        if (this.apiValidity) {
          // todo: also set it to true when api disconnects
          axios({
            method: "POST",
            url: this.apiUrl + `/entity/updateLabel`,
            params: {
              entityID: this.node_ID,
            },
            paramsSerializer: qs.stringify,
            data: qs.stringify({ Label: this.nodeLabel }),
          }).then(() => {
            if (this.autoSave) {
              // doing: ask server save state to file
              this.$axios.post(this.apiUrl + "/collection/save");
            }
          });
        }
      }
    },
    nodeColor() {
      this.savePropToAPI("color", this.nodeColor);
      if (this.autoSave) {
        // doing: ask server save state to file
        this.$axios.post(this.apiUrl + "/collection/save");
      }
    },
  },
  created: function () {
    if (this.node_ID === undefined) {
      // create new node using the nodeAPI and take its ID
      console.log(this.node_ID);
    }
  },
  mounted: function () {
    if (this.node_ID !== undefined) {
      console.log(`@ mounted ${this.node_ID}`);
      // todo: get node_label, relation_claims, data from the API using the nodeID
    }
    if (!this.newNode) {
      this.getNodeData();
    }
    if (this.newNode && this.apiValidity) {
      this.newNode = false;
      this.createNodeInDatabase();
    }
    this.updateNodeBBox(0);

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
