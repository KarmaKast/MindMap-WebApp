<template>
  <div class="MindMapModule" :style="this.containerStyle">
    <mind-map-canvas
      :colors="this.colors"
      :apiUrl="this.apiUrl"
      :nodes="nodes"
      :apiValidity="apiValidity"
      :gridSize="gridSize"
    >
    </mind-map-canvas>

    <div
      class="debug"
      v-html="this.respo"
      style="display: block; position: relative; bottom: 0px; margin: 0px auto;"
    ></div>

    <div
      id="UI"
      :style="{
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        pointerEvents: 'none',
        borderRadius: 'inherit'
      }"
    >
      <div
        id="mainMenu"
        :style="{
          position: 'absolute',
          marginTop: '8px',
          marginLeft: '10px',
          zIndex: 'unset'
        }"
      >
        <button
          id="burgerTimeButton"
          :style="{
            position: 'relative',
            top: '0px',
            left: '0px',
            height: '38px',
            width: '48px',
            background: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid rgb(255, 164, 164)',
            backdropFilter: 'blur(4px)',
            borderRadius: '12px',
            padding: '0px',
            boxShadow: this.showMenu
              ? 'hsla(0, 0%, 0%, 0.16) 0px 0px 19px 1px'
              : 'hsla(0, 0%, 0%, 0.2) 0px 0px 1px 1px',
            boxSizing: 'border-box',
            cursor: 'pointer',
            outline: 'none',
            pointerEvents: 'initial'
          }"
          @click.left="toggleMenu"
        >
          <img
            src="../assets/ic_more_vert_18px.svg"
            style="color: rgb(255, 164, 164);"
          />
        </button>
        <div id="menuItems" :style="this.mainItemsStyle">
          <button-one
            :validity="this.apiValidity"
            :colors="colors"
            :style="{ order: 0 }"
          ></button-one>
          <button-two
            v-for="(button, index) in menuButtons"
            :key="index"
            :colors="colors"
            :buttonText="button['text']"
            @takeAction="button['action'](...button['args'])"
            :style="{ order: index }"
          ></button-two>
        </div>
      </div>
      <status-bar
        :colors="colorsProcessed"
        :apiUrl="apiUrl"
        :apiValidity="apiValidity"
      >
      </status-bar>
      <about-page
        :showPage="this.showAboutPage"
        @closePage="this.aboutPageDisplay"
      >
      </about-page>
    </div>
  </div>
</template>

<script>
import MindMapCanvas from "./MindMapCanvas.vue";
import statusBar from "./statusBar.vue";
import aboutPage from "./aboutPage.vue";

import buttonOne from "./button1.vue";
import buttonTwo from "./button2.vue";

export default {
  name: "MindMapModule",
  components: {
    MindMapCanvas,
    statusBar,
    aboutPage,

    buttonOne,
    buttonTwo
  },
  props: {
    // locationHor: {'left':value} or {'right':value}
    colors: Object
  },
  data: function() {
    return {
      respo: "",
      showMenu: false,
      apiUrl: "",
      apiValidity: false,
      nodes: [
        { ID: "__test_ID__", newNode: true },
        { ID: "__test_ID__1", newNode: true }
      ],
      showAboutPage: false,
      gridSize: 1
    };
  },
  computed: {
    menuButtons: function() {
      var list = [
        {
          text: "Load Database",
          action: this.loadDatabase,
          args: [],
          if: this.apiValidity
        },
        {
          text: "Clear Database",
          action: this.clearDatabase,
          args: [],
          if: this.apiValidity
        },
        {
          text: "Save Database",
          action: this.saveDatabase,
          args: [],
          if: this.apiValidity
        },
        {
          text: "Archive Database",
          action: this.archiveDatabase,
          args: [],
          if: this.apiValidity
        },
        {
          text: "Settings",
          action: function() {},
          args: [],
          if: true
        },
        {
          text: "About",
          action: this.aboutPageDisplay,
          args: [true],
          if: true
        }
      ];
      function process(value) {
        // method to process menu list
        return value["if"];
      }
      var processedList = list.filter(process);
      return processedList;
    },
    colorsProcessed: function() {
      var colors_ = {};
      for (var key in this.colors) {
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
        width: "100%",
        overflow: "hidden",
        borderRadius: "15px 15px 10px 10px",
        position: "relative"
      };
      if (this.colors !== undefined) {
        if ("background" in this.colors) {
          style["backgroundColor"] = `${this.colorsProcessed["background"]}`;
          style[
            "boxShadow"
          ] = `0px 0px 0 2px ${this.colorsProcessed["theme_light"]}, inset 0px 0px 5px 3px hsla(0, 0%, 0%, 0.1`;
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
        gridRowGap: "8px",
        position: "absolute",
        top: "0px",
        left: "60px",
        padding: "10px",

        background: "rgba(255, 255, 255, 0.5)",
        border: `0.5px dashed ${this.colorsProcessed["theme"]}`,
        boxSizing: "border-box",
        backdropFilter: "blur(4px)",
        borderRadius: "10px",
        boxShadow: "hsla(0, 0%, 0%, 0.16) 0px 0px 19px 1px"
      };
    }
  },
  methods: {
    loadDatabase() {
      var url_ = this.apiUrl;
      this.$axios.get(url_ + "/load");
      // todo: get a list of nodeIDs and create a list of nodes in the canvas
      console.log(`getting list of nodes\n${url_}`);
      this.$axios.get(url_ + "/get/nodeIDs").then(response => {
        //console.log(response);
        this.nodes = response["data"]["IDs"].map(function(ID) {
          return { ID: ID, newNode: false };
        });
      });
    },
    clearDatabase() {
      var url_ = this.apiUrl;
      this.$axios.post(url_ + "/clear");
    },
    saveDatabase() {
      var url_ = this.apiUrl;
      this.$axios.post(url_ + "/save");
    },
    archiveDatabase() {
      var url_ = this.apiUrl;
      this.$axios.post(url_ + "/archive/pack");
    },
    toggleMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    },
    aboutPageDisplay(showOrHide) {
      //var win = window.open('https://github.com/KarmaKast/MindMap-WebApp/tree/develop', '_blank');
      //win.focus();
      this.showAboutPage = showOrHide;
    }
  },
  watch: {},
  created: function() {
    //this.testAPI();

    //this.$store.subscribeAction((action) => {
    //  if (action.type === "update_apiUrl") {
    //    //console.log(`updating validity ${state.apiUrl}`);
    //    this.apiurl = this.$store.state.apiUrl[0];
    //    this.apiValidity = this.$store.state.apiUrl[1];
    //  }
    //});
    this.$store.subscribeAction({
      after: (action, state) => {
        this.apiUrl = state.apiUrl[0];
        this.apiValidity = state.apiUrl[1];
      }
    });
  },
  mounted: function() {},
  updated: function() {}
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
