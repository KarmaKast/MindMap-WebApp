<template>
  <div class="container" :style="this.container_style"></div>
</template>

<script>
export default {
  name: "MindMap",
  props: {
    height: Number,
    width: Number,
    locationVert: Object,
    // locationVert: {'top':value} or {'bottom':value}
    locationHor: Object,
    // locationHor: {'left':value} or {'right':value}
    colors: Object
  },
  computed: {
    container_style: function() {
      var style = {};
      if (this.height !== undefined) {
        style["height"] = this.height + "px";
      }
      if (this.width !== undefined) {
        style["width"] = this.width + "px";
      }
      if (this.locationVert !== undefined) {
        if ("marginTop" in this.locationVert) {
          style["marginTop"] = this.locationVert["marginTop"] + "px";
        }
        if ("bottom" in this.locationVert) {
          style["bottom"] = this.locationVert + "px";
        }
      }
      if (this.colors !== undefined) {
        if ("background" in this.colors) {
          style["backgroundColor"] = this.colors["background"];
        }
      }
      return style;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(49, 49, 49);
}
</style>
