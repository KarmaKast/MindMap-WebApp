<template>
  <header id="mind-map-header-bar">
    <layout-manager axis="x" :gridElements="gridElements">
      <template v-slot:[gridElements[0].name]>
        <button
          id="mainMenuBttn"
          :class="mainMenuBttnClasses"
          v-touch-compatible-hover="'hovered'"
        >
          <p>Menu</p>
        </button>
        <div
          :style="{
            position: 'absolute',
            height: 'max-content',
            width: 'max-content',
            top: '100%',
          }"
        >
          <layout-manager axis="y" :gridElements="menuGridElements">
            <template v-slot:[menuGridElements[0].name]
              ><div key="1">{{ menuGridElements[0].name }}</div></template
            >
            <template v-slot:[menuGridElements[1].name]
              ><div key="2">{{ menuGridElements[1].name }}</div></template
            >-->
          </layout-manager>
        </div>
      </template>
      <template v-slot:[gridElements[1].name]>
        <div id="versionState">
          <p>{{ appVersion }}</p>
        </div></template
      >
      <template v-slot:[gridElements[2].name]>
        <div id="searchBar"></div
      ></template>
    </layout-manager>
  </header>
</template>

<script>
// todo: mainmenu and versionstate should have been in opposite places
import { classListHandler } from "../js/helpers";
import { VNode } from "vue";
let classListHandler2 = import(
  /* webpackChunkName: "chunk-mindmap-helpers" */ "../js/helpers"
).then((val) => val.classListHandler);
export default {
  name: "HeaderBar",
  components: {},
  data() {
    return {
      gridElements: [
        { name: "mainMenuBttn", position: 1 },
        { name: "versionState", position: -1 },
        { name: "searchBar", position: 2 },
      ],
      menuGridElements: [
        { name: "Settings", position: 1 },
        { name: "About", position: 2 },
      ],
      mainMenuBttnClasses: [],
      appVersion:
        "v" +
        process.env.VUE_APP_VERSION +
        (process.env.VUE_APP_MODE === "development" ? "-dev" : ""),
    };
  },
  methods: {},
};
</script>

<style scoped>
header#mind-map-header-bar {
  min-height: 30px;
  background-color: var(--color-primary);
}
header#mind-map-header-bar > .gridContainer {
  padding: 4px;
}
#mainMenuBttn,
#versionState {
  width: max-content;
  height: 100%;

  border-radius: 15px;
  box-sizing: border-box;
  padding: 0px 6px;
  display: table;
  align-items: center;
}
#mainMenuBttn {
  box-shadow: 0px 0px 2px 2px hsla(0, 0%, 0%, 0.15);
}
#versionState {
  color: var(--color-bg-primary);
}
p {
  margin: 0px;
  user-select: none;
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

  border: 1px solid var(--color-bg-primary);
  outline: none;
  background-color: var(--color-primary);
  color: var(--color-bg-primary);

  margin: 0px auto;
  cursor: pointer;
  text-align: center;
}
button#mainMenuBttn.hovered {
  border: 1px solid var(--color-primary);
  background-color: var(--color-bg-primary);
  color: var(--color-primary);
}
button > p {
  cursor: inherit;
  display: inline-block;
  font-size: 1.1em;
}
</style>
