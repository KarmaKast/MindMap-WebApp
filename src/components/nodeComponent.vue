<template>
  <div ref="nodeContainer" :style="nodeStyle" @mousedown.left="startdrag">
    <div
      id="inner"
      :style="{
        borderRadius: 'inherit',
        border: '1.2px dashed rgba(255, 255, 255, 0.28)',
        backdropFilter: 'blur(2px)',
        pointerEvents: 'none',
        display: 'grid',
        placeItems: 'center'
      }"
    >
      <p
        :style="{
          pointerEvents: 'none'
        }"
      >
        {{ newNode ? "" : nodeLabel }}
      </p>
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
export default {
  name: "nodeComponent",
  props: {
    ID: String,
    newNode: Boolean,
    apiUrl: String,
    canvasSize: Object,
    canvasLocation: Object,
    canvasMousePos: Object,
    dragging: {
      default: false,
      type: Boolean
    },
    autoSave: {
      default: true,
      type: Boolean
    },
    defaultColors: Object
  },
  data: function() {
    return {
      minHeight: 40,
      minWidth: 40,
      nodeLocation: { x: 0, y: 0 },
      nodeLabel: "__null__",
      node_data: {},
      nodeSize: { height: 60, width: 160 },
      draggingDeltas: { x: 0, y: 0 }
    };
  },
  computed: {
    canvasCenter: function() {
      return {
        x: this.canvasSize["width"] / 2 - this.nodeSize.width / 2,
        y: this.canvasSize["height"] / 2 - this.nodeSize.height / 2
      };
    },
    nodeStyle: function() {
      return {
        position: "absolute",
        top: `${this.canvasCenter["y"] + this.nodeLocation_["y"]}px`,
        left: `${this.canvasCenter["x"] + this.nodeLocation_["x"]}px`,
        width: `${this.nodeSize["width"]}px`,
        height: `${this.nodeSize["height"]}px`,
        cursor: this.dragging ? "grabbing" : "grab",
        zIndex: this.dragging ? "5000" : "unset",

        backgroundColor: "rgba(255,255,255,0.2)",
        border: `0.5px dashed rgb(255, 164, 164)`,
        borderRadius:
          this.nodeSize["height"] > this.nodeSize["width"]
            ? `${this.nodeSize["height"]}px`
            : `${this.nodeSize["width"]}px`,
        boxShadow: `0px 0px 4px 1px hsla(0, 0%, 0%, 0.1)`,
        display: "grid",
        gridTemplateColumns: "100%",
        padding: "8px"
      };
    },
    nodeLocation_: function() {
      var nodeLoc = this.nodeLocation;
      if (this.dragging) {
        nodeLoc.x =
          this.canvasMousePos.x - this.draggingDeltas.x - this.canvasCenter.x;
        nodeLoc.y =
          this.canvasMousePos.y - this.draggingDeltas.y - this.canvasCenter.y;
      }
      //console.log(nodeLoc);
      return nodeLoc;
    }
  },
  methods: {
    startdrag(event) {
      //console.log("drag started at node");

      var boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
      //console.log(boundingBox);
      // context: draggingDeltas are ---
      this.draggingDeltas["x"] = event.clientX - boundingBox.x;
      this.draggingDeltas["y"] = event.clientY - boundingBox.y;

      this.$emit("startDrag", event, this.ID);
      //console.log(`x:${this.draggingDeltas.x}, y:${this.draggingDeltas.y}`);
    },
    getNodeData() {
      // todo: get node data from api
      // todo: check api url validity
      this.$axios
        .get(this.apiUrl + `/node/get-data/${this.ID}`)
        .then(response => {
          console.log(response["data"]);
          this.node_data = response["data"]["node_viz_data"];
        });
    }
  },
  watch: {
    dragging() {
      if (!this.dragging) {
        this.nodeLocation = this.nodeLocation_;
      }
    },
    nodeLocation_() {
      // todo: save node location to database on drag end
      if (!this.dragging) {
        if (!this.newNode) {
          var msg = `updated location from {x:${this.node_data.viz_props.location[0]},y: ${this.node_data.viz_props.location[1]}} to 
            {x:${this.nodeLocation_.x},y:${this.nodeLocation_.y}}`;
          console.log(msg);
          // todo: WIP
          console.log((this.nodeLocation_.x, this.nodeLocation_.y, 0));
          this.$axios({
            method: "post",
            url: this.apiUrl + `/updateProps/${this.ID}`,
            params: {
              location: `(${this.nodeLocation_.x},${this.nodeLocation_.y}, 0)`
            }
          });
        }
      }
    },
    node_data() {
      this.nodeLocation = {
        x: this.node_data.viz_props.location[0],
        y: this.node_data.viz_props.location[1]
      };
      this.nodeLabel = this.node_data.label;
    }
  },
  created: function() {
    if (this.ID === undefined) {
      // create new node using the nodeAPI and take its ID
      console.log(this.ID);
    }
  },
  mounted: function() {
    if (this.ID !== undefined) {
      console.log(`@ mounted ${this.ID}`);
      // todo: get node_label, relation_claims, data from the API using the nodeID
    }
    if (!this.newNode) {
      this.getNodeData();
    }
  },
  updated() {}
};
</script>

<style lang="sass" scoped></style>
