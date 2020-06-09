<template>
  <div id="app">
    <div
      v-if="APP_MODE === 'development'"
      :style="{
        height: '400px',
        width: '100%',
        backgroundColor: 'blue',
      }"
    ></div>
    <div id="mindMapContainer" :style="mindMapContainerStyle">
      <!-- <MindMapModule :colors="MindMapColors" :entityLimit="entityLimit" />-->
      <mind-map-module v-if="!prerender" :entityLimit="entityLimit" />
      <module-loading-component v-if="prerender" />
    </div>
  </div>
</template>

<script>
//import MindMapModule from "./components/MindMapModule.vue";
import ModuleLoadingComponent from "./components/MindMapModule/ModuleLoadingComponent.vue";

export default {
  name: "app",
  metaInfo: {
    title: process.env.VUE_APP_NAME + " Prototype | KarmaKast",
    meta: [
      {
        name: "description",
        content: "A fresh take on mindmap. Currently in early development.",
      },
      {
        property: "og:description",
        content: "A fresh take on mindmap. Currently in early development.",
      },
      {
        property: "og:title",
        content: process.env.VUE_APP_NAME + " Prototype",
      },
      {
        property: "og:url",
        content: "https://karmakast.github.io/MindMap-WebApp/",
        //content: `${process.env.BASE_URL}`,
      },
    ],
    link: [
      { rel: "canonical", href: "https://karmakast.github.io/MindMap-WebApp/" },
      //{ rel: "icon", href: "<%= BASE_URL %>favicon.ico" },
    ],
  },
  components: {
    MindMapModule: () => ({
      component: import(
        /* webpackChunkName: "chunk-mindmap-module" */ "./components/MindMapModule/ModuleComponent.vue"
      ),
      loading: ModuleLoadingComponent,
    }),
    ModuleLoadingComponent,
  },
  data: function () {
    return {
      MindMapColors: {
        background: { h: 0, s: 0, l: 100, a: 0.5 },
        theme: { h: 358, s: 97, l: 67, a: 1 },
        theme_light: { h: 0, s: 100, l: 84, a: 1 },
      },
      window_size: {
        width: 0,
        height: 0,
      },
      entityLimit: 20,
      APP_MODE: process.env.VUE_APP_MODE,
      prerender: window.__PRERENDER_INJECTED
        ? window.__PRERENDER_INJECTED.prerendered
        : false,
    };
  },
  computed: {
    mindMapContainerStyle: function () {
      return {
        height: "100%",
        width: "100%",
        marginTop: "0px",
        marginLeft: "0px",
        boxSizing: "border-box",
        borderRadius:
          this.APP_MODE === "development"
            ? "15px 15px 10px 10px"
            : "15px 15px 10px 10px",
        padding: this.APP_MODE === "development" ? "20px" : "0px",
      };
    },
  },
  methods: {
    handleResize() {
      this.$store.dispatch("update_window_size");
    },
  },
  created: function () {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    //console.log({ __PRERENDER_INJECTED: window.__PRERENDER_INJECTED });
    if (window.__PRERENDER_INJECTED)
      setTimeout(() => {
        document.dispatchEvent(new Event("app-rendered"));
      }, 500);
  },
  destroyed: function () {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  font-size: 16px;
}
body {
  margin: 0px;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  overflow-x: hidden;
}
</style>
