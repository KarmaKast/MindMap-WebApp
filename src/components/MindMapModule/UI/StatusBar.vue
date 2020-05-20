<template>
  <footer id="mind-map-status-bar">
    <layout-handler :gridElements="gridElements" axis="x">
      <template v-slot:[gridElements[0].name]>
        <div id="themeToggle"></div
      ></template>
      <template v-slot:[gridElements[1].name]>
        <div id="apiState"></div
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
      ],
    };
  },
};
</script>

<style scoped>
footer#mind-map-status-bar {
  height: 25px;
  background-color: crimson;
  background-color: rgb(240, 64, 99);
}
#themeToggle,
#apiState {
  width: 25px;
  height: 100%;
  background-color: rgba(253, 52, 92, 0.781);
  border-right: 1px solid rgba(255, 255, 255, 0.315);
  border-left: 1px solid rgba(255, 255, 255, 0.315);
}
</style>
