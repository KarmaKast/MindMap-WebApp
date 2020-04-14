<template>
  <div ref="nodeContainer" :style="nodeContainerStyle">
    <div id="node" :style="nodeStyle" v-touch:start.self="startdrag">
      <!--<input type="text" :style="nodeTextStyle" :value="nodeLabel" />-->
      <p :style="nodeTextStyle">
        {{ nodeLabel }}
      </p>
    </div>
    <div
      v-if="nodeSelected"
      id="nodeUI"
      :style="{
        position: 'absolute',
        top: '-25px',
        display: 'grid'
      }"
    >
      <div
        id="editLabelBttn"
        :style="{
          height: '25px',
          width: '25px',
          backgroundColor: 'red',
          borderRadius: '50%',
          pointerEvents: 'all'
        }"
        v-touch:tap.self="editNodeLabel"
      >
        <input
          v-if="editingLabel"
          ref="labelInput"
          type="text"
          :style="inputTextStyle"
          :value="nodeLabel"
          @input="nodeLabel = $event.target.value"
          @keyup.enter="editNodeLabel"
        />
      </div>
      <color-picker> </color-picker>
    </div>
  </div>
  <!--<v-group
    ref="nodeGroup"
    :config="{
      x: this.canvasSize['width'] / 2 - 80,
      y: this.canvasSize['height'] / 2 - 20,
      draggable: true
    }"
  >
    <v-rect
      ref="rect"
      :config="{
        width: 160,
        height: 40,
        fill: 'rgba(255,255,255,0.2)',
        shadowBlur: 0,
        cornerRadius: 50,
        stroke: 'red',
        strokeWidth: 0.5,
        draggable: false
      }"
    />
    <v-text
      :config="{
        text: this.nodeLabel
      }"
    >
    </v-text>
  </v-group>-->
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
    ColorPicker
  },
  props: {
    ID: String,
    newNodeDef: Boolean,
    apiUrl: String,
    apiValidity: Boolean,
    canvasSize: Object,
    canvasLocation: Object,
    canvasMousePos: Object,
    autoSave: {
      default: false,
      type: Boolean
    },
    grid: Object,
    defaultColors: Object,

    dragging: {
      default() {
        return {
          state: false
        };
      },
      type: Object
    },
    pressed: {
      default() {
        return {
          state: false
        };
      },
      type: Object
    },
    nodeSelected: {
      default: false,
      type: Boolean
    },
    nodeLocationDef: {
      default() {
        return { x: 0, y: 0, z: 0 };
      },
      type: Object
    }
  },
  data: function() {
    return {
      minHeight: 60,
      minWidth: 120,
      nodeLocation: this.nodeLocationDef,
      nodeLabel: "",
      node_ID: this.ID,
      nodeColor: { h: 0, s: 0, l: 0, a: 1 },
      newNode: this.newNodeDef,
      node_data: {
        source: { Label: "" },
        viz_props: {
          location: { x: 0, y: 0, z: 0 },
          color: { h: 166, s: 89, l: 45, a: 1 }
        }
      },
      nodeSize: { height: 60, width: 160 },
      nodeBoundingBoxSize: { height: 0, width: 0 },
      draggingDeltas: { x: 0, y: 0 },
      editingLabel: false
    };
  },
  computed: {
    nodeContainerStyle: function() {
      return {
        position: "absolute",
        top: `${this.canvasLocation["y"] +
          this.canvasSize.height / 2 +
          this.nodeLocation_.y -
          this.nodeBoundingBoxSize.height / 2}px`,
        left: `${this.canvasLocation["x"] +
          this.canvasSize.width / 2 +
          this.nodeLocation_.x -
          this.nodeBoundingBoxSize.width / 2}px`,
        minWidth: `${this.nodeLabel === "" ? this.minWidth : 0}px`,
        minHeight: `${this.nodeLabel === "" ? this.minHeight : 0}px`,
        cursor: this.dragging.state ? "grabbing" : "grab",
        zIndex: this.dragging.state ? "5000" : "unset",

        backgroundColor: this.editingLabel ? "white" : "hsla(0,0%,0%,0.01)",
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
        outline: "none"
      };
    },
    nodeStyle: function() {
      return {
        position: "relative",
        borderRadius: "inherit",
        border: `1px solid hsla(${this.nodeColor.h},${this.nodeColor.s}%, ${this.nodeColor.l}%, ${this.nodeColor.a})`,
        backdropFilter: "blur(2px)",
        pointerEvents: "all",
        display: "grid",
        placeItems: "center",
        boxSizing: "border-box",
        padding: "10px 15px 10px 15px"
      };
    },
    nodeTextStyle: function() {
      return {
        pointerEvents: "none",
        margin: "0px",
        maxWidth: "100px",
        overflowWrap: "break-word",
        color: `hsla(${this.nodeColor.h},${this.nodeColor.s}%, ${this.nodeColor.l}%, ${this.nodeColor.a})`,
        background: "none",
        border: "none",
        userSelect: "none"
      };
    },
    inputTextStyle: function() {
      return {
        position: "absolute",
        bottom: "20px",
        left: "20px"
      };
    },
    nodeLocation_: function() {
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
      //console.log(nodeLoc);
      /*
      doing: debugging: on touch start nodelocation goes wrong
      Note: if I touch somewhere on the canvas and then touch the node the node goes to that location
      Analysis: while using mouse this.canvasMousePos already is on the node but with mouse it is not.
      Solution: before emitting event set canvasMousePos.x using the same calculation in nodeContainerStyle.left
      */

      return nodeLoc;
    }
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
        paramsSerializer: qs.stringify
      }).then(response => {
        console.log(response.data);
        this.node_data.source = response.data[0];
        this.node_data.viz_props = response.data[1].Data;
      });
    },
    savePropToAPI(propName, data) {
      axios({
        method: "post",
        baseURL: this.apiUrl,
        url: `/updateProps/${this.node_ID}`,
        params: {
          [propName]: data
        }
      });
      if (this.autoSave) {
        // doing: ask server save state to file
        axios.post(this.apiUrl + "/save");
      }
    },
    updateNodeBBox(time = 100) {
      // doing: updating node's bounding box width and height
      setTimeout(() => {
        var boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
        this.nodeBoundingBoxSize = {
          width: boundingBox.width,
          height: boundingBox.height
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
              z: this.nodeLocationDef["z"]
            }
          })
        })
      }).then(response => {
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
    }
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
            this.savePropToAPI(
              "location",
              `(${this.nodeLocation_.x},${this.nodeLocation_.y}, 0)`
            );
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
          this.$axios({
            method: "post",
            url: this.apiUrl + `/updateSource/${this.node_ID}`,
            params: {
              label: this.nodeLabel
            }
          });
          if (this.autoSave) {
            // doing: ask server save state to file
            this.$axios.post(this.apiUrl + "/collection/save");
          }
        }
      }
    },
    nodeColor() {
      this.savePropToAPI(
        "color",
        `(${this.nodeColor[0]},${this.nodeColor.s},${this.nodeColor.l}, ${
          this.nodeColor.a !== undefined ? this.nodeColor.a : 1
        })`
      );
      if (this.autoSave) {
        // doing: ask server save state to file
        this.$axios.post(this.apiUrl + "/collection/save");
      }
    }
  },
  created: function() {
    if (this.node_ID === undefined) {
      // create new node using the nodeAPI and take its ID
      console.log(this.node_ID);
    }
  },
  mounted: function() {
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
  },
  beforeUpdate() {},
  updated() {}
};
</script>

<style lang="sass" scoped></style>
