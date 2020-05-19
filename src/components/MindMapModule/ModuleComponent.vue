<template>
  <div class="mind-map-module">
    <canvas-component />
    <module-interface />
    <!--<LayoutHandler id="layout-test" :gridElements="[]">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LayoutHandler>-->
  </div>
</template>

<script>
export default {
  name: "ModuleComponent",
  components: {
    CanvasComponent: () =>
      import(
        /* webpackChunkName: "chunk-canvas-component" */ "./canvas/CanvasComponent"
      ),
    ModuleInterface: () =>
      import(
        /* webpackChunkName: "chunk-module-interface" */ "./UI/ModuleInterface"
      ),
    //LayoutHandler: () =>
    //  import(
    //    /* webpackChunkName: "chunk-mindmap-layout-handler" */ "./UI/helpers/LayoutHandler"
    //  ),
  },
};
</script>

<style scoped>
.mind-map-module {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
  position: relative;
  touch-action: none;
  border: 1px solid rgb(255, 90, 90);
}
</style>
