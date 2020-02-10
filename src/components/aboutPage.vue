<template>
  <div v-if="showPage" :style="containerStyle">
    <div :style="aboutSectionStyle">
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
        A Mindmap web app that uses <a href="" :style="{ pointerEvents: 'initial' }" target="_blank">nodeLib</a> graph DBMS library.
        Currently everything is in prototyping state. <br />
        <br />
        <a
          href="https://github.com/KarmaKast/MindMap-WebApp/tree/develop"
          :style="{ pointerEvents: 'initial' }"
          target="_blank"
        >
          Github Repo
        </a>
        <br />
        Version : {{ version }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutPage",
  props: {
    showPage: Boolean
  },
  data: function() {
    return {
      isHovered: false,
      version: "0.1.0"
    };
  },
  computed: {
    containerStyle: function() {
      return {
        height: "100%",
        width: "100%",
        background: "hsla(0, 0%, 0%, 0.19)",
        backdropFilter: "blur(6px)",
        display: "grid",
        placeItems: "center",

        pointerEvents: "all"
      };
    },
    aboutSectionStyle: function() {
      return {
        background: "rgba(255, 255, 255, 0.5)",
        borderRadius: "28px",
        padding: "15px",
        height: "fit-content",
        width: "fit-content",
        border: "1px dashed hsl(358, 96%, 67%)",
        boxSizing: "border-box",

        display: "grid",
        gridTemplateRows: "30px auto",
        gridTemplateColumns: "30px auto",
        gridRowGap: "10px"
      };
    },
    closeButtonStyle: function() {
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
        outline: "none"
      };
    },
    pStyle: function() {
      return {
        height: "auto",
        width: "250px",
        gridArea: "2 / 1 / 3 / 3",
        pointerEvents: "none",
        boxSizing: "border-box",
        padding: "20px 20px",
        margin: "0px",
        textAlign: "left"
      };
    }
  },
  watch: {
    showPage() {
      if (this.showPage) {
        window.addEventListener("keyup", this.onEscapeKeyUp);
      } else {
        window.removeEventListener("keyup", this.onEscapeKeyUp);
      }
    }
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
    }
  }
};
</script>
<style lang="sass" scoped></style>
