<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    :style="canvasContainerStyle"
    @mousemove="getMousePos"
    @mouseup.left="stopDrag"
  >
    <div id="grid" :style="gridStyle"></div>
    <div id="nodes">
      <nodeComponent
        v-for="(value, key_) in processedNodes"
        :key="key_"
        :ID="key_"
        :apiUrl="apiUrl"
        :canvasSize="{ height: height, width: width }"
        :canvasLocation="canvasLocation"
        :canvasMousePos="value.canvasMousePos"
        :defaultColors="colors"
        :dragging="value.dragging"
        :newNode="value.newNode"
        :gridSize="gridSize"
        @startDrag="startDrag"
      >
      </nodeComponent>
    </div>

    <div id="relationWires" :style="{ pointerEvents: 'none' }">
      <v-stage ref="stage" :config="canvasConfig">
        <v-layer>
          <v-group
            :config="{
              draggable: false
            }"
          >
          </v-group>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>
<script>
import nodeComponent from "./nodeComponent";

export default {
  name: "MindMapCanvas",
  components: {
    nodeComponent
  },
  props: {
    colors: Object,
    colorsProcessed: Object,
    nodes: Array,
    apiUrl: String,
    apiValidity: Boolean,
    gridSize: {
      default: 1,
      type: Number
    }
  },
  data: function() {
    return {
      mindmapCanvas: null,
      dragItemId: null,
      canvasLocation: { x: 0, y: 0 },
      canvasMousePos: { x: 0, y: 0 },
      canvasContainerBoxLoc: { x: 0, y: 0 },
      nodeDragging: {
        nodeID: undefined,
        state: undefined
      }
    };
  },
  computed: {
    processedNodes: function() {
      var nodes_ = {};
      for (var node of this.nodes) {
        nodes_[node.ID] = {
          dragging:
            node.ID === this.nodeDragging.nodeID
              ? this.nodeDragging.state
              : false,
          canvasMousePos: this.canvasMousePos,
          newNode: node.newNode
        };
      }
      return nodes_;
    },
    height: function() {
      // todo: redo this with store.subscribe
      return this.$store.state.canvas_height;
    },
    width: function() {
      return this.$store.state.canvas_width;
    },
    canvasConfig: function() {
      return {
        height: this.height,
        width: this.width
      };
    },
    canvasContainerStyle: function() {
      return {
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden"
      };
    },
    gridStyle: function() {
      return {
        height: "110%",
        width: "110%",
        position: "absolute",
        top: `-${this.gridSize - ((this.height / 2) % this.gridSize)}px`,
        left: `-${this.gridSize - ((this.width / 2) % this.gridSize)}px`,
        backgroundImage: `repeating-linear-gradient(rgba(255, 255, 255, 0), ${this.colorsProcessed["theme_light"]} 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) ${this.gridSize}px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0), ${this.colorsProcessed["theme_light"]} 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) ${this.gridSize}px)`
      };
    }
  },
  methods: {
    startDrag(event, ID) {
      //console.log("drag started at canvas");
      if (this.nodeDragging.nodeID === undefined) {
        this.nodeDragging.nodeID = ID;
        this.nodeDragging.state = true;

        // context: since canvas bounding box x,y is taken once at the start of the drag, if for some reason canvas container position changes relative to the window top-left it will make the drag to malfunction
        this.canvasContainerBoxLoc.x = this.$refs.canvasContainer.getBoundingClientRect().x;
        this.canvasContainerBoxLoc.y = this.$refs.canvasContainer.getBoundingClientRect().y;

        this.canvasMousePos.x = event.clientX - this.canvasContainerBoxLoc.x;
        this.canvasMousePos.y = event.clientY - this.canvasContainerBoxLoc.y;
      }
    },
    stopDrag() {
      //console.log("drag stopped at canvas");
      this.nodeDragging.nodeID = undefined;
      this.nodeDragging.state = false;
    },
    getMousePos(event) {
      if (this.nodeDragging.state === true) {
        this.canvasMousePos.x = event.clientX - this.canvasContainerBoxLoc.x;
        this.canvasMousePos.y = event.clientY - this.canvasContainerBoxLoc.y;
      }
    }
  },
  watch: {},
  created: function() {},
  mounted: function() {
    var box = this.$refs.canvasContainer.getBoundingClientRect();
    this.$store.commit("update_canvas_height", box.height);
    this.$store.commit("update_canvas_width", box.width);

    this.$store.subscribe(mutation => {
      if (
        ["update_window_height", "update_window_width"].includes(mutation.type)
      ) {
        box = this.$refs.canvasContainer.getBoundingClientRect();
        this.$store.commit("update_canvas_height", box.height);
        this.$store.commit("update_canvas_width", box.width);
        // todo: WIP
      }
    });
  },
  updated: function() {}
};
</script>
<style lang="sass" scoped></style>
