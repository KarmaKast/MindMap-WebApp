<template>
  <div class="container" :style="this.containerStyle">
    <MindMapCanvas :apiUrl="this.url_" :height="this.height" :width="this.width"></MindMapCanvas>

    <div
      class="debug"
      v-html="this.respo"
      style="display: block; position: relative; bottom: 0px; margin: 0px auto;"
    ></div>

    <div id="UI" style="position: absolute; top: 0px; left: 0px;">
      <div
        id="mainMenu"
        style="position: absolute; margin-top: 15px; margin-left: 15px; z-index:5000;"
      >
        <button
          id="burgerTimeButton"
          style="position: relative; top: 0px; left:0px; height: 38px;width: 48px;background: rgba(255, 255, 255, 0.5);border: 0.5px dashed rgb(255, 164, 164);backdrop-filter: blur(4px);border-radius: 12px; padding: 0px;"
          @click.left="toggleMenu"
        >
          <img
            src="../assets/ic_more_vert_18px.svg"
            style="color: rgb(255, 164, 164);"
          />
        </button>
        <div id="menuItems" :style="this.mainItemsStyle">
          <button-one :colors="this.colors" style="order:1;"></button-one>
          <button-two
            :colors="this.colors"
            buttonText="Load Database"
            @takeAction="this.loadDatabase"
            style="order:2;"
          ></button-two>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MindMapCanvas from "./MindMapCanvas.vue";
import buttonOne from "./button1.vue";
import buttonTwo from "./button2.vue";

export default {
  name: "MindMapModule",
  components: {
    MindMapCanvas,
    buttonOne,
    buttonTwo
  },
  props: {
    locationVert: Object,
    // locationVert: {'top':value} or {'bottom':value}
    locationHor: Object,
    // locationHor: {'left':value} or {'right':value}
    colors: Object,
    height: Number,
    width: Number
  },
  data: function() {
    return {
      respo: "",
      showMenu: false
    };
  },
  computed: {
    url_: function() {
      return this.$store.state.apiUrl;
    },
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
      var style = {
        height: "100%",
        width: "100%"
      };
      if (this.locationVert !== undefined) {
        if ("marginTop" in this.locationVert) {
          style["marginTop"] = this.locationVert["marginTop"] + "px";
        }
        if ("marginBottom" in this.locationVert) {
          style["marginBottom"] = this.locationVert + "px";
        }
      }
      if (this.colors !== undefined) {
        if ("background" in this.colors) {
          style["backgroundColor"] = `${this.colorsProcessed["background"]}`;
        }
      }
      return style;
    },
    centerButtonStyle: function() {
      var size = 25;
      return {
        position: "absolute",
        height: `${size}px`,
        width: `${size}px`,
        top: 5 + "px",
        right: 5 + "px",
        backgroundColor: `hsla(${this.colors["theme"][0]},${
          this.colors["theme"][1]
        }%,${this.colors["theme"][2] * 1.38}%,${this.colors["theme"][3] *
          0.5})`,
        backdropFilter: "blur(4px)",
        border: `1px solid hsla(${this.colors["theme"][0]},${
          this.colors["theme"][1]
        }%,${this.colors["theme"][2] * 1.15}%,${this.colors["theme"][3] *
          0.3})`,
        borderRadius: "50%"
      };
    },
    mainItemsStyle: function() {
      return {
        display: this.showMenu ? "grid" : "none",
        justifyContent: "start",
        gridRowGap: "8px",
        position: "absolute",
        top: "0px",
        left: "60px",
        padding: "10px",

        background: "rgba(255, 255, 255, 0.5)",
        border: `0.5px dashed ${this.colorsProcessed["theme"]}`,
        boxSizing: "border-box",
        backdropFilter: "blur(4px)",
        borderRadius: "10px"
      };
    }
  },
  methods: {
    loadDatabase() {
      var url_ = this.$store.state.apiUrl;
      this.$axios.get(url_ + "/load");
    },
    toggleMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    }
  },
  created: function() {
    //this.testAPI();
  },
  watch: {
    apiUrl(newValue, oldValue) {
      // validate newValue
      var isValid = this.$store.getters.validateAPI();
      if (!isValid) {
        this.$store.commit("update_apiUrl", oldValue);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.container {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(49, 49, 49);
}
</style>
