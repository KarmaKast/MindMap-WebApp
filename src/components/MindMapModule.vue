<template>
  <div class="MindMapModule" :style="this.containerStyle">
    <mind-map-canvas
      :colors="this.colors"
      :colorsProcessed="colorsProcessed"
      :apiUrl="this.apiUrl"
      :entities="entities"
      :entityLimit="entityLimit"
      :apiValidity="apiValidity"
      :grid="grid"
      @create-new-entity="createNewNode"
      @dropEntity="dropEntity"
    ></mind-map-canvas>

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
        borderRadius: 'inherit',
      }"
    >
      <div
        id="mainMenu"
        :style="{
          position: 'absolute',
          marginTop: '8px',
          marginLeft: '10px',
          zIndex: 'unset',
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
              : 'unset',
            boxSizing: 'border-box',
            cursor: 'pointer',
            outline: 'none',
            pointerEvents: 'initial',
          }"
          @click.left="toggleMenu"
        >
          <img
            src="../assets/ic_more_vert_18px.svg"
            :style="{ color: 'rgb(255, 164, 164)', userSelect: 'none' }"
          />
        </button>
        <div id="menuItems" :style="this.menuItemsStyle">
          <button-one
            :validity="this.apiValidity"
            :colors="colors"
            :style="{ order: 0 }"
          ></button-one>
          <button-two
            v-for="(button, index) in menuButtons"
            :key="index + 1"
            :colors="colors"
            :buttonText="button['text']"
            @takeAction="button['action'](...button['args'])"
            :style="{ order: index }"
          ></button-two>
        </div>
      </div>
      <status-bar
        :colors="colors"
        :colorsProcessed="colorsProcessed"
        :apiUrl="apiUrl"
        :apiValidity="apiValidity"
      ></status-bar>
      <about-page
        :showPage="this.showAboutPage"
        @closePage="this.aboutPageDisplay"
      ></about-page>
    </div>
  </div>
</template>

<script>
import MindMapCanvas from "./MindMapCanvas.vue";
import statusBar from "./statusBar.vue";
import aboutPage from "./aboutPage.vue";

import buttonOne from "./button1.vue";
import buttonTwo from "./button2.vue";

//import {uuidv1} from 'uuid/v1';
import axios from "axios";
import qs from "querystring";
//import * as morphCore from "@karmakast/morph-dbms-core";

