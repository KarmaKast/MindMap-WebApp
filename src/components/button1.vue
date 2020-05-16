<template>
  <div class="container" :style="containerStyle">
    <div class="background" :style="backgroundStyle"></div>
    <p :style="buttonTextStyle">
      {{ buttonText }}
    </p>
    <button
      class="primary-button"
      :style="buttonStyle"
      @mousedown="clickStarted = true"
      @mouseup="clickStarted = false"
      @click.left="setActive"
      @mouseover="setButtonHovered('main')"
      @mouseout="
        clickStarted = false;
        unsetButtonHovered('main');
      "
    ></button>
    <input
      v-model="urlInField"
      class="input-field"
      ref="inputField"
      placeholder="Connect to API"
      :style="inputFieldStyle"
      @keyup.enter="testAPI"
      @keyup.esc="setNotActive"
    />
    <button
      class="secondary-button"
      :style="testButtonStyle"
      @click.left="testAPI"
      @mouseover="setButtonHovered('test')"
      @mouseout="unsetButtonHovered('test')"
    >
      <icon-base
        iconName="Connect to API"
        :iconColor="colorsProcessed['theme']"
        height="100%"
        width="100%"
        role="button"
        viewBox="0 0 48 48"
        :style="{ transform: 'rotate(180deg)' }"
        ><icon-direction-left />
      </icon-base>
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "buttonOne",
  components: {
    iconBase: () => import("./icons/iconBase"),
    iconDirectionLeft: () => import("./icons/iconDirectionLeft"),
  },
  props: {
    colors: Object,
    colorsProcessed: Object,
    validity: Boolean,
    index: {
      default: 1,
      type: Number,
    },
  },
  data: function () {
    return {
      buttonText: "Connect to API",
      active: false,
      mainButtonIsHovered: false,
      testButtonIsHovered: false,
      size: [32, 174],
      urlInField: "",
      clickStarted: false,
    };
  },
  computed: {
    urlInStore: function () {
      return this.$store.state.apiUrl[0];
    },

    containerStyle: function () {
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
          ? `1px dashed hsla(${this.colors["theme"].h}, ${this.colors["theme"].s}%, ${this.colors["theme"].l}%, 0.4)`
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

        outline: "none",
        background: "none",
        border: "none",
        borderRadius: "inherit",
      };
    },
    inputFieldStyle: function () {
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
        pointerEvents: "initial",
        cursor: "text",
        color: this.colorsProcessed["theme"],
      };
    },
    testButtonStyle: function () {
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
        pointerEvents: "initial",
        cursor: "pointer",
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
    testAPI() {
      var isAPI = false;
      // todo: test API
      isAPI = true;
      if (isAPI) {
        //this.apiUrl = this.urlInField;
        this.$store.commit("update_apiUrl", this.urlInField);
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
    },
  },
  watch: {
    urlInStore: {
      handler() {
        if (this.urlInStore !== this.urlInField)
          this.urlInField = this.urlInStore;
      },
    },
  },
  mounted() {
    if (this.urlInStore !== this.urlInField) this.urlInField = this.urlInStore;
  },
};
</script>

<style lang="sass" scoped></style>
