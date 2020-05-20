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
      <!--<template v-slot:[gridElements[2].name]>
        <div id="searchBar"></div
      ></template>-->
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
        //{ name: "searchBar", x: 2 },
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
  --endPadding: 10px;
  height: 30px;
  background-color: var(--color-primary-lighter5);
}
#mainMenu,
#versionState {
  width: max-content;
  height: 100%;
  color: var(--color-primary);
  border-right: 1px solid rgba(255, 255, 255, 0.315);
  border-left: 1px solid rgba(255, 255, 255, 0.315);
  box-sizing: border-box;
  padding: 0px 6px;
  display: table;
  align-items: center;
}
#mainMenu {
  padding-left: var(--endPadding);
}
#versionState {
  padding-right: var(--endPadding);
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

  margin: 0px auto;
  cursor: pointer;
  text-align: center;
}
button#mainMenu:hover {
  background-color: var(--color-primary-darker2);
}
button > p {
  cursor: inherit;
  display: inline-block;
  font-size: 1.1em;
}
</style>
