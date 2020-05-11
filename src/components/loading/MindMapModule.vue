<template>
  <div class="mind-map-module-loading"><p>mind map module is loading</p></div>
</template>

<script>
export default {
  name: "MindMapModuleLoading",
};
</script>

<style scoped>
.mind-map-module-loading {
  height: 100%;
  width: 100%;
  cursor: wait;
  border: 2px solid grey;
  border-radius: inherit;
}
.mind-map-module-loading p {
  font-size: large;
}
</style>
