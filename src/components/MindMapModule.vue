<template>
  <div class="MindMapModule" :style="this.containerStyle">
    <mind-map-canvas
      v-if="!canvasForceUpdate"
      :colors="this.colorsFinal"
      :colorsProcessed="colorsProcessed"
      :apiUrl="this.apiUrl"
      :entities="entities"
      :entityLimit="entityLimit"
      :apiValidity="apiValidity"
      :grid="grid"
      @create-new-entity="createNewEntity"
      @dropEntity="dropEntity"
    ></mind-map-canvas>

    <div
      class="debug"
      v-html="this.debugMsg"
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
          aria-label="burgerTimeButton"
          :style="burgerTimeButtonStyle"
          @click.left="toggleMenu"
        >
          <icon-base iconName="Main Menu" :iconColor="colorsProcessed['theme']"
            ><icon-hamburger1
          /></icon-base>
        </button>
        <div v-if="menuLoaded">
          <div v-show="showMenu" id="menuItems" :style="this.menuItemsStyle">
            <button-one
              :validity="this.apiValidity"
              :colors="colorsFinal"
              :colorsProcessed="colorsProcessed"
              :style="{ order: 0 }"
            ></button-one>
            <button-two
              v-for="(button, index) in menuButtons"
              :key="index + 1"
              :colors="colorsFinal"
              :colorsProcessed="colorsProcessed"
              :buttonText="button['text']"
              @takeAction="button['action'](...button['args'])"
              :style="{ order: index }"
            ></button-two>
          </div>
        </div>
      </div>
      <status-bar
        :colors="colorsFinal"
        :colorsProcessed="colorsProcessed"
        :apiUrl="apiUrl"
        :apiValidity="apiValidity"
        :showThemeToggle="!lockTheming"
        :toggleCurrent="CurrentTheme === 'theme_light' ? 'light' : 'dark'"
        @themeToggle="themeToggle"
      ></status-bar>
      <about-page
        v-if="aboutPageLoaded"
        :colors="colorsFinal"
        :colorsProcessed="colorsProcessed"
        :showPage="showAboutPage"
        @closePage="aboutPageDisplay(false)"
      ></about-page>
    </div>
  </div>
</template>

<script>
//import MindMapCanvas from "./MindMapCanvas.vue";
const MindMapCanvas = () => import("./MindMapCanvas");

import statusBar from "./statusBar.vue";
//import aboutPage from "./aboutPage.vue";
const aboutPage = () => import("./aboutPage");

//import buttonOne from "./button1.vue";
const buttonOne = () => import("./button1");
//import buttonTwo from "./button2.vue";
const buttonTwo = () => import("./button2");

//import {uuidv1} from 'uuid/v1';
import axios from "axios";
import qs from "querystring";
//import * as morphCore from "@karmakast/morph-dbms-core";

//import icon1 from "../assets/ic_more_vert_18px.svg";
import iconBase from "./icons/iconBase";
import IconHamburger1 from "./icons/IconHamburger1";

