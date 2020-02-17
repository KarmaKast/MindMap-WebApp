<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    :style="canvasContainerStyle"
    @mousemove="getMousePos"
    v-touch:moving="getMousePos"
    @mouseup.left="deactivateAllNodes"
    v-touch:end="deactivateAllNodes"
    @mousedown.middle="setCanvasDragging"
    @mouseup.middle="setCanvasDragging"
  >
    <div
      v-if="grid.show && grid.opacity > 0 && grid.size > 1 && grid.width > 0"
      id="grid"
      :style="gridStyle"
    ></div>
    <div
      v-if="grid.show && grid.opacity > 0 && grid.size > 1 && grid.width > 0"
      id="grid"
      :style="gridCenterStyle"
    ></div>
    <div id="nodes">
      <nodeComponent
        v-for="(value, key_) in processedNodes"
        :key="key_"
        :ID="key_"
        :apiUrl="apiUrl"
        :canvasSize="{ height: height, width: width }"
        :canvasLocation="canvasLocation"
        :canvasMousePos="value.canvasMousePos"
        @setStartingCanvasMousePos="setStartingCanvasMousePos"
        :defaultColors="colors"
        :dragging="value.dragging"
        :newNodeDef="value.newNode"
        :grid="grid"
        @nodeActivated="nodeActivated"
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
    nodeLimit: {
      // context: setting this to 10. With some optimizations should be increased to 100
      // or extra nodes could be loaded with minimum memory usage.
      default: 10,
      type: Number
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
          snap: true
        };
      },
      type: Object
    },
    popupLock: {
      // context: if true disables this canvas from using popup feature * WIP *
      default: true,
      type: Boolean
    }
  },
  data: function() {
    return {
      mindmapCanvas: null,
      dragItemId: null,
      canvasLocation: { x: 0, y: 0 },
      canvasMousePos: { x: 0, y: 0 },
      canvasContainerBoxLoc: { x: 0, y: 0 },
      activeNode: {
        nodeID: undefined,
        dragging: { state: false },
        pressed: { state: false }
      },

      canvasDragging: {
        state: false,
        event: undefined,
        deltas: { x: 0, y: 0 }
      },
      height: 0,
      width: 0
    };
  },
  computed: {
    processedNodes: function() {
      var nodes_ = {};
      this.nodes.forEach((key, index) => {
        if (index < this.nodeLimit) {
          nodes_[this.nodes[index].ID] = {
            dragging: {
              state:
                this.nodes[index].ID === this.activeNode.nodeID
                  ? this.activeNode.dragging.state
                  : false
            },
            canvasMousePos: this.canvasMousePos,
            newNode: this.nodes[index].newNode
          };
        }
      });
      return nodes_;
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
        position: "absolute",
        top: "0px",
        left: "0px",
        overflow: "hidden",
        backgroundColor: "inherit"
      };
    },
    gridStyle: function() {
      // todo: move color processing functionality to vuex store
      var processedColor = `hsla(${this.colors["theme_light"][0]}, ${this.colors["theme_light"][1]}%, ${this.colors["theme_light"][2]}%, ${this.grid.opacity})`;
      var size_ = this.grid.size * 2;
      return {
        height: "200%",
        width: "200%",
        position: "absolute",
        top: `${((this.height / 2 + this.canvasLocation["y"]) % size_) -
          size_}px`,
        left: `${((this.width / 2 + this.canvasLocation["x"]) % size_) -
          size_}px`,
        backgroundImage: `repeating-linear-gradient(rgba(255, 255, 255, 0), ${processedColor} ${this.grid.width}px, rgba(255, 255, 255, 0) ${this.grid.width}px, rgba(255, 255, 255, 0) ${size_}px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0), ${processedColor} ${this.grid.width}px, rgba(255, 255, 255, 0) ${this.grid.width}px, rgba(255, 255, 255, 0) ${size_}px)`
      };
    },
    gridCenterStyle: function() {
      var size_x = this.width * 1.5;
      var size_y = this.height * 1.5;
      //var size_ = this.grid.size * 2;
      return {
        height: "400%",
        width: "400%",
        position: "absolute",
        top: `${((this.height / 2 + this.canvasLocation["y"]) % size_y) -
          size_y}px`,
        left: `${((this.width / 2 + this.canvasLocation["x"]) % size_x) -
          size_x}px`,
        backgroundImage: `repeating-linear-gradient(rgba(255, 255, 255, 0), hsla(222, 100%, 50%, ${this
          .grid.opacity * 2}) ${this.grid.width}px, rgba(255, 255, 255, 0) ${
          this.grid.width
        }px, rgba(255, 255, 255, 0) ${size_y}px), repeating-linear-gradient(90deg, rgba(255, 255, 255, 0), hsla(177, 73%, 47%, ${this
          .grid.opacity * 2}) ${this.grid.width}px, rgba(255, 255, 255, 0) ${
          this.grid.width
        }px, rgba(255, 255, 255, 0) ${size_x}px)`
        /*backgroundImage: `linear-gradient(90deg, #FFFFFF 49.9%, rgba(0, 0, 0, 0.520833) 50%, rgba(255, 255, 255, 0) 51.1%)`*/
      };
    }
  },
  methods: {
    updateCanvasContainerBoxLoc() {
      // context: since canvas bounding box x,y is taken once at the start of the drag, if for some reason canvas container position changes relative to the window top-left it will make the drag to malfunction
      this.canvasContainerBoxLoc.x = this.$refs.canvasContainer.getBoundingClientRect().x;
      this.canvasContainerBoxLoc.y = this.$refs.canvasContainer.getBoundingClientRect().y;
    },
    nodeActivated(event, ID) {
      /**
       * context: wait for 100ms to see if canvas has no mouseup Event.
       * If it does within 100ms consider it as a mouse press else drag.
       */
      //console.log("drag started at canvas");
      if (this.activeNode.nodeID === undefined) {
        this.activeNode.nodeID = ID;
        console.log("node pressed");
        this.activeNode.pressed.state = true;
        //var dragging=false;
        setTimeout(() => {
          if (this.activeNode.pressed.state) {
            console.log("started dragging");
            /**
             * also check for mouse position change to detect drag. eg: if delta is more than 5px
             */
            this.activeNode.dragging.state = true;

            this.updateCanvasContainerBoxLoc();
          }
        }, 100);
        //console.log(event);
      }
    },
    deactivateAllNodes() {
      //console.log("drag stopped at canvas");
      console.log("node unpressed");
      this.activeNode.pressed.state = false;
      this.activeNode.nodeID = undefined;
      if (this.activeNode.dragging.state) {
        //console.log(event);
        this.activeNode.dragging.state = false;
      }
    },
    getMousePos(event) {
      if (this.activeNode.dragging.state === true) {
        // todo: if dragging pass canvasMousePos to nodes else pass undefined
      }
      if (this.activeNode.dragging.state || this.canvasDragging.state) {
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

        if (this.canvasDragging.state) {
          this.canvasLocation.x =
            this.canvasMousePos.x -
            this.width / 2 -
            this.canvasDragging.deltas.x;
          this.canvasLocation.y =
            this.canvasMousePos.y -
            this.height / 2 -
            this.canvasDragging.deltas.y;
        }
      }
    },
    setCanvasDragging(event) {
      console.log("from event func");
      console.log(event);
      // todo: this toggling mechanism causes problems if mouse moves out of canvas container
      if (this.canvasDragging.state) {
        // doing: stop drag
        this.canvasDragging.state = false;
        this.canvasDragging.event = undefined;
        // todo: reset dragging deltas (not necessary)
        this.canvasDragging.deltas = { x: 0, y: 0 };
      } else {
        // doing: start drag
        this.canvasDragging.state = true;
        this.canvasDragging.event = event;
        this.updateCanvasContainerBoxLoc();
        // todo: set dragging deltas
        this.canvasDragging.deltas.x =
          event.clientX -
          this.width / 2 -
          this.canvasLocation.x -
          this.canvasContainerBoxLoc.x;
        this.canvasDragging.deltas.y =
          event.clientY -
          this.height / 2 -
          this.canvasLocation.y -
          this.canvasContainerBoxLoc.y;
      }
    },
    setStartingCanvasMousePos(event) {
      this.updateCanvasContainerBoxLoc();
      console.log(event);
      if (event.type === "touchstart") {
        //console.log(event.clientX - this.canvasContainerBoxLoc.x);
        this.canvasMousePos.x =
          event.touches[0].clientX - this.canvasContainerBoxLoc.x;
        this.canvasMousePos.y =
          event.touches[0].clientY - this.canvasContainerBoxLoc.y;
      } else {
        this.canvasMousePos.x = event.clientX - this.canvasContainerBoxLoc.x;
        this.canvasMousePos.y = event.clientY - this.canvasContainerBoxLoc.y;
      }
      console.log([this.canvasMousePos.x, this.canvasMousePos.y]);
    }
  },
  watch: {},
  created: function() {
    this.$store.subscribeAction({
      after: action => {
        if ("update_window_size" === action.type) {
          var box = this.$refs.canvasContainer.getBoundingClientRect();
          this.height = box.height;
          this.width = box.width;
        }
      }
    });
  },
  mounted: function() {
    var box = this.$refs.canvasContainer.getBoundingClientRect();
    //console.log(box);
    this.height = box.height;
    this.width = box.width;
  },
  beforeUpdate: function() {
    //console.log("before update called");
    var box = this.$refs.canvasContainer.getBoundingClientRect();
    this.height = box.height;
    this.width = box.width;
  },
  updated: function() {
    /*var box = this.$refs.canvasContainer.getBoundingClientRect();
    this.height = box.height;
    this.width = box.width;*/
  }
};
</script>
<style lang="sass" scoped></style>
