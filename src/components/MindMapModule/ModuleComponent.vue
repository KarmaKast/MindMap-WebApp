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
};
</script>

<style scoped>
.mind-map-module.light-theme {
  --color-primary: rgb(255, 53, 93);
  --color-primary-darker1: rgb(240, 64, 99);
  --color-primary-darker2: rgb(240, 22, 65);
  --color-primary-lighter1: rgb(245, 126, 148);
  --color-primary-lighter3: hsl(349, 100%, 89%);
  --color-primary-lighter5: rgb(255, 233, 237);
  --color-bg-primary: hsl(0, 0%, 97%);
  --color-bg-lighter1: hsl(0, 0%, 98%);
  --color-bg-darker1: hsl(0, 0%, 85%);
  --color-text: white;
}
.mind-map-module.dark-theme {
  --color-primary: rgb(151, 1, 31);
  --color-primary-darker1: rgb(129, 5, 30);
  --color-primary-darker2: rgb(121, 1, 25);
  --color-primary-lighter1: rgb(87, 87, 87);
  --color-primary-lighter3: rgb(87, 87, 87);
  --color-primary-lighter5: rgb(87, 87, 87);
  --color-bg-primary: rgb(44, 44, 44);
  --color-bg-lighter1: rgb(44, 44, 44);
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
}
</style>
