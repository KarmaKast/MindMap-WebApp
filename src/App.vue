<template>
  <div id="app" :style="this.appStyle">
    <div id="mindMapContainer" style="height:70%; width:100%;">
      <MindMapModule
        :locationVert="this.MindMapLocationVert"
        :colors="this.MindMapColors"
        :height="this.MindMapHeight"
        :width="this.MindMapWidth"
      />
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
        background: [0, 0, 89, 1],
        theme: [0, 100, 70, 1]
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
