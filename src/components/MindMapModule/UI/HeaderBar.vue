<template>
  <header id="mind-map-header-bar">
    <layout-handler axis="x" :gridElements="gridElements">
      <template v-slot:[gridElements[0].name]>
        <button id="mainMenu">
          <p>Menu</p>
        </button></template
      >
      <template v-slot:[gridElements[1].name]>
        <div id="versionState">
          <p>{{ appVersion }}</p>
        </div></template
      >
      <template v-slot:[gridElements[2].name]>
        <div id="searchBar"></div
      ></template>
    </layout-handler>
  </header>
</template>

<script>
// todo: mainmenu and versionstate should have been in opposite places
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
        { name: "mainMenu", x: 1 },
        { name: "versionState", x: -1 },
        { name: "searchBar", x: 2 },
      ],
      appVersion:
        "v" +
        process.env.VUE_APP_VERSION +
        (process.env.VUE_APP_MODE === "development" ? "-dev" : ""),
    };
  },
};
</script>

<style scoped>
header#mind-map-header-bar {
  height: 25px;
  background-color: var(--color-primary-lighter5);
  padding: 4px;
}
#mainMenu,
#versionState {
  width: max-content;
  height: 100%;
  color: var(--color-primary);
  border-radius: 15px;
  box-sizing: border-box;
  padding: 0px 6px;
  display: table;
  align-items: center;
}
p {
  margin: 0px;
}
div > p {
  display: table-cell;
  vertical-align: middle;
  font-size: 0.8em;
}
button {
  background-color: unset;
  border: none;
  padding: 0px;

  border: 1px solid var(--color-primary-lighter3);

  margin: 0px auto;
  cursor: pointer;
  text-align: center;
}
button#mainMenu:hover {
  border: 1px solid var(--color-primary);
}
button > p {
  cursor: inherit;
  display: inline-block;
  font-size: 1.1em;
}
</style>
