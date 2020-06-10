<template>
  <header id="mind-map-header-bar">
    <layout-manager axis="x" :gridElements="gridElements">
      <template v-slot:[gridElements[0].name]>
        <button
          id="mainMenuBttn"
          :class="mainMenuBttnClasses"
          v-touch-compatible-hover
          v-touch:tap="toggleMenu"
        >
          <p>Menu</p>
        </button>
        <div :class="mainMenuItemsClasses">
          <layout-manager axis="y" :gridElements="menuGridElements" gap="4px">
            <template v-slot:[menuGridElements[0].name]
              ><button
                key="1"
                :class="['menu-item-container']"
                v-touch-compatible-hover
              >
                {{ menuGridElements[0].name }}
              </button></template
            >
            <template v-slot:[menuGridElements[1].name]
              ><button
                key="2"
                :class="['menu-item-container']"
                v-touch-compatible-hover
              >
                {{ menuGridElements[1].name }}
              </button></template
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
      mainMenuItemsClasses: ["menu-items-container"],
      appVersion:
        "v" +
        process.env.VUE_APP_VERSION +
        (process.env.VUE_APP_MODE === "development" ? "-dev" : ""),
    };
  },
  methods: {
    /**
     * @param {Event} event
     */
    toggleMenu(event) {
      //event.preventDefault();
      console.info("menu toggle called", event);
      this.mainMenuItemsClasses = classListHandler.toggleClass(
        this.mainMenuItemsClasses,
        "show"
      );
    },
  },
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

  border-radius: 999px;
  box-sizing: border-box;
  padding: 0px 6px;
  display: table;
  align-items: center;
}
.menu-items-container {
  position: absolute;
  height: max-content;
  width: max-content;
  top: 100%;
  background: var(--color-primary);
  border-radius: 14px;
  margin-top: 6px;
  padding: 4px;
  display: none;
}
.menu-items-container.show {
  display: block;
}
.menu-item-container {
  color: var(--color-bg-primary);
  padding: 2px 8px 2px 8px;
  box-sizing: border-box;
  font-size: 0.95rem;
  width: 100%;
  border-radius: 999px;
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
  font-size: 0.8rem;
}
button {
  background-color: unset;
  border: none;
  padding: 0px;

  border: 1px solid var(--color-bg-primary);
  box-shadow: 0px 0px 2px 2px hsla(0, 0%, 0%, 0.15);
  outline: none;
  background-color: var(--color-primary);
  color: var(--color-bg-primary);

  margin: 0px auto;
  cursor: pointer;
  text-align: center;
}
button.hover {
  border: 1px solid var(--color-primary);
  background-color: var(--color-bg-primary);
  color: var(--color-primary);
}
button > p {
  cursor: inherit;
  display: inline-block;
  font-size: 1rem;
}
</style>
