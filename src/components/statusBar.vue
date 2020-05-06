<template>
  <div id="statusBar" :style="statusBarStyle">
    <div
      id="light-dark-toggle"
      :style="lightDarkToggleContainerStyle"
      @mouseenter="toggleShowNext"
      @mouseleave="toggleShowNext"
      v-touch:tap="toggleShowNext"
    >
      <div id="current" :style="lightDarkToggleCurrentStyle"></div>
      <div
        v-show="showNextToggle"
        id="next"
        ref="next"
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
          position: 'relative',
          height: '100%',
          //maxWidth: `${height * 6}px`,
          minWidth: `${height * 6}px`,
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
        <p
          :style="{
            margin: '0px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'monospace',
          }"
        >
          {{ apiUrl }}
        </p>
      </div>
      <div
        id="api-status-indicator"
        :style="apiStatusStyle"
        :aria-label="statusIndicatorToolTipText"
      ></div>
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
      height: 25,
      padding: 2,
      showNextToggle: false,
    };
  },
  computed: {
    statusIndicatorToolTipText: function () {
      return this.apiValidity
        ? "api valid. Connection State Unknown/ not implemented."
        : this.apiUrl === ""
        ? "no api url provided yet"
        : "api url provided not valid";
    },
    statusBarStyle: function () {
      return {
        position: "absolute",
        bottom: "0px",
        left: "0px",
        width: `100%`,
        height: `${this.height}px`,
        boxSizing: "border-box",
        boxShadow: `hsla(0, 0%, ${
          this.colors["background"].l - 15
        }%, 0.5) 0px -2px 2px 1px`,
        padding: `${this.padding}px`,
        borderBottomLeftRadius: "inherit",
        borderBottomRightRadius: "inherit",

        display: "grid",
        pointerEvents: "all",
        placeItems: "center",
        gridTemplateColumns: `min-content auto min-content`,
        columnGap: "5px",

        //backgroundColor: this.colorsProcessed["background"],
        backgroundColor: `hsla(${this.colors["background"].h},${
          this.colors["background"].s
        }%,${this.colors["background"].l + 10}%,${
          CSS.supports("backdrop-filter: blur(3px)") ? 0.5 : 0.8
        })`,
        backdropFilter: "blur(3px)",
        backgroundImage: `repeating-linear-gradient(45deg,rgba(255, 255, 255, 0), hsla(${this.colors["theme_light"].h},${this.colors["theme_light"].s}%,${this.colors["theme_light"].l}%,0.4) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), hsla(${this.colors["theme_light"].h},${this.colors["theme_light"].s}%,${this.colors["theme_light"].l}%,0.4) 1px, rgba(255, 255, 255, 0) 1px, rgba(255, 255, 255, 0) 6px)`,
      };
    },
    lightDarkToggleContainerStyle: function () {
      return {
        height: "90%",
        minWidth: `${this.height}px`,
        boxSizing: "border-box",
        padding: "1px",
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridColumnGap: "3px",
        pointerEvents: "all",
        //backgroundColor: `${this.colorsProcessed["theme_light"]}`,
        borderRadius: `${this.height}px`,
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
            ? "hsla(0,0%,98%,1)" // white
            : "hsla(0,0%,10%,1)", // black
        boxShadow: `0px 0px 1px 1px ${
          this.toggleCurrent === "light"
            ? "hsla(0,0%,10%,0.4)"
            : "hsla(0,0%,85%,0.4)"
        } `,
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
        boxShadow: `0px 0px 1px 1px ${
          this.toggleCurrent === "light"
            ? "hsla(0,0%,85%,0.4)"
            : "hsla(0,0%,10%,0.4)"
        }`,
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
        border: `1.2px dotted hsla(${this.colors["background"].h},${
          this.colors["background"].s
        }%,${this.colors["background"].l - 20}%,1)`,
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
    toggleShowNext: function (event) {
      event.preventDefault();
      //console.log(event);
      if (event.target !== this.$refs.next)
        if (["mouseenter", "mouseleave"].includes(event.type)) {
          //console.log(event);
          this.showNextToggle
            ? (this.showNextToggle = false)
            : (this.showNextToggle = true);
        } else if (event.type.startsWith("touch")) {
          // todo: for touch event toggle off showNext after a few seconds
          //console.log(event);
          this.showNextToggle
            ? (this.showNextToggle = false)
            : (this.showNextToggle = true);
        }
    },
  },
};
</script>
<style lang="sass" scoped></style>
