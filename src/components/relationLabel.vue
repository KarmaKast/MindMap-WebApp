<template>
  <div class="relationLabelContainer" :style="relationLabelContainerStyle">
    <p
      class="relationLabel"
      v-touch:tap="toggleSelectedState"
      :style="relationLabelStyle"
      v-if="false"
    >
      {{ labelFinal }}
    </p>
    <input class="labelInput" v-model="labelFinal" />
    <button
      class="direction"
      v-touch:tap="emitSwitchDirection"
      :style="directionStyle"
    >
      {{ direction ? (direction === "-&gt;" ? "&lt;-" : "-&gt;") : "!" }}
    </button>

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
      labelFinal: this.label,
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
      });
    },
    relationLabelStyle: function () {
      return {
        transform: `rotate(${this.stylePart.__angle}deg)`,
        //color: this.colorsProcessed["text"],
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
    labelFinal() {
      // todo update rel label to api
    },
  },
};
</script>

<style scoped>
.relationLabelContainer {
  position: absolute;
  display: grid;
  grid-template-columns: calc(1em + 12px - 2px) max-content calc(
      1em + 12px - 2px
    );

  border-radius: 20px;
  box-sizing: border-box;
  padding: 2px;
  transform-origin: center;

  user-select: none;
}
.relationLabel {
  order: 2;
  display: inline-block;
  margin: 0px;
  min-width: 40px;
  max-width: 90px;
  height: calc(1em + 12px);
  padding: 6px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(240, 248, 255, 0);

  font-size: 80%;
  box-sizing: border-box;
  cursor: pointer;
}
.relationLabel:hover {
  overflow: visible;
}
.removeRelationClaimBttn {
  order: 3;
  padding: 0px;
  box-sizing: border-box;
  border: 1px solid rgb(139, 139, 139);
  border-radius: 50%;
  cursor: pointer;
}
.removeRelationClaimBttn:hover {
  border: 1px solid rgb(255, 64, 64);
}
.direction {
  order: 1;
  padding: 0px;
  box-sizing: border-box;
  border: 1px solid rgb(139, 139, 139);
  border-radius: 50%;
  cursor: pointer;
}
.direction:hover {
  border: 1px solid rgb(255, 64, 64);
}

.labelInput {
  order: 2;
  position: relative;
  background: none;
  min-width: 40px;
  max-width: 90px;
  height: calc(1em + 12px);
  padding: 6px;

  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  color: rgb(255, 255, 255);
  pointer-events: all;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.labelInput:hover {
  overflow: visible;
}
</style>
