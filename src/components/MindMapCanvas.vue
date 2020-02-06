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
        :canvasLocation="{ x: 0, y: 0 }"
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
    height: Number,
    width: Number,
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
  mounted: function() {}
};
</script>
<style lang="sass" scoped></style>
