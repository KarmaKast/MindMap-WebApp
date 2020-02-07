<template>
  <div id="container" :style="this.containerStyle">
    <div id="background" :style="this.backgroundStyle"></div>
    <p :style="this.buttonTextStyle">
      {{ this.buttonText }}
    </p>
    <button
      :style="this.buttonStyle"
      @click.left="setActive"
      @mouseover="setButtonHovered('main')"
      @mouseout="unsetButtonHovered('main')"
    ></button>
    <input
      v-model="urlInField"
      ref="inputField"
      placeholder="Connect to API"
      :style="this.inputFieldStyle"
      @keyup.enter="testAPI"
      @keyup.esc="setNotActive"
    />
    <button
      id="testButton"
      :style="this.testButtonStyle"
      @click.left="testAPI"
      @mouseover="setButtonHovered('test')"
      @mouseout="unsetButtonHovered('test')"
    ></button>
  </div>
</template>

<script>
export default {
  name: "buttonOne",
  props: {
    colors: Object,
    validity: Boolean
  },
  data: function() {
    return {
      buttonText: "Connect to API",
      active: false,
      mainButtonIsHovered: false,
      testButtonIsHovered: false,
      size: [32, 174],
      urlInField: ""
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
        gridTemplateColumns: this.active ? templateC : "unset",
        placeItems: "center",
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

        outline: "none",
        background: "none",
        border: "none",
        borderRadius: "inherit"
      };
    },
    inputFieldStyle: function() {
      return {
        display: this.active ? "block" : "none",
        position: "relative",
        order: "1",
        background: "none",
        height: "80%",
        width: "90%",

        border: "none",
        outline: "none",
        borderBottom: `1px solid ${this.colorsProcessed["theme"]}`,
        boxSizing: "border-box",
        borderRadius: "1px",
        fontSize: "10px",
        pointerEvents: "all",
        cursor: "text"
      };
    },
    testButtonStyle: function() {
      return {
        display: this.active ? "table-cell" : "none",
        order: "2",
        //position: "absolute",
        //right: "0px",
        //top: "0px",
        margin: "0 auto",
        padding: "0px",
        height: `80%`,
        width: `80%`,
        borderRadius: "10px",
        background: this.testButtonIsHovered
          ? "rgba(255, 255, 255, 0.9)"
          : "rgba(255, 255, 255, 0.3)",
        border: `0.5px dashed ${this.colorsProcessed["theme"]}`,
        backdropFilter: "blur(4px)",
        outline: "none",
        pointerEvents: "all",
        cursor: "pointer"
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
    testAPI() {
      var isAPI = false;
      // todo: test API
      isAPI = true;
      if (isAPI) {
        //this.apiUrl = this.urlInField;
        this.$store.dispatch("update_apiUrl", this.urlInField);
        this.active = false;
      }
    },
    setButtonHovered(bttn) {
      if (bttn === "main") {
        this.mainButtonIsHovered = true;
      }
      if (bttn == "test") {
        this.testButtonIsHovered = true;
      }
    },
    unsetButtonHovered(bttn) {
      if (bttn === "main") {
        this.mainButtonIsHovered = false;
      }
      if (bttn == "test") {
        this.testButtonIsHovered = false;
      }
    }
  }
};
</script>

<style lang="sass" scoped></style>
