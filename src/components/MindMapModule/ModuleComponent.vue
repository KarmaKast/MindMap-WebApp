<template>
  <div class="mind-map-module">
    <canvas-component />
    <module-interface />
  </div>
</template>

<script>
export default {
  name: "ModuleComponent",
  data() {
    return {};
  },
  components: {
    CanvasComponent: () =>
      import(
        /* webpackChunkName: "chunk-canvas-component" */ "./canvas/CanvasComponent"
      ),
    ModuleInterface: () =>
      import(
        /* webpackChunkName: "chunk-module-interface" */ "./UI/ModuleInterface"
      ),
  },
  methods: {},
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
  box-sizing: border-box;
}
</style>
