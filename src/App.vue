<template>
  <div id="app" :style="this.appStyle">
    <div
      id="mindMapContainer"
      :style="{
        height: '100%',
        width: '100%',
        marginTop: '0px',
        marginLeft: '0px',
      }"
    >
      <MindMapModule :colors="this.MindMapColors" />
    </div>
  </div>
</template>

<script>
import MindMapModule from "./components/MindMapModule.vue";

export default {
  name: "app",
  components: {
    MindMapModule
  },
  computed: {
    MindMapColors: function() {
      return {
        background: [0, 0, 100, 0.5],
        theme: [358, 97, 67, 1]
      };
    },
    appStyle: function() {
      return {
        height: `${this.$store.state.window_height}px`,
        width: `${this.$store.state.window_width}px`,
        position: "absolute",
        top: "0px",
        left: "0px"
      };
    }
  },
  methods: {
    handleResize() {
      this.$store.commit("update_window_width", window.innerWidth);
      this.$store.commit("update_window_height", window.innerHeight);
    }
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);
  },
  destroyed: function() {
    window.removeEventListener("resize", this.handleResize);
  }
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
}
</style>
