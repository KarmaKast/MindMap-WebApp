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
        { name: "mainMenu", x: 1 },
        { name: "versionState", x: -1 },
      ],
      appVersion: "v" + process.env.VUE_APP_VERSION,
    };
  },
};
</script>

<style scoped>
header#mind-map-header-bar {
  --endPadding: 10px;
  height: 25px;
  background-color: rgb(240, 64, 99);
}
#mainMenu,
#versionState {
  width: max-content;
  height: 100%;
  background-color: rgba(255, 53, 93, 0.904);
  border-right: 1px solid rgba(255, 255, 255, 0.315);
  border-left: 1px solid rgba(255, 255, 255, 0.315);
  box-sizing: border-box;
  padding: 0px 6px;
  color: white;
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
  border: none;
  padding: 0px;

  margin: 0px auto;
  cursor: pointer;
  text-align: center;
}
button#mainMenu:hover {
  background-color: rgb(240, 22, 65);
}
button > p {
  cursor: inherit;
  display: inline-block;
  font-size: 1.1em;
}
</style>
