<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    style="height:100%; width:100%; position:relative; overflow: hidden;"
  >
    <div id="nodes">
      <nodeComponent
        v-for="nodeID in nodes"
        :key="nodeID"
        :ID="nodeID"
        :apiUrl="apiUrl"
        :canvasSize="{ height: height, width: width }"
        :canvasLocation="canvasLocation"
        :defaultColors="colors"
      >
      </nodeComponent>
    </div>

    <div id="relationWires" :style="{ pointerEvents: 'none' }">
      <v-stage
        ref="stage"
        :config="canvasConfig"
        @dragstart="handleDragstart"
        @dragend="handleDragend"
      >
        <v-layer>
          <v-group
            :config="{
              draggable: true
            }"
          >
          </v-group>
        </v-layer>
      </v-stage>
    </div>
  </div>
</template>
<script>
import nodeComponent from "./general/nodeComponent";

export default {
  name: "MindMapCanvas",
  components: {
    nodeComponent
  },
  props: {
    colors: Object,
    nodes: Array,
    apiUrl: String
  },
  data: function() {
    return {
      mindmapCanvas: null,
      dragItemId: null,
      canvasLocation: { x: 0, y: 0 }
    };
  },
  computed: {
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
    handleDragstart(e) {
      // save drag element:
      this.dragItemId = e.target._id;
      //console.log(e.target);
    },
    handleDragend() {
      this.dragItemId = null;
    }
  },
  watch: {},
  created: function() {},
  mounted: function() {
    var box = this.$refs.canvasContainer.getBoundingClientRect();
    this.$store.commit("update_canvas_height", box.height);
    this.$store.commit("update_canvas_width", box.width);

    this.$store.subscribe((mutation) => {
      if (
        ["update_window_height", "update_window_width"].includes(mutation.type)
      ) {
        box = this.$refs.canvasContainer.getBoundingClientRect();
        this.$store.commit("update_canvas_height", box.height);
        this.$store.commit("update_canvas_width", box.width);
        // todo: WIP
      }
    });
    //console.log(box);
  },
  updated: function() {}
};
</script>
<style lang="sass" scoped></style>
