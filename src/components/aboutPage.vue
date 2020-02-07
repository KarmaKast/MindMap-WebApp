<template>
  <div
    v-if="showPage"
    :style="containerStyle"
    @keydown.esc="this.showPage = false"
  >
    <div :style="aboutSectionStyle"></div>
  </div>
</template>
<script>
export default {
  name: "aboutPage",
  props: {
    showPage: Boolean
  },
  data: function() {
    return {};
  },
  computed: {
    containerStyle: function() {
      return {
        display: "grid",
        height: "100%",
        width: "100%",
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",

        pointerEvents: "all"
      };
    },
    aboutSectionStyle: function() {
      return {
        background: "rgba(255, 255, 255, 0.5)"
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
        this.$emit("closePage", false);
      }
    }
  }
};
</script>
<style lang="sass" scoped></style>
