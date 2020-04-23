<template>
  <div id="aboutPage" v-if="showPage" :style="containerStyle">
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
        <span :style="{ fontSize: '20px' }">MapThyMind - {{ version }}</span>
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
        Setting up: <br />
        - Download your release from
        <a
          href="https://github.com/KarmaKast/MindMap-WebApp"
          :style="{ pointerEvents: 'initial' }"
          target="_blank"
        >
          MapThyMind Github Repo
        </a>
        <br />
        - setup
        <a
          href="https://github.com/KarmaKast/nodeAPI/"
          :style="{ pointerEvents: 'initial' }"
          target="_blank"
          >nodeAPI</a
        >
        (runs at localhost:3000)
      </p>
    </div>
  </div>
</template>
<script>
import { version } from "../../package.json";

export default {
  name: "aboutPage",
  props: {
    showPage: Boolean,
  },
  data: function () {
    return {
      isHovered: false,
      version: version,
    };
  },
  computed: {
    containerStyle: function () {
      return {
        height: "100%",
        width: "100%",
        background: "hsla(0, 0%, 0%, 0.19)",
        backdropFilter: "blur(6px)",
        display: "grid",
        placeItems: "center",

        pointerEvents: "all",
      };
    },
    aboutSectionStyle: function () {
      return {
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "28px",
        padding: "15px",
        height: "fit-content",
        maxWidth: "400px",
        minWidth: "280px",
        width: "20%",
        border: "1px dashed hsl(358, 96%, 67%)",
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
        border: "0.5px dashed hsl(358, 96%, 67%)",
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
      };
    },
  },
  watch: {
    showPage() {
      if (this.showPage) {
        window.addEventListener("keyup", this.onEscapeKeyUp);
      } else {
        window.removeEventListener("keyup", this.onEscapeKeyUp);
      }
    },
  },
  methods: {
    onEscapeKeyUp(event) {
      console.log(event);
      if (event.key === "Escape") {
        this.closePage();
      }
    },
    closePage() {
      this.$emit("closePage", false);
    },
  },
};
</script>
<style lang="sass" scoped></style>
