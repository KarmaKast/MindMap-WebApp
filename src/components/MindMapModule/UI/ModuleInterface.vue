<template>
  <div id="mind-map-module-interface-container">
    <layout-manager
      v-if="layoutManagerLoaded"
      id="mind-map-module-interface"
      :gridElements="gridElements"
      axis="y"
    >
      <template v-slot:[gridElements[0].name]
        ><header-bar class="header-bar" @showAboutPage="showAboutPage"
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
    <div id="mindmap-about-section-container" v-if="aboutSectionLoaded">
      <AboutSection :aboutSectionToggle="aboutSectionToggle" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "../js/TouchCompatibleHover";
export default {
  name: "ModuleInterface",
  components: {
    StatusBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-status-bar" */ "./StatusBar"),
    HeaderBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-header-bar" */ "./HeaderBar"),
    ToolsBar: () =>
      import(/* webpackChunkName: "chunk-mindmap-tools-bar" */ "./ToolsBar"),
    AboutSection: () =>
      import(
        /* webpackChunkName: "chunk-mindmap-about-section" */ "./AboutSection"
      ),

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
      layoutManagerLoaded: false,
      aboutSectionLoaded: false,
      aboutSectionToggle: true,
    };
  },
  computed: {
    classListHandlerLoaded() {
      return this.$store.state.classListHandlerLoaded;
    },
  },
  watch: {},
  methods: {
    toggleTheme() {
      this.$emit("toggleTheme");
    },
    showAboutPage(event) {
      if (!this.aboutSectionLoaded) this.aboutSectionLoaded = true;
      this.aboutSectionToggle = true;
      this.$nextTick(() => {
        this.aboutSectionToggle = false;
      });
    },
  },
  mounted() {
    import(
      /* webpackChunkName: "chunk-vue-layout-manager" */ "vue-layout-manager"
    ).then(({ LayoutManager }) => {
      Vue.component("LayoutManager", LayoutManager);
      this.layoutManagerLoaded = true;
    });
  },
};
</script>

<style scoped>
#mind-map-module-interface-container {
  height: 100%;
  width: 100%;
  border-radius: inherit;
}
#mind-map-module-interface {
  padding: 0px;
}
.header-bar,
.status-bar {
  border-radius: 999px;
}
#mindmap-about-section-container {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  border-radius: inherit;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
