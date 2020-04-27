<template>
  <div id="statusBar" :style="statusBarStyle">
    <div
      id="light-dark-toggle"
      :style="lightDarkToggleContainerStyle"
      @mouseenter="showNextToggle = true"
      @mouseleave="showNextToggle = false"
    >
      <div id="current" :style="lightDarkToggleCurrentStyle"></div>
      <div
        v-if="showNextToggle"
        id="next"
        :style="lightDarkToggleNextStyle"
        v-touch:tap="toggleTheme"
      ></div>
    </div>
    <div></div>
    <div id="apiStatusContainer" :style="apiStatusContainerStyle">
      <div
        v-if="apiValidity"
        id="api-url"
        :style="{
          height: '100%',
          maxWidth: `${height * 5}px`,
          width: `${height * 5}px`,
          boxSizing: 'border-box',
          fontSize: '10px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          order: '1',
          backgroundColor: 'rgba(255,255,255,0.5)',
          color: 'black',
          borderRadius: '5px',
          boxShadow: `0px 0px 0 1px ${colorsProcessed['theme_light']}`,
        }"
      >
        {{ apiUrl }}
      </div>
      <div id="api-status-indicator" :style="apiStatusStyle"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "statusBar",
  props: {
    colors: Object,
    colorsProcessed: Object,
    apiUrl: String,
    apiValidity: Boolean,
    toggleCurrent: String,
  },
  data: function () {
    return {
      height: 20,
      padding: 2,
      showNextToggle: false,
    };
  },
  computed: {
    statusBarStyle: function () {
      return {
        position: "absolute",
        bottom: "0px",
        left: "0px",
        width: `100%`,
        height: `${this.height}px`,
        boxSizing: "border-box",
        boxShadow: "0px -2px 4px 0px hsla(0, 0%, 0%, 0.18)",
        padding: `${this.padding}px`,
        borderBottomLeftRadius: "inherit",
        borderBottomRightRadius: "inherit",

        display: "grid",
        pointerEvents: "all",
        placeItems: "center",
        gridTemplateColumns: `min-content auto min-content`,
        columnGap: "5px",

        backgroundColor: `${this.colorsProcessed["background"]}`,
        backdropFilter: "blur(3px)",
        backgroundImage: `repeating-linear-gradient(45deg,rgba(255, 255, 255, 0), ${this.colorsProcessed["theme_light"]} 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), ${this.colorsProcessed["theme_light"]} 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px)`,
      };
    },
    lightDarkToggleContainerStyle: function () {
      return {
        height: "95%",
        minWidth: `${this.height}px`,
        boxSizing: "border-box",
        padding: "1px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridColumnGap: "3px",
        pointerEvents: "all",
      };
    },
    lightDarkToggleCurrentStyle: function () {
      return {
        height: "100%",
        width: `${this.height}px`,
        boxSizing: "border-box",
        borderRadius: `${this.height}px`,
        padding: "1px",
        display: "grid",
        backgroundColor:
          this.toggleCurrent === "light"
            ? "hsla(0,0%,100%,1)" // white
            : "hsla(0,0%,10%,1)", // black
        boxShadow: "0px 0px 3px 1px grey",
      };
    },
    lightDarkToggleNextStyle: function () {
      return {
        height: "100%",
        width: `${this.height}px`,
        boxSizing: "border-box",
        borderRadius: `${this.height}px`,
        padding: "1px",
        display: "grid",
        backgroundColor:
          this.toggleCurrent === "light"
            ? "hsla(0,0%,10%,1)" // black
            : "hsla(0,0%,85%,1)", // white
        boxShadow: "0px 0px 3px 1px grey",
        cursor: "pointer",
      };
    },
    apiStatusContainerStyle: function () {
      return {
        height: "90%",
        minWidth: `${this.height}px`,
        boxSizing: "border-box",
        padding: "1px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridColumnGap: this.apiValidity ? "5px" : "0px",
      };
    },
    apiStatusStyle: function () {
      return {
        order: "2",
        height: "100%",
        width: `${this.height * 1}px`,
        backgroundColor: this.apiValidity
          ? "hsla(130, 100%, 40%, 0.95)" // green
          : "hsla(0, 100%, 60%, 0.95)", // red
        borderRadius: `${this.height}px`,
        border: "1.2px dotted white",
        boxShadow: "0px 0px 3px 1px hsla(0, 0%, 0%, 0.32)",
        boxSizing: "border-box",
      };
    },
  },
  methods: {
    toggleTheme: function () {
      //this.showNextToggle = true;
      //this.toggleCurrent = this.toggleCurrent === "light" ? "dark" : "light";
      this.$emit("themeToggle");
    },
  },
};
</script>
<style lang="sass" scoped></style>
