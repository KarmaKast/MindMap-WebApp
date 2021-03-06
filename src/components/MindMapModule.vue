<template>
  <div class="MindMapModule" :style="containerStyle">
    <mind-map-canvas
      v-if="!canvasForceUpdate"
      :colors="colorsFinal"
      :colorsProcessed="colorsProcessed"
      :apiUrl="apiUrl"
      :collection="collection"
      :entityLimit="entityLimit"
      :apiValidity="apiValidity"
      :grid="grid"
      @create-new-entity="createNewEntity"
      @dropEntity="dropEntity"
      @getRelation="getRelation"
    ></mind-map-canvas>

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
          <icon-base
            iconName="Main Menu"
            :iconColor="colorsProcessed['theme']"
            role="button"
            :aria="{ ['aria-pressed']: `${showMenu}` }"
            ><icon-hamburger1
          /></icon-base>
        </button>
        <div v-if="menuLoaded">
          <div v-show="showMenu" id="menuItems" :style="menuItemsStyle">
            <button-one
              :validity="apiValidity"
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
import Vue from "vue";
import statusBar from "./statusBar.vue";

//import {uuidv1} from 'uuid/v1';
import axios from "axios";
import qs from "querystring";
//import * as morphCore from "@karmakast/morph-dbms-core";

export default {
  name: "MindMapModule",
  components: {
    MindMapCanvas: () =>
      import(/* webpackChunkName: "chunk-mindmap-canvas" */ "./MindMapCanvas"),
    statusBar,
    aboutPage: () =>
      import(/* webpackChunkName: "chunk-about-page" */ "./aboutPage"),

    buttonOne: () =>
      import(/* webpackChunkName: "chunk-button1" */ "./button1"),
    buttonTwo: () =>
      import(/* webpackChunkName: "chunk-button2" */ "./button2"),

    iconBase: () =>
      import(/* webpackChunkName: "chunk-icon-base" */ "./icons/iconBase"),
    IconHamburger1: () =>
      import(
        /* webpackChunkName: "chunk-icon-Hamburger1" */ "./icons/IconHamburger1"
      ),
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
      menuLoaded: false,
      showMenu: false,
      apiUrl: "",
      apiValidity: false,
      collection: { Entities: [], ID: "", Label: "", Relations: [] },
      aboutPageLoaded: false,
      showAboutPage: false,
      grid: {
        size: 25,
        opacity: 0.3,
        width: 1,
        show: true,
        snap: true,
      },
      MindMapColors: {
        theme_light: {
          background: { h: 0, s: 0, l: 95, a: 1 },
          backgroundShade1: { h: 0, s: 0, l: 75, a: 1 },
          backgroundShade1a: { h: 0, s: 0, l: 75 * 1.2, a: 1 },
          backgroundShade2: { h: 0, s: 0, l: 100, a: 1 },
          text: { h: 0, s: 0, l: 30, a: 1 },
          theme: { h: 358, s: 97, l: 50, a: 1 },
          theme_light: { h: 0, s: 100, l: 75, a: 0.6 },
        },
        theme_dark: {
          background: { h: 0, s: 0, l: 10, a: 1 },
          backgroundShade1: { h: 0, s: 0, l: 40, a: 1 },
          backgroundShade1a: { h: 0, s: 0, l: 40 * 0.5, a: 1 },
          backgroundShade2: { h: 0, s: 0, l: 5, a: 1 },
          text: { h: 0, s: 0, l: 60, a: 1 },
          theme: { h: 151, s: 70, l: 50, a: 1 },
          theme_light: { h: 151, s: 85, l: 32, a: 0.6 },
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
      let list = [
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
      let processedList = list.filter(process);
      return processedList;
    },
    colorsProcessed: function () {
      let colors_ = {};
      for (let key in this.colorsFinal) {
        let color_ = this.colorsFinal[key];
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
      let size = 25;
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
      let url_ = this.apiUrl;
      this.collection = { Entities: [], ID: "", Label: "", Relations: [] };
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
      let url_ = this.apiUrl;
      this.collection = { Entities: [], ID: "", Label: "", Relations: [] };
      // todo: get a list of entityIDs and create a list of entitys in the canvas
      console.log(`getting list of entities\n${url_}`);
      axios
        .get(url_ + "/collection/get")
        .then((response) => {
          //console.log(response["data"]);
          this.collection = response["data"];
          this.collection.Entities = response.data.Entities.map((ID) => {
            return { ID: ID };
          });
          this.refreshCanvas();
          this.$store.commit("update_apiUrlValidity", true);
          this.apiValidity = true;
          const apiUrl = localStorage.getItem("apiUrl");
          if (!apiUrl || apiUrl !== url_) localStorage.setItem("apiUrl", url_);
        })
        .catch((err) => this.loadCollection());
    },
    createCollection() {
      let url_ = this.apiUrl;
      // todo: get a list of entityIDs and create a list of entitys in the canvas
      console.log(`getting list of entitys\n${url_}`);
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
      let url_ = this.apiUrl;
      axios.post(url_ + "/collection/clear");
      this.getCollection();
    },
    saveCollection() {
      let url_ = this.apiUrl;
      axios.post(url_ + "/collection/save");
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
      } else if (!this.collection.Entities.length >= this.entityLimit) {
        alert(
          `Sorry! Max entitys are limited to : ${this.entityLimit} for now.`
        );
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
            //this.entity_ID = response.data.entityID;
            this.collection.Entities = [
              ...this.collection.Entities,
              {
                ID: response.data.entityID,
                entityLocationDef: entityLocationDef_,
              },
            ];
            /*this.collection.Entities.push({
              ID: response.data.entityID,
              entityLocationDef: entityLocationDef_,
            });*/
          })
          .catch((err) => console.log("Error: ", err));
      }
      /*
      this.collection.Entities.push({
        ID: `__test_ID__${uuid.v1()}`,
        newNode: true,
        entityLocationDef: entityLocationDef_,
      });*/
    },
    dropEntity(entityID, claimantIDs) {
      for (const index in this.collection.Entities) {
        if (this.collection.Entities[index].ID === entityID) {
          this.$delete(this.collection.Entities, index);
          break;
        }
      }
    },
    getRelation(relationID) {
      //
      axios({
        method: "GET",
        baseURL: this.apiUrl,
        url: `/collection/getRelation`,
        data: qs.stringify({
          relationID,
        }),
      }).then((response) => {
        console.log(response);
        //this.collection.Relations[relationID] = response.data;
        Vue.set(this.collection.Relations, relationID, response.data);
      });
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
        this.collection = null;
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
    const apiUrl = localStorage.getItem("apiUrl");
    if (apiUrl) {
      this.apiUrl = apiUrl;
      this.$store.commit("update_apiUrl", apiUrl);
      //this.apiValidity = true;
    }
  },
  updated: function () {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
.MindMapModule {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
  position: relative;
  touch-action: none;
}
</style>
