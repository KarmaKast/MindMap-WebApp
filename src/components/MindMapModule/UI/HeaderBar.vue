<template>
  <header id="mind-map-header-bar">
    <layout-handler axis="x" :gridElements="gridElements">
      <template v-slot:[gridElements[0].name]>
        <div id="apiState"></div
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
      gridElements: [{ name: "apiState", x: -1 }],
    };
  },
};
</script>

<style scoped>
header#mind-map-header-bar {
  height: 25px;
}
#apiState {
  width: 20px;
  height: 100%;
}
</style>
