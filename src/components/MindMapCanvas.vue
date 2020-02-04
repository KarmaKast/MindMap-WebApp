<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    style="height:100%; width:100%;"
  >
    <v-stage ref="stage" :config="canvasConfig">
      <v-layer>
      </v-layer>
    </v-stage>
  </div>
</template>
<script>
export default {
  name: "MindMapCanvas",
  props: {
    apiUrl: String,
    height: Number,
    width: Number
  },
  data: function() {
    return {
      mindmapCanvas: null
    };
  },
  computed: {
    canvasConfig: function() {
      return {
        height: this.height,
        width: this.width
      };
      //return {
      //  width: this.$refs.canvasContainer.clientWidth,
      //  height: this.$refs.canvasContainer.clientHeight
      //};
    }
  },
  methods: {},
  mounted: function() {
    //var c = this.$refs.mindmapCanvas;
    //this.mindmapCanvas = c.getContext("2d");
  }
};
</script>
<style lang="sass" scoped></style>
