<template>
  <div id="app">
    <MindMap
      :height="this.MindMapHeight"
      :width="this.MindMapWidth"
      :locationVert="this.MindMapLocationVert"
      :colors="this.MindMapColors"
    />
  </div>
</template>

<script>
import MindMap from "./components/MindMap.vue";

export default {
  name: "app",
  components: {
    MindMap
  },
  computed: {
    MindMapHeight: function() {
      // 70% of window Height
      //return window.innerHeight * 0.7;
      return this.$store.state.window_height * 0.7;
    },
    MindMapWidth: function() {
      // 70% of window Height
      return this.$store.state.window_width * 1;
    },
    MindMapLocationVert: function() {
      return { marginTop: 100 };
    },
    MindMapLocationHor: function() {
      return { left: 0 };
    },
    MindMapColors: function() {
      return {
        background: "rgb(233,233,233)",
        theme: "rgb(255,103,103)"
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
