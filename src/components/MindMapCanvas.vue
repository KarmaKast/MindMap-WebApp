<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    style="height:100%; width:100%;"
  >
    <v-stage
      ref="stage"
      :config="canvasConfig"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
    >
      <v-layer>
        <v-group>
          <nodeComponent
            v-for="nodeID in nodes"
            :key="nodeID"
            :ID="nodeID"
            :apiUrl="apiUrl"
            :canvasSize="{ height: height, width: width }"
            :defaultColors="colors"
          >
          </nodeComponent>
        </v-group>
      </v-layer>
    </v-stage>
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
