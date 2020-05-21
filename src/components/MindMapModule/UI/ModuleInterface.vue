<template>
  <layout-handler
    id="mind-map--module-interface"
    :gridElements="gridElements"
    axis="y"
  >
    <template v-slot:[gridElements[0].name]
      ><header-bar class="header-bar"
    /></template>
    <template v-slot:[gridElements[1].name]
      ><status-bar class="status-bar"
    /></template>
    <template v-slot:[gridElements[2].name]
      ><div class="mid-UI-section"><tools-bar /></div
    ></template>
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
    ToolsBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-tools-bar" */ "./ToolsBar"),

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
        {
          name: "mindContent",
          y: 3,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
#mind-map--module-interface {
  padding: 4px;
}
.header-bar,
.status-bar,
.mid-UI-section {
  border-radius: 15px;
}
</style>
