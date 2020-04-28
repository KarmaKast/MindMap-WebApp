<template>
  <div class="container" :style="this.containerStyle">
    <div class="background" :style="this.backgroundStyle"></div>
    <p :style="this.buttonTextStyle">
      {{ this.buttonText }}
    </p>
    <button
      :style="this.buttonStyle"
      @mousedown="clickStarted = true"
      @mouseup="clickStarted = false"
      @click.left="emitTakeAction"
      @mouseover="setButtonHovered('main')"
      @mouseout="
        clickStarted = false;
        unsetButtonHovered('main');
      "
    ></button>
  </div>
</template>

<script>
export default {
  name: "buttonTwo",
  props: {
    colors: Object,
    colorsProcessed: Object,
    buttonText: String,
  },
  data: function () {
    return {
      active: false,
      mainButtonIsHovered: false,
      size: [32, 174],
      isHovered: false,
      clickStarted: false,
    };
  },
  computed: {
    containerStyle: function () {
      var templateC = `auto ${this.size[0]}px`;
      return {
        position: "relative",
        height: `${this.size[0]}px`,
        width: `${this.size[1]}px`,
        display: "grid",
        gridDirection: "row",
        gridTemplateColumns: this.active ? templateC : "none",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "inherit",
        padding: "0px",
      };
    },
    backgroundStyle: function () {
      return {
        background: this.mainButtonIsHovered
          ? `hsla(${this.colors["theme"].h},${this.colors["theme"].s}%,${
              this.colors["theme"].l + 20
            }%,0.3)`
          : `hsla(${this.colors["background"].h},${
              this.colors["background"].s
            }%,${this.colors["background"].l + 30}%,0.5)`,
        position: "absolute",
        top: "0px",
        height: `100%`,
        width: `100%`,
        border: this.mainButtonIsHovered
          ? `0.5px dashed ${this.colorsProcessed["theme"]}`
          : "none",
        boxSizing: "border-box",
        boxShadow: this.mainButtonIsHovered
          ? this.clickStarted
            ? "rgba(0, 0, 0, 0.24) 0px 0px 3px 0px"
            : "rgba(0, 0, 0, 0.24) 0px 0px 6px 0px"
          : "rgba(0, 0, 0, 0.24) 0px 0px 3px 0px",
        backdropFilter: "blur(4px)",
        borderRadius: "8px",
        textAlign: "center",
      };
    },
    buttonTextStyle: function () {
      return {
        display: this.active ? "none" : "block",
        position: "relative",
        margin: "0px",

        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "15px",
        lineHeight: "7px",
        color: `${this.colorsProcessed["theme"]}`,
      };
    },
    buttonStyle: function () {
      return {
        display: this.active ? "none" : "block",
        position: "absolute",
        left: "0px",
        top: "0px",
        margin: "auto",
        padding: "0px",
        height: `${this.size[0]}px`,
        width: `${this.size[1]}px`,
        pointerEvents: "initial",
        cursor: "pointer",

        background: "none",
        border: "none",
        borderRadius: "inherit",
        outline: "none",
      };
    },
  },
  methods: {
    setActive() {
      this.active = true;
      setTimeout(() => {
        this.$refs.inputField.focus();
      });
    },
    setNotActive() {
      this.active = false;
    },
    setButtonHovered(bttn) {
      if (bttn === "main") {
        this.mainButtonIsHovered = true;
      }
    },
    unsetButtonHovered(bttn) {
      if (bttn === "main") {
        this.mainButtonIsHovered = false;
      }
    },
    emitTakeAction() {
      this.$emit("takeAction");
    },
  },
};
</script>

<style lang="sass" scoped></style>
