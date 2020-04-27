<template>
  <div id="statusBar" :style="statusBarStyle">
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
          boxShadow: `0px 0px 0 1px red`,
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
  },
  data: function () {
    return {
      height: 20,
      padding: 2,
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
        placeItems: "center",
        gridTemplateColumns: `auto min-content`,
        columnGap: "5px",

        backgroundColor: `${this.colorsProcessed["background"]}`,
        backdropFilter: "blur(3px)",
        backgroundImage: `repeating-linear-gradient(45deg,rgba(255, 255, 255, 0), ${this.colorsProcessed["theme_light"]} 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), ${this.colorsProcessed["theme_light"]} 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px)`,
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
          ? "hsla(130, 100%, 40%, 0.95)"
          : "hsla(0, 100%, 60%, 0.95)",
        borderRadius: `${this.height}px`,
        border: "1.2px dotted white",
        boxShadow: "0px 0px 3px 1px hsla(0, 0%, 0%, 0.32)",
        boxSizing: "border-box",
      };
    },
  },
};
</script>
<style lang="sass" scoped></style>
