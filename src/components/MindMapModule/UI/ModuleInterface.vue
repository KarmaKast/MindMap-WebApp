<template>
  <layout-manager
    v-if="loaded"
    id="mind-map--module-interface"
    :gridElements="gridElements"
    axis="y"
  >
    <template v-slot:[gridElements[0].name]
      ><header-bar class="header-bar"
    /></template>
    <template v-slot:[gridElements[1].name]
      ><status-bar
        class="status-bar"
        :apiUrl="apiUrl"
        :apiValidity="apiValidity"
        @toggleTheme="toggleTheme"
    /></template>
    <template v-slot:[gridElements[2].name]
      ><layout-manager
        class="mid-UI-section"
        :gridElements="gridElementsMid"
        axis="x"
        ><template v-slot:[gridElementsMid[0].name]
          ><tools-bar /></template></layout-manager
    ></template>
  </layout-manager>
</template>

<script>
import Vue from "vue";
export default {
  name: "ModuleInterface",
  components: {
    StatusBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-status-bar" */ "./StatusBar"),
    HeaderBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-header-bar" */ "./HeaderBar"),
    ToolsBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-tools-bar" */ "./ToolsBar"),

    //LayoutHandler: () =>
    //  import(
    //    /* webpackChunkName: "chunk-mindmap-layout-handler" */ "./helpers/LayoutHandler"
    //  ),
    //LayoutHandler: () =>
    //  import(
    //    /* webpackChunkName: "chunk-mindmap-layout-handler" */ "vue-layout-manager"
    //  ).then(({ LayoutManager }) => LayoutManager),
  },
  props: {
    apiUrl: String,
    apiValidity: Boolean,
  },
  data() {
    return {
      gridElements: [
        {
          name: "HeaderBar",
          position: 1,
        },
        {
          name: "StatusBar",
          position: -1,
        },
        {
          name: "mindContent",
          position: 3,
        },
      ],
      gridElementsMid: [
        {
          name: "ToolsBar",
          position: 1,
        },
      ],
      loaded: false,
    };
  },
  computed: {},
  methods: {
    toggleTheme: function () {
      this.$emit("toggleTheme");
    },
  },
  mounted() {
    import(
      /* webpackChunkName: "chunk-vue-layout-manager" */ "vue-layout-manager"
    ).then(({ LayoutManager }) => {
      Vue.component("LayoutManager", LayoutManager);
      this.loaded = true;
    });
  },
};
</script>

<style scoped>
#mind-map--module-interface {
  padding: 0px;
}
.header-bar,
.status-bar {
  border-radius: 999px;
}
</style>
