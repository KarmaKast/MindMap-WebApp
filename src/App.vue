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
      <mind-map-module :entityLimit="entityLimit" />
    </div>
  </div>
</template>

<script>
import MindMapModule from "./components/MindMapModule.vue";

export default {
  name: "app",
  metaInfo: {
    title: process.env.VUE_APP_NAME + " Prototype",
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
    ],
  },
  components: {
    MindMapModule,
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
          this.APP_MODE === "development" ? "15px 15px 10px 10px" : "unset",
        padding: this.APP_MODE === "development" ? "20px" : "0px",
      };
    },
  },
  methods: {
    handleResize() {
      this.$store.dispatch("update_window_size");
      //this.$store.commit("update_window_width");
      //this.$store.commit("update_window_height");
    },
  },
  created: function () {
    window.addEventListener("resize", this.handleResize);
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
