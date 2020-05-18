<template>
  <div class="module-loading-component"><p>mind map module is loading</p></div>
</template>

<script>
export default {
  name: "ModuleLoadingComponent",
};
</script>

<style scoped>
.module-loading-component {
  height: 100%;
  width: 100%;
  cursor: wait;
  border: 2px solid grey;
  border-radius: inherit;
  box-sizing: border-box;
}
.module-loading-component p {
  font-size: large;
}
</style>
