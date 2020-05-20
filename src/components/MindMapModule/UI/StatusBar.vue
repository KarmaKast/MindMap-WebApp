<template>
  <footer id="mind-map-status-bar">
    <layout-handler :gridElements="gridElements" axis="x">
      <template v-slot:[gridElements[0].name]>
        <div id="themeToggle"></div
      ></template>
      <template v-slot:[gridElements[1].name]>
        <div id="apiState"></div
      ></template>
      <template v-slot:[gridElements[2].name]>
        <div id="moduleLogs"></div
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
        { name: "apiState", x: -1 },
        { name: "moduleLogs", x: -2 },
      ],
    };
  },
};
</script>

<style scoped>
footer#mind-map-status-bar {
  height: 30px;
  background-color: crimson;
  background-color: var(--color-primary-lighter5);
}
#themeToggle,
#apiState,
#moduleLogs {
  height: 100%;
  color: var(--color-primary);
  border-right: 1px solid rgba(255, 255, 255, 0.315);
  border-left: 1px solid rgba(255, 255, 255, 0.315);
}
#themeToggle,
#apiState {
  width: 25px;
}
#moduleLogs {
  width: 300px;
}
</style>
