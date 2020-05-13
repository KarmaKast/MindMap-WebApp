<template>
  <div class="relationLabelContainer" :style="relationLabelContainerStyle">
    <p class="relationLabel">{{ label }}</p>
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
  computed: {
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
  },
};
</script>

<style scoped>
.relationLabelContainer {
  position: absolute;
  min-width: 45px;
  max-width: 80px;
  height: 12px;
  display: grid;

  border-radius: 20px;
  padding: 5px;

  color: white;
}
.relationLabel {
  margin: 0px;

  text-overflow: ellipsis;
}</style
>>
