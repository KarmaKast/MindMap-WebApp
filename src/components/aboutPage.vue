<template>
  <div id="aboutPage" v-show="showPage" :style="containerStyle">
    <div id="aboutSection" :style="aboutSectionStyle">
      <button
        id="closePageBttn"
        :style="closeButtonStyle"
        @click.left="closePage"
        @mouseover="isHovered = true"
        @mouseout="isHovered = false"
      >
        <img
          src="../assets/ic_chevron_left_48px.svg"
          :style="{ height: '100%', width: '100%', borderRadius: 'inherit' }"
        />
      </button>

      <p :style="pStyle">
        <span :style="{ fontSize: '20px' }"
          ><a
            href="https://github.com/KarmaKast/MindMap-WebApp"
            :style="{ pointerEvents: 'initial' }"
            target="_blank"
            >{{ appName }}</a
          >
          - v{{ version }}</span
        >
        <br />
        <br />
        A Mindmap web app that uses
        <a
          href="https://github.com/KarmaKast/morph-dbms-core"
          :style="{ pointerEvents: 'initial' }"
          target="_blank"
          >morph-dbms-core</a
        >
        . Currently everything is in prototyping state. <br />
        <br />
        <br />
        - setup
        <a
          href="https://github.com/KarmaKast/entityAPI/"
          :style="{ pointerEvents: 'initial' }"
          target="_blank"
          >entityAPI</a
        >
        (runs at localhost:3000)
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutPage",
  props: {
    colors: Object,
    colorsProcessed: Object,
    showPage: Boolean,
  },
  data: function () {
    return {
      isHovered: false,
      version: process.env.VUE_APP_VERSION,
      appName: process.env.VUE_APP_NAME,
    };
  },
  computed: {
    containerStyle: function () {
      return {
        position: "absolute",
        height: "100%",
        width: "100%",
        background: CSS.supports("backdrop-filter: blur(3px)")
          ? `hsla(0, 0%, ${this.colors["background"].l}%, 0.19)`
          : `hsla(0, 0%,  ${this.colors["background"].l}%, 1)`,
        backdropFilter: "blur(6px)",
        display: "grid",
        placeItems: "center",

        pointerEvents: "all",
      };
    },
    aboutSectionStyle: function () {
      return {
        background: `${this.colorsProcessed["background"]}`,
        borderRadius: "28px",
        padding: "15px",
        height: "fit-content",
        maxWidth: "400px",
        minWidth: "280px",
        width: "20%",
        border: `1px dashed ${this.colorsProcessed["theme"]}`,
        boxSizing: "border-box",

        display: "grid",
        gridTemplateRows: "30px auto",
        gridTemplateColumns: "30px auto",
        gridRowGap: "10px",
      };
    },
    closeButtonStyle: function () {
      return {
        background: this.isHovered
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0.4)",
        border: `0.5px dashed ${this.colorsProcessed["theme"]}`,
        boxShadow: "0px 0px 2px 1px hsla(0, 0%, 0%, 0.1882)",
        boxSizing: "border-box",
        borderRadius: "100%",
        gridArea: "1 / 1 / 2 / 2",
        padding: "0px",
        display: "grid",
        placeItems: "center",
        outline: "none",
        cursor: "pointer",
      };
    },
    pStyle: function () {
      return {
        height: "auto",
        width: "auto",
        gridArea: "2 / 1 / 3 / 3",
        pointerEvents: "none",
        boxSizing: "border-box",
        padding: "20px 20px",
        margin: "0px",
        textAlign: "left",
        color: `${this.colorsProcessed["text"]}`,
      };
    },
  },
  watch: {},
  methods: {
    onEscapeKeyUp(event) {
      //console.log(event);
      if (event.key === "Escape") {
        this.closePage();
      }
    },
    closePage() {
      this.$emit("closePage");
    },
  },
  mounted() {
    window.addEventListener("keyup", this.onEscapeKeyUp);
  },
  beforeDestroy() {
    window.removeEventListener("keyup", this.onEscapeKeyUp);
  },
};
</script>
<style lang="sass" scoped></style>
