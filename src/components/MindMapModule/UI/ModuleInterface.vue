<template>
  <layout-handler id="mind-map--module-interface" :gridElements="gridElements">
    <header-bar class="header-bar" :slot="gridElements[0].name" />
    <status-bar :slot="gridElements[1].name" />
  </layout-handler>
</template>

<script>
export default {
  name: "ModuleInterface",
  components: {
    StatusBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-status-bar" */ "./StatusBar"),
    HeaderBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-header-bar" */ "./HeaderBar"),
    LayoutHandler: () =>
      import(
        /* webpackChunkName: "chunk-mindmap-layout-handler" */ "./helpers/LayoutHandler"
      ),
  },
  data() {
    return {
      gridElements: [
        {
          name: "HeaderBar",
          config: { y: 1 },
        },
        {
          name: "StatusBar",
          config: { y: -1 },
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
