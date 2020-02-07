<template>
  <div id="container" :style="this.containerStyle">
    <div id="background" :style="this.backgroundStyle"></div>
    <p :style="this.buttonTextStyle">
      {{ this.buttonText }}
    </p>
    <button
      :style="this.buttonStyle"
      @click.left="emitTakeAction"
      @mouseover="setButtonHovered('main')"
      @mouseout="unsetButtonHovered('main')"
    ></button>
  </div>
</template>

<script>
export default {
  name: "buttonTwo",
  props: {
    colors: Object,
    buttonText: String
  },
  data: function() {
    return {
      active: false,
      mainButtonIsHovered: false,
      size: [32, 174],
      isHovered: false
    };
  },
  computed: {
    colorsProcessed: function() {
      var colors_ = {};
      for (var key in this.colors) {
        //var color = `hsla($(this.colors[]))`;
        var color_ = this.colors[key];
        colors_[
          key
        ] = `hsla(${color_[0]},${color_[1]}%,${color_[2]}%,${color_[3]})`;
      }
      return colors_;
    },
    containerStyle: function() {
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
        padding: "0px"
      };
    },
    backgroundStyle: function() {
      return {
        background: this.mainButtonIsHovered
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        top: "0px",
        height: `100%`,
        width: `100%`,
        border: `0.5px dashed ${this.colorsProcessed["theme"]}`,
        boxSizing: "border-box",
        backdropFilter: "blur(4px)",
        borderRadius: "inherit",
        textAlign: "center"
      };
    },
    buttonTextStyle: function() {
      return {
        display: this.active ? "none" : "block",
        position: "relative",
        margin: "0px",

        fontFamily: "Raleway",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "15px",
        lineHeight: "7px",
        color: `${this.colorsProcessed["theme"]}`
      };
    },
    buttonStyle: function() {
      return {
        display: this.active ? "none" : "block",
        position: "absolute",
        left: "0px",
        top: "0px",
        margin: "auto",
        padding: "0px",
        height: `${this.size[0]}px`,
        width: `${this.size[1]}px`,
        pointerEvents: "all",
        cursor: "pointer",

        background: "none",
        border: "none",
        borderRadius: "inherit",
        outline: "none"
      };
    }
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
    }
  }
};
</script>

<style lang="sass" scoped></style>
