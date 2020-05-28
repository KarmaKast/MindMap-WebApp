<template>
  <section id="mind-map-status-bar">
    <layout-manager :gridElements="gridElements" axis="y">
      <template v-slot:[gridElements[0].name]>
        <div id="themeToggle"></div
      ></template>
      <template v-slot:[gridElements[1].name]>
        <div id="apiState"></div
      ></template>
    </layout-manager>
  </section>
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
      ],
    };
  },
};
</script>

<style scoped>
section#mind-map-status-bar {
  width: 35px;
  background-color: crimson;
  background-color: var(--color-primary-lighter5);
  border-radius: 25px;
}
#themeToggle,
#apiState,
#moduleLogs {
  width: 100%;
  color: var(--color-primary);
  border-right: 1px solid rgba(255, 255, 255, 0.315);
  border-left: 1px solid rgba(255, 255, 255, 0.315);
}
#themeToggle,
#apiState {
  height: 35px;
}
</style>
