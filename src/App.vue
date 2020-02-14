<template>
  <div id="app" :style="this.appStyle">
    <div
      :style="{
        height: '400px',
        width: '100%',
        backgroundColor: 'blue'
      }"
    ></div>
    <div id="mindMapContainer" :style="mindMapContainerStyle">
      <MindMapModule :colors="MindMapColors" :nodeLimit="20" />
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
  data: function() {
    return {
      mindMapContainerStyle: {
        height: "100%",
        width: "100%",
        marginTop: "0px",
        marginLeft: "0px",
        boxSizing: "border-box",
        padding: "20px"
      },
      MindMapColors: {
        background: [0, 0, 100, 0.5],
        theme: [358, 97, 67, 1],
        theme_light: [0, 100, 84, 1]
      },
      window_size: {
        width: 0,
        height: 0
      }
    };
  },
  computed: {
    appStyle: function() {
      return {
        height: `${this.window_size.height}px`,
        width: `${this.window_size.width}px`,
        position: "absolute",
        top: "0px",
        left: "0px",
        overflowX: "hidden"
      };
    }
  },
  methods: {
    handleResize() {
      this.$store.dispatch("update_window_size");
      //this.$store.commit("update_window_width");
      //this.$store.commit("update_window_height");
    }
  },
  created: function() {
    window.addEventListener("resize", this.handleResize);

    this.window_size.width = this.$store.state.window_width;
    this.window_size.height = this.$store.state.window_height;

    this.$store.subscribeAction({
      after: (action, state) => {
        if ("update_window_size" === action.type) {
          this.window_size.width = state.window_width;
          this.window_size.height = state.window_height;
        }
      }
    });
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
