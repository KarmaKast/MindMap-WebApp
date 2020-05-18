<template>
  <header id="mind-map-header-bar">
    <layout-handler></layout-handler>
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
};
</script>

<style scoped>
header#mind-map-header-bar {
  height: 25px;
}
</style>
