<template>
  <div class="relationLabelContainer" :style="relationLabelContainerStyle">
    <p class="relationLabel" v-touch:tap="toggleSelectedState">
      {{ label }}
    </p>
    <button
      class="removeRelationClaimBttn"
      v-touch:tap="emitremoveRelationClaim"
    ></button>
  </div>
</template>

<script>
export default {
  name: "relationLabel",
  props: {
    stylePart: Object,
    colors: Object,
    colorsProcessed: Object,
    relWireColor: String,
    label: String,
  },
  data: function () {
    return {
      labelSelected: false,
    };
  },
  computed: {
    canvasClicked: function () {
      //return false;
      return this.$store.state.canvasClicked;
    },
    relationLabelContainerStyle: function () {
      return Object.assign({}, this.stylePart, {
        //
        border: `1px solid ${this.relWireColor}`,
        backgroundColor: `hsla(${this.colors["background"].h},${
          this.colors["background"].s
        }%,${this.colors["background"].l}%,${
          CSS.supports("backdrop-filter", "blur(6px)") ? 0.5 : 1
        })`,
        backdropFilter: "blur(6px)",
        gridTemplateColumns: "auto 20px",
      });
    },
  },
  methods: {
    emitremoveRelationClaim() {
      this.$emit("emitremoveRelationClaim");
    },
    toggleSelectedState() {
      this.labelSelected = !this.labelSelected;
    },
  },
  watch: {
    canvasClicked() {
      if (this.labelSelected) this.labelSelected = false;
    },
  },
};
</script>

<style scoped>
.relationLabelContainer {
  position: absolute;
  max-width: 80px;
  display: grid;

  border-radius: 20px;
  box-sizing: border-box;
  padding: 2px;

  color: white;
}
.relationLabel {
  margin: 0px;
  min-width: 45px;
  text-overflow: ellipsis;
  padding: 2px;
  margin-left: 4px;
  font-size: 80%;
  box-sizing: border-box;
  cursor: pointer;
}
.removeRelationClaimBttn {
  border: 1px solid rgb(139, 139, 139);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.486);
  cursor: pointer;
}
</style>
