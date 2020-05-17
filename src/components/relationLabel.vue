<template>
  <div class="relationLabelContainer" :style="relationLabelContainerStyle">
    <p class="relationLabel" v-touch:tap="toggleSelectedState">
      {{ labelFinal }}
    </p>
    <div class="labelInputContainer">
      <input
        :class="labelInputClassesFinal"
        type="text"
        v-model="labelFinal"
        :style="labelInputStyle"
        v-touch:tap="labelInputTapActions"
      />
    </div>
    <button
      :class="removeRelationClaimBttnClassesFinal"
      v-touch:tap="emitremoveRelationClaim"
      :style="removeRelationClaimBttnStyle"
    >
      X
    </button>
    <button
      class="direction"
      v-touch:tap="emitSwitchDirection"
      :style="directionStyle"
    >
      {{ direction ? (direction === "-&gt;" ? "&lt;-" : "-&gt;") : "!" }}
    </button>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import qs from "querystring";

export default {
  name: "relationLabel",
  props: {
    ID: String,
    stylePart: Object,
    apiUrl: String,
    colors: Object,
    entityColor: Object,
    colorsProcessed: Object,
    relWireColor: String,
    label: String,
    direction: String,
    transforming: Boolean,
  },
  data: function () {
    return {
      labelSelected: false,
      labelFinal: this.label,
      removeRelationClaimBttnClasses: ["removeRelationClaimBttn"],
      labelInputClasses: ["labelInput"],
    };
  },
  computed: {
    removeRelationClaimBttnClassesFinal: function () {
      let res = "";
      this.removeRelationClaimBttnClasses.forEach((value) => {
        res += value + " ";
      });
      return res;
    },
    labelInputClassesFinal: function () {
      let res = "";
      this.labelInputClasses.forEach((value) => {
        res += value + " ";
      });
      return res;
    },

    canvasClicked: function () {
      //return false;
      return this.$store.state.canvasClicked;
    },
    relationLabelContainerStyle: function () {
      return Object.assign({}, this.stylePart, {
        //
        border: `1px solid ${this.relWireColor}`,
        backgroundColor: `hsla(${this.colors["background"].h},${this.colors["background"].s}%,${this.colors["background"].l}%,1
        )`,
      });
    },
    labelInputStyle: function () {
      return {
        transform: `rotate(${this.stylePart.__angle}deg)`,
        //willChange: this.transforming ? "transform" : "unset",
        pointerEvents: this.labelSelected ? "all" : "none",
        userSelect: "none",
        color: `hsla(${this.entityColor.h},${this.entityColor.s}%, ${
          this.entityColor.l
        }%, ${1})`,
      };
    },
    removeRelationClaimBttnStyle: function () {
      return {
        backgroundColor: `hsla(${this.colors["backgroundShade2"].h},${this.colors["backgroundShade2"].s}%,${this.colors["backgroundShade2"].l}%,1
        )`,
        color: `hsla(${this.entityColor.h},${this.entityColor.s}%, ${
          this.entityColor.l
        }%, ${1})`,
      };
    },
    directionStyle: function () {
      return {
        backgroundColor: `hsla(${this.colors["backgroundShade2"].h},${this.colors["backgroundShade2"].s}%,${this.colors["backgroundShade2"].l}%,1)`,
        color: `hsla(${this.entityColor.h},${this.entityColor.s}%, ${
          this.entityColor.l
        }%, ${1})`,
      };
    },
  },
  methods: {
    emitremoveRelationClaim() {
      this.$emit("emitremoveRelationClaim");
      alert("deleting relation claim not implemented yet");
    },
    emitSwitchDirection() {
      this.$emit("emitSwitchDirection");
      alert("switching relation direction not implemented yet");
    },
    toggleSelectedState() {
      this.labelSelected = !this.labelSelected;
    },
    labelInputTapActions() {
      console.log("I should be called on input click");
      console.log(this.removeRelationClaimBttnClasses.includes("show"));
      if (!this.removeRelationClaimBttnClasses.includes("show"))
        this.removeRelationClaimBttnClasses.push("show");
      else {
        Vue.delete(
          this.removeRelationClaimBttnClasses,
          this.removeRelationClaimBttnClasses.indexOf("show")
        );
      }
      if (!this.labelInputClasses.includes("resized"))
        this.labelInputClasses.push("resized");
      else {
        Vue.delete(
          this.labelInputClasses,
          this.labelInputClasses.indexOf("resized")
        );
      }
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
    label() {
      if (this.label !== this.labelFinal) this.labelFinal = this.label;
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
  left: 0px;
  top: 0px;
  display: grid;
  grid-template-columns: calc(var(--size) - 2px) max-content auto;
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
  user-select: none;

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
  display: none;
  width: 0px;
  order: 3;
  padding: 0px;
  box-sizing: border-box;
  border: 1px solid rgb(139, 139, 139);
  border-radius: 50%;
  cursor: pointer;
}
.removeRelationClaimBttn:hover {
  border: 1px solid rgb(255, 64, 64);
  display: block;
  width: calc(var(--size));
}
.removeRelationClaimBttn.show {
  display: block;
  width: calc(var(--size));
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
  left: 0px;
  top: 0px;
  margin: 0px;
  margin-left: calc(var(--size) + 4px);
  width: calc(100% - calc(calc(var(--size) + 4px) * 1));
  height: 100%;
  padding: var(--padding);
  user-select: none;

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
.labelInput.resized {
  width: calc(100% - calc(calc(var(--size) + 4px) * 2));
}
</style>