export default {
  name: "MindMapModule",
  components: {
    MindMapCanvas,
    statusBar,
    aboutPage,

    buttonOne,
    buttonTwo,

    iconBase,
    IconHamburger1,
  },
  props: {
    // locationHor: {'left':value} or {'right':value}
    colors: Object,
    lockTheming: {
      default: false,
      type: Boolean,
    },
    themeDefault: {
      default: "light",
      type: String,
    },
    entityLimit: {
      default: 25,
      type: Number,
    },
  },
  data: function () {
    return {
      debugMsg: "",
      menuLoaded: false,
      showMenu: false,
      apiUrl: "",
      apiValidity: false,
      collection: null,
      entities: [],
      aboutPageLoaded: false,
      showAboutPage: false,
      grid: {
        size: 25,
        opacity: 0.3,
        width: 2,
        show: true,
        snap: true,
      },
      MindMapColors: {
        theme_light: {
          background: { h: 0, s: 0, l: 95, a: 1 },
          backgroundShade1: { h: 0, s: 0, l: 75, a: 1 },
          backgroundShade2: { h: 0, s: 0, l: 100, a: 1 },
          theme: { h: 358, s: 97, l: 50, a: 1 },
          theme_light: { h: 0, s: 100, l: 84, a: 1 },
        },
        theme_dark: {
          background: { h: 0, s: 0, l: 15, a: 1 },
          backgroundShade1: { h: 0, s: 0, l: 40, a: 1 },
          backgroundShade2: { h: 0, s: 0, l: 5, a: 1 },
          theme: { h: 151, s: 70, l: 50, a: 1 },
          theme_light: { h: 151, s: 85, l: 32, a: 0.3 },
        },
      },
      CurrentTheme: localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : "theme_light",
      canvasForceUpdate: false,
    };
  },
  computed: {
    colorsFinal: function () {
      return this.colors ? this.colors : this.MindMapColors[this.CurrentTheme];
    },
    menuButtons: function () {
      var list = [
        {
          text: "Get Collection",
          action: this.getCollection,
          args: [],
          if: this.apiValidity,
        },
        {
          text: "New Collection",
          action: this.createCollection,
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
          action: this.showSettings,
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
      for (var key in this.colorsFinal) {
        var color_ = this.colorsFinal[key];
        colors_[
          key
        ] = `hsla(${color_.h},${color_.s}%,${color_.l}%,${color_.a})`;
      }
      return colors_;
    },
    containerStyle: function () {
      return {
        backgroundColor: `${
          this.colorsProcessed ? this.colorsProcessed["background"] : "unset"
        }`,
        boxShadow: `0px 0px 0 2px ${
          this.colorsProcessed ? this.colorsProcessed["theme_light"] : "unset"
        }, inset 0px 0px 5px 3px hsla(0, 0%, 0%, 0.1`,
      };
    },
    centerButtonStyle: function () {
      var size = 25;
      return {
        position: "absolute",
        height: `${size}px`,
        width: `${size}px`,
        top: 5 + "px",
        right: 5 + "px",
        backgroundColor: `hsla(${this.colorsProcessed["theme"].h},${
          this.colorsProcessed["theme"].s
        }%,${this.colorsProcessed["theme"].l * 1.38}%,${
          this.colorsProcessed["theme"].a * 0.5
        })`,
        backdropFilter: "blur(4px)",
        border: `1px solid hsla(${this.colorsProcessed["theme"].h},${
          this.colorsProcessed["theme"].s
        }%,${this.colorsProcessed["theme"].l * 1.15}%,${
          this.colorsProcessed["theme"].a * 0.3
        })`,
        borderRadius: "50%",
      };
    },
    menuItemsStyle: function () {
      return {
        display: "grid",
        gridRowGap: "12px",
        position: "absolute",
        top: "0px",
        left: "60px",
        padding: "10px",
        pointerEvents: "all",

        background: `hsla(${this.colorsFinal["background"].h}, ${
          this.colorsFinal["background"].s
        }%, ${this.colorsFinal["background"].l + 20}%, ${
          CSS.supports("backdrop-filter: blur(3px)") ? 0.38 : 1
        }`,
        border: `0.5px dashed ${this.colorsProcessed["theme"]}`,
        boxSizing: "border-box",
        backdropFilter: "blur(4px)",
        borderRadius: "15px",
        boxShadow: "hsla(0, 0%, 0%, 0.16) 0px 0px 19px 1px",
      };
    },
    burgerTimeButtonStyle: function () {
      return {
        position: "relative",
        top: "0px",
        left: "0px",
        height: "38px",
        width: "48px",
        background: `hsla(${this.colorsFinal["background"].h}, ${
          this.colorsFinal["background"].s
        }%, ${this.colorsFinal["background"].l + 20}%, ${
          CSS.supports("backdrop-filter: blur(3px)") ? 0.38 : 1
        }`,
        border: `1px solid hsla(${this.colorsFinal["theme"].h}, ${this.colorsFinal["theme"].s}%, ${this.colorsFinal["theme"].l}%, 0.4 )`,
        backdropFilter: "blur(4px)",
        borderRadius: "12px",
        padding: "0px",
        boxShadow: this.showMenu
          ? `hsla(0, 0%, ${
              this.colorsFinal["background"].l - 20
            }%, 0.5) 0px 0px 19px 1px`
          : "unset",
        boxSizing: "border-box",
        cursor: "pointer",
        outline: "none",
        pointerEvents: "initial",
      };
    },
  },
  methods: {
    loadAppSettings() {
      // todo: WIP
      // load app settings from app_settings.json either during mounted or created
    },
    refreshCanvas() {
      this.canvasForceUpdate = true;
      this.$nextTick(() => {
        this.canvasForceUpdate = false;
      });
    },
    showSettings() {
      alert("Settings section not implimented yet");
    },
    loadCollection() {
      var url_ = this.apiUrl;
      this.entities = [];
      // todo: directly using testCollection for now. Later a collection explorer feature need to be added.
      axios({
        method: "POST",
        url: url_ + "/collection/load",
        data: qs.stringify({ Label: "testCollection" }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then(() => {
          this.getCollection();
        })
        .catch((err) => {
          this.createCollection();
        });
    },
    getCollection() {
      var url_ = this.apiUrl;
      this.entities = [];
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
          this.refreshCanvas();
          this.$store.commit("update_apiUrlValidity", true);
          this.apiValidity = true;
          if (
            !(
              localStorage.getItem("apiUrl") &&
              localStorage.getItem("apiUrl") === url_
            )
          )
            localStorage.setItem("apiUrl", url_);
        })
        .catch((err) => this.loadCollection());
    },
    createCollection() {
      var url_ = this.apiUrl;
      // todo: get a list of nodeIDs and create a list of nodes in the canvas
      console.log(`getting list of nodes\n${url_}`);
      axios({
        method: "POST",
        url: url_ + "/collection/create",
        data: qs.stringify({ Label: "testCollection" }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        .then(() => {
          this.saveCollection();
          this.getCollection();
        })
        .catch((err) => {
          this.$store.commit("update_apiUrlValidity", false);
          this.apiValidity = false;
        });
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
        if (!this.menuLoaded) this.menuLoaded = true;
      }
    },
    createNewEntity(entityLocationDef_) {
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
                x: entityLocationDef_.x,
                y: entityLocationDef_.y,
                z: entityLocationDef_.z,
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
              entityLocationDef: entityLocationDef_,
            });
          })
          .catch((err) => console.log("Error: ", err));
      }
      /*
      this.entities.push({
        ID: `__test_ID__${uuid.v1()}`,
        newNode: true,
        entityLocationDef: entityLocationDef_,
      });*/
    },
    dropEntity(entityID, claimantIDs) {
      for (const index in this.entities) {
        if (this.entities[index].ID === entityID) {
          this.$delete(this.entities, index);
          break;
        }
      }
    },
    aboutPageDisplay(showOrHide) {
      this.showAboutPage = showOrHide;
      if (showOrHide && !this.aboutPageLoaded) this.aboutPageLoaded = true;
    },
    themeToggle() {
      this.CurrentTheme === "theme_light"
        ? (this.CurrentTheme = "theme_dark")
        : (this.CurrentTheme = "theme_light");
      localStorage.setItem("theme", this.CurrentTheme);
    },
  },
  watch: {
    apiUrl() {
      //if (this.apiValidity) {
      if (this.apiUrl !== "") this.getCollection();
      else {
        this.apiValidity = false;
        this.$store.commit("update_apiUrlValidity", false);
      }
      //}
    },
    apiValidity() {
      if (!this.apiValidity && this.apiUrl === "") {
        this.refreshCanvas();
        this.entities = [];
        localStorage.setItem("apiUrl", "");
      }
    },
  },
  created: function () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === "update_apiUrl") {
        this.apiUrl = state.apiUrl[0];
        //this.apiValidity = state.apiUrl[1];
      }
    });
  },
  mounted: function () {
    if (localStorage.getItem("apiUrl")) {
      this.apiUrl = localStorage.getItem("apiUrl");
      this.$store.commit("update_apiUrl", this.apiUrl);
      //this.apiValidity = true;
    }
  },
  updated: function () {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*
* 
*/
:root {
  --module-background-color: hsla(0, 0%, 95%, 1);
}

.MindMapModule {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
  position: relative;
  touch-action: none;
}
</style>
