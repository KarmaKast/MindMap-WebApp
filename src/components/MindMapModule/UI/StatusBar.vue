<template>
  <footer id="mind-map-status-bar">
    <layout-handler :gridElements="gridElements">
      <template v-slot:[gridElements[0].name]>
        <div id="themeToggle"></div
      ></template>
      <template v-slot:[gridElements[1].name]>
        <div id="apiState"></div></template
    ></layout-handler>
  </footer>
</template>

<script>
export default {
  name: "StatusBar",
  components: {
    LayoutHandler: () =>
      import(
        /* webpackChunkName: "chunk-mindmap-layout-handler" */ "./helpers/LayoutHandler"
      ),
  },
  data() {
    return {
      gridElements: [
        { name: "themeToggle", config: { x: 1 } },
        { name: "apiState", config: { x: -1 } },
      ],
    };
  },
};
</script>

<style scoped>
footer#mind-map-status-bar {
  height: 25px;
}
#themeToggle,
#apiState {
  width: 20px;
}
</style>
