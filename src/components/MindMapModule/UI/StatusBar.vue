<template>
  <footer id="mind-map-status-bar">
    <layout-handler :gridElements="gridElements">
      <div id="themeToggle" :slot="gridElements[0].name"></div>
      <div id="apiState" :slot="gridElements[1].name"></div
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
#themeToggle {
  layout-column: 1 2;
}
</style>
