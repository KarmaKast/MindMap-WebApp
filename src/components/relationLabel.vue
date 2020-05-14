<template>
  <div class="relationLabelContainer" :style="relationLabelContainerStyle">
    <button
      class="direction"
      v-touch:tap="emitSwitchDirection"
      :style="directionStyle"
    >
      {{ direction === "-&gt;" ? "&lt;-" : "-&gt;" }}
    </button>
    <p
      class="relationLabel"
      v-touch:tap="toggleSelectedState"
      :style="relationLabelStyle"
    >
      {{ label }}
    </p>
    <button
      class="removeRelationClaimBttn"
      v-touch:tap="emitremoveRelationClaim"
      :style="removeRelationClaimBttnStyle"
    >
      X
    </button>
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
    direction: String,
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
        gridTemplateColumns: "20px auto 20px",
      });
    },
    relationLabelStyle: function () {
      return {
        transform: `rotate(${this.stylePart.__angle}deg)`,
        color: this.colorsProcessed["text"],
      };
    },
    removeRelationClaimBttnStyle: function () {
      return {
        background: this.colorsProcessed["backgroundShade2"],
        color: this.colorsProcessed["text"],
      };
    },
    directionStyle: function () {
      return {
        background: this.colorsProcessed["backgroundShade2"],
        color: this.colorsProcessed["text"],
      };
    },
  },
  methods: {
    emitremoveRelationClaim() {
      this.$emit("emitremoveRelationClaim");
    },
    emitSwitchDirection() {
      this.$emit("emitSwitchDirection");
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
  display: grid;

  border-radius: 20px;
  box-sizing: border-box;
  padding: 2px;

  user-select: none;
}
.relationLabel {
  margin: 0px;
  min-width: 45px;
  max-width: 80px;
  text-overflow: ellipsis;
  padding: 2px;

  font-size: 80%;
  box-sizing: border-box;
  cursor: pointer;
}
.removeRelationClaimBttn {
  padding: 0px;
  border: 1px solid rgb(139, 139, 139);
  border-radius: 50%;
  cursor: pointer;
}
.direction {
  padding: 0px;
  border: 1px solid rgb(139, 139, 139);
  border-radius: 50%;
  cursor: pointer;
}
</style>