export default {
  name: "MindMapModule",
  components: {
    MindMapCanvas,
    statusBar,
    aboutPage,

    buttonOne,
    buttonTwo,
  },
  props: {
    // locationHor: {'left':value} or {'right':value}
    colors: Object,
    entityLimit: {
      default: 25,
      type: Number,
    },
  },
  data: function () {
    return {
      respo: "",
      showMenu: false,
      apiUrl: "",
      apiValidity: false,
      collection: null,
      entities: [],
      showAboutPage: false,
      grid: {
        size: 25,
        opacity: 0.3,
        width: 2,
        show: true,
        snap: true,
      },
    };
  },
  computed: {
    menuButtons: function () {
      var list = [
        {
          text: "Get Collection",
          action: this.getCollection,
          args: [],
          if: this.apiValidity,
        },
        {
          text: "Clear Collection",
          action: this.clearCollection,
          args: [],
          if: this.apiValidity,
        },
        {
          text: "Save Collection",
          action: this.saveCollection,
          args: [],
          if: this.apiValidity,
        },
        {
          text: "Load Collection",
          action: this.loadCollection,
          args: [],
          if: this.apiValidity,
        },
        {
          text: "Settings",
          action: function () {},
          args: [],
          if: true,
        },
        {
          text: "About",
          action: this.aboutPageDisplay,
          args: [true],
          if: true,
        },
      ];
      function process(value) {
        // method to process menu list
        return value["if"];
      }
      var processedList = list.filter(process);
      return processedList;
    },
    colorsProcessed: function () {
      var colors_ = {};
      for (var key in this.colors) {
        var color_ = this.colors[key];
        colors_[
          key
        ] = `hsla(${color_[0]},${color_[1]}%,${color_[2]}%,${color_[3]})`;
      }
      return colors_;
    },
    containerStyle: function () {
      var style = {
        height: "100%",
        width: "100%",
        overflow: "hidden",
        borderRadius: "15px 15px 10px 10px",
        position: "relative",
        touchAction: "none",
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
    centerButtonStyle: function () {
      var size = 25;
      return {
        position: "absolute",
        height: `${size}px`,
        width: `${size}px`,
        top: 5 + "px",
        right: 5 + "px",
        backgroundColor: `hsla(${this.colors["theme"][0]},${
          this.colors["theme"][1]
        }%,${this.colors["theme"][2] * 1.38}%,${
          this.colors["theme"][3] * 0.5
        })`,
        backdropFilter: "blur(4px)",
        border: `1px solid hsla(${this.colors["theme"][0]},${
          this.colors["theme"][1]
        }%,${this.colors["theme"][2] * 1.15}%,${
          this.colors["theme"][3] * 0.3
        })`,
        borderRadius: "50%",
      };
    },
    menuItemsStyle: function () {
      return {
        display: this.showMenu ? "grid" : "none",
        gridRowGap: "12px",
        position: "absolute",
        top: "0px",
        left: "60px",
        padding: "10px",

        background: "rgba(255, 255, 255, 0.5)",
        border: `0.5px dashed ${this.colorsProcessed["theme"]}`,
        boxSizing: "border-box",
        backdropFilter: "blur(4px)",
        borderRadius: "15px",
        boxShadow: "hsla(0, 0%, 0%, 0.16) 0px 0px 19px 1px",
      };
    },
  },
  methods: {
    loadAppSettings() {
      // todo: WIP
      // load app settings from app_settings.json either during mounted or created
    },
    loadCollection() {
      var url_ = this.apiUrl;
      // todo: directly using testCollection for now. Later a collection explorer feature need to be added.
      axios({
        method: "POST",
        url: url_ + "/collection/load",
        data: qs.stringify({ Label: "testCollection" }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }).then(() => {
        this.getCollection();
      });
    },
    getCollection() {
      var url_ = this.apiUrl;
      // todo: get a list of nodeIDs and create a list of nodes in the canvas
      console.log(`getting list of nodes\n${url_}`);
      axios
        .get(url_ + "/collection/get")
        .then((response) => {
          //console.log(response);
          this.collection = response["data"];
          this.entities = response.data.Entities.map((ID) => {
            return { ID: ID };
          });
        })
        .catch((err) => this.loadCollection());
    },
    clearCollection() {
      var url_ = this.apiUrl;
      this.$axios.post(url_ + "/collection/clear");
      this.getCollection();
    },
    saveCollection() {
      var url_ = this.apiUrl;
      this.$axios.post(url_ + "/collection/save");
    },
    toggleMenu() {
      if (this.showMenu) {
        this.showMenu = false;
      } else {
        this.showMenu = true;
      }
    },
    createNewNode(nodeLocationDef_) {
      if (!this.apiValidity) {
        alert("Connect to API");
      } else if (!this.entities.length >= this.entityLimit) {
        alert(`Sorry! Max nodes are limited to : ${this.entityLimit} for now.`);
      } else {
        axios({
          method: "POST",
          baseURL: this.apiUrl,
          url: `/entity/create`,
          data: qs.stringify({
            vizProps: JSON.stringify({
              location: {
                x: nodeLocationDef_.x,
                y: nodeLocationDef_.y,
                z: nodeLocationDef_.z,
              },
            }),
          }),
        })
          .then((response) => {
            //console.log("getting response");
            console.log(response);
            //this.node_ID = response.data.entityID;
            this.entities.push({
              ID: response.data.entityID,
              nodeLocationDef: nodeLocationDef_,
            });
          })
          .catch((err) => console.log("Error: ", err));
      }
      /*
      this.entities.push({
        ID: `__test_ID__${uuid.v1()}`,
        newNode: true,
        nodeLocationDef: nodeLocationDef_,
      });*/
    },
    dropEntity(entityID) {
      for (const index in this.entities) {
        if (this.entities[index].ID === entityID) {
          this.$delete(this.entities, index);
          break;
        }
      }
    },
    aboutPageDisplay(showOrHide) {
      //var win = window.open('https://github.com/KarmaKast/MindMap-WebApp/tree/develop', '_blank');
      //win.focus();
      this.showAboutPage = showOrHide;
    },
  },
  watch: {
    apiValidity() {
      if (this.apiValidity) {
        this.getCollection();
      }
    },
  },
  created: function () {
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
        if (action.type === "update_apiUrl") {
          this.apiUrl = state.apiUrl[0];
          this.apiValidity = state.apiUrl[1];
        }
      },
    });
  },
  mounted: function () {},
  updated: function () {},
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
