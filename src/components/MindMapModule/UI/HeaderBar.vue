<template>
  <header id="mind-map-header-bar">
    <layout-handler axis="x" :gridElements="gridElements">
      <template v-slot:[gridElements[0].name]>
        <div id="apiState"></div
      ></template>
      <template v-slot:[gridElements[1].name]>
        <div id="apiState2"></div
      ></template>
    </layout-handler>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  components: {
    LayoutHandler: () =>
      import(
        /* webpackChunkName: "chunk-mindmap-layout-handler" */ "./helpers/LayoutHandler"
      ),
  },
  data() {
    return {
      gridElements: [
        { name: "apiState", x: -1 },
        { name: "apiState2", x: -3 },
      ],
    };
  },
};
</script>

<style scoped>
header#mind-map-header-bar {
  height: 25px;
}
#apiState,
#apiState2 {
  width: 20px;
  height: 100%;
}
</style>
