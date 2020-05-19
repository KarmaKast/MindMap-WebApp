<template>
  <footer id="mind-map-status-bar">
    <layout-handler :gridElements="gridElements" axis="x">
      <template v-slot:[gridElements[0].name]>
        <div id="themeToggle"></div
      ></template>
      <template v-slot:[gridElements[1].name]>
        <div id="themeToggle2"></div
      ></template>
    </layout-handler>
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
        { name: "themeToggle", x: 1 },
        { name: "themeToggle2", x: 3 },
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
#themeToggle2,
#apiState {
  width: 20px;
  height: 100%;
}
</style>
