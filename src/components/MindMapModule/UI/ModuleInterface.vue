<template>
  <layout-handler
    id="mind-map--module-interface"
    :gridElements="gridElements"
    axis="y"
  >
    <template v-slot:[gridElements[0].name]
      ><header-bar class="header-bar"
    /></template>
    <template v-slot:[gridElements[1].name]><status-bar /></template>
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
          y: 1,
        },
        {
          name: "StatusBar",
          y: -1,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
