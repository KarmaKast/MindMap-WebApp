<template>
  <div id="statusBar" :style="statusBarStyle">
    <div></div>
    <div id="apiStatusContainer" :style="apiStatusContainerStyle">
      <div id="api-status-indicator" :style="apiStatusStyle"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "statusBar",
  props: {
    colors: Object,
    apiValidity: Boolean
  },
  data: function() {
    return {
      height: 20,
      padding: 2
    };
  },
  computed: {
    statusBarStyle: function() {
      return {
        position: "absolute",
        bottom: "0px",
        left: "0px",
        width: `100%`,
        height: `${this.height}px`,
        boxSizing: "border-box",
        padding: `${this.padding}px`,

        display: "grid",
        placeItems: "center",
        gridTemplateColumns: `auto ${this.height}px`,
        columnGap: "5px",

        backgroundColor: `${this.colors["background"]}`,
        backdropFilter: "blur(3px)"
      };
    },
    apiStatusContainerStyle: function() {
      return {
        height: "90%",
        width: "100%",
        boxSizing: "border-box",
        padding: "2px"
      };
    },
    apiStatusStyle: function() {
      return {
        height: "100%",
        width: "100%",
        backgroundColor: this.apiValidity
          ? "hsla(130, 100%, 40%, 0.95)"
          : "hsla(0, 100%, 60%, 0.95)",
        borderRadius: `${this.height}px`,
        boxShadow: "0px 0px 3px 1px hsla(0, 0%, 0%, 0.32)"
      };
    }
  }
};
</script>
<style lang="sass" scoped></style>
