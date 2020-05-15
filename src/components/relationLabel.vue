<template>
  <div class="relationLabelContainer" :style="relationLabelContainerStyle">
    <p class="relationLabel" v-touch:tap="toggleSelectedState">
      {{ labelFinal }}
    </p>
    <div class="labelInputContainer">
      <input
        class="labelInput"
        type="text"
        v-model="labelFinal"
        :style="labelInputStyle"
      />
    </div>
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
import axios from "axios";
import qs from "querystring";

export default {
  name: "relationLabel",
  props: {
    ID: String,
    stylePart: Object,
    apiUrl: String,
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
    labelInputStyle: function () {
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
    labelFinal() {
      // todo update rel label to api
      axios({
        method: "POST",
        baseURL: this.apiUrl,
        url: `/collection/updateRelation/`,
        params: {
          relationID: this.ID,
        },
        paramsSerializer: qs.stringify,
        data: qs.stringify({
          relationLabel: this.labelFinal,
        }),
      });
    },
  },
};
</script>

<style scoped>
:read-only {
  --padding: 4px;
  --size: calc(1em + calc(var(--padding) * 2));
}
.relationLabelContainer {
  position: absolute;
  display: grid;
  grid-template-columns: calc(var(--size) - 2px) max-content calc(
      var(--size) - 2px
    );
  column-gap: 2px;

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
  height: var(--size);
  padding: var(--padding);

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
.labelInputContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-sizing: border-box;
  pointer-events: none;
}
.labelInput {
  display: inline-block;
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 0px;
  margin-left: calc(var(--size) + 4px);
  margin-right: calc(var(--size) + 4px);
  width: calc(100% - calc(calc(var(--size) + 4px) * 2));
  height: 100%;

  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  pointer-events: all;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 80%;
  box-sizing: border-box;
  background: none;
}
</style>
