<template>
  <footer id="mind-map-status-bar">
    <layout-manager :gridElements="gridElements" axis="x">
      <template v-slot:[gridElements[0].name]>
        <div id="themeToggle"></div
      ></template>
      <template v-slot:[gridElements[1].name]>
        <div id="apiState"></div
      ></template>
      <template v-slot:[gridElements[2].name]>
        <div id="moduleLogs"></div
      ></template>
    </layout-manager>
  </footer>
</template>

<script>
export default {
  name: "StatusBar",
  components: {},
  data() {
    return {
      gridElements: [
        { name: "themeToggle", position: 1 },
        { name: "apiState", position: -1 },
        { name: "moduleLogs", position: -2 },
      ],
    };
  },
};
</script>

<style scoped>
footer#mind-map-status-bar {
  height: 25px;
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
