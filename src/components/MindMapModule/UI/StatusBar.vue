<template>
  <footer id="mind-map-status-bar">
    <layout-manager
      :gridElements="gridElements"
      axis="x"
      :gap="gap + 'px'"
      :gridElementStyle="{
        //backgroundColor: 'var(--color-primary)',
      }"
      :gridSpacersStyle="{
        //backgroundColor: 'var(--color-primary-lighter3)',
      }"
    >
      <template v-slot:[gridElements[0].name]>
        <button id="themeToggle" v-touch:tap="toggleTheme">
          <icon-base
            iconName="toggle theme"
            id="mindmap-themeToggle"
            viewBox="0 0 48 48"
            ><iconThemeToggle
          /></icon-base></button
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
  components: {
    iconBase: () =>
      import(/* webpackChunkName: "chunk-icon-base" */ "./helpers/iconBase"),
    iconThemeToggle: () =>
      import(
        /* webpackChunkName: "chunk-icon-base" */ "../icons/iconThemeToggle"
      ),
  },
  props: {
    apiUrl: String,
    apiValidity: Boolean,
    toggleCurrent: String,
  },
  data() {
    return {
      gridElements: [
        { name: "themeToggle", position: 1 },
        { name: "apiState", position: -1 },
        { name: "moduleLogs", position: -2 },
      ],
      gap: 5,
    };
  },
  methods: {
    toggleTheme: function () {
      this.$emit("toggleTheme");
      console.info("theme toggled");
    },
  },
};
</script>

<style scoped>
footer#mind-map-status-bar {
  min-height: 25px;
  background-color: var(--color-primary-lighter5);
}
#themeToggle,
#apiState,
#moduleLogs {
  height: 100%;
  color: var(--color-primary);
}
#themeToggle,
#apiState {
  min-width: 25px;
  background-color: var(--color-primary);
}
#themeToggle {
  padding: 1px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 999px;
  cursor: pointer;

  border: none;
  outline: none;
}
#moduleLogs {
  width: 300px;
}
#mindmap-themeToggle {
  height: 100%;
  width: 100%;
  fill: var(--color-bg-primary);
  border-radius: 999px;
  border: 1px solid var(--color-bg-primary);
  box-sizing: border-box;
}
</style>
