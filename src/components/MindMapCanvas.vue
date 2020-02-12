<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    style="height:100%; width:100%; position:relative; overflow: hidden;"
    @mousemove="getMousePos"
    @mouseup.left="stopDrag"
  >
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
    nodes: Array,
    apiUrl: String,
    apiValidity: Boolean,
    canvasSize: Object
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
    }
  },
  methods: {
    startDrag(event, ID) {
      //console.log("drag started at canvas");
      if (this.nodeDragging.nodeID === undefined) {
        this.nodeDragging.nodeID = ID;
        this.nodeDragging.state = true;

        // todo: canvasMousePos currently is relative to window top-left. It should be relative to canvas container bounding box top-left
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
