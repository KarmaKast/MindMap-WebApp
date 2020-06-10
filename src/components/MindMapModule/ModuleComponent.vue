<template>
  <div :class="['mind-map-module', `${theme}-theme`]">
    <canvas-component />
    <module-interface @toggleTheme="toggleTheme" />
  </div>
</template>

<script>
export default {
  name: "ModuleComponent",
  data() {
    return {
      theme: "light",
      apiUrl: "",
    };
  },
  components: {
    CanvasComponent: () =>
      import(
        /* webpackChunkName: "chunk-canvas-component" */ "./canvas/CanvasComponent"
      ),
    ModuleInterface: () =>
      import(
        /* webpackChunkName: "chunk-module-interface" */ "./UI/ModuleInterface"
      ),
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
    },
  },
  watch: {
    theme() {
      localStorage.setItem("theme", this.theme);
    },
  },
  mounted() {
    const apiUrl = localStorage.getItem("apiUrl");
    if (apiUrl) {
      this.apiUrl = apiUrl;
      this.$store.commit("update_apiUrl", apiUrl);
      //this.apiValidity = true;
    }
    const theme = localStorage.getItem("theme");
    if (theme) {
      this.theme = theme;
    } else {
      localStorage.setItem("theme", this.theme);
    }
  },
};
</script>

<style scoped>
.mind-map-module.light-theme {
  --color-primary: hsl(348, 100%, 60%);
  --color-primary-darker1: hsl(348, 85%, 60%);
  --color-primary-darker2: hsl(348, 88%, 51%);
  --color-primary-lighter1: hsl(349, 86%, 73%);
  --color-primary-lighter3: hsl(349, 100%, 89%);
  --color-primary-lighter5: hsl(349, 100%, 96%);
  --color-bg-primary: hsl(0, 0%, 97%);
  --color-bg-lighter1: hsl(0, 0%, 98%);
  --color-bg-darker1: hsl(0, 0%, 85%);
  --color-text: white;
}
.mind-map-module.dark-theme {
  --color-primary: hsl(348, 75%, 50%);
  --color-primary-darker1: hsl(348, 93%, 26%);
  --color-primary-darker2: hsl(348, 98%, 24%);
  --color-primary-lighter1: hsl(0, 0%, 34%);
  --color-primary-lighter3: hsl(0, 0%, 34%);
  --color-primary-lighter5: hsl(0, 0%, 34%);
  --color-bg-primary: hsl(0, 0%, 17%);
  --color-bg-lighter1: hsl(0, 0%, 17%);
  --color-text: white;
}
.mind-map-module {
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: inherit;
  position: relative;
  touch-action: none;
  border: 1px solid var(--color-primary);
  background-color: var(--color-bg-primary);
  box-sizing: border-box;
  padding: 4px;
}
</style>
