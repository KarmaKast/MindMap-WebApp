<template>
  <div class="relationLabel" :style="relationLabelStyle">
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  name: "relationLabel",
  props: {
    stylePart: Object,
    colors: Object,
    colorsProcessed: Object,
  },
  computed: {
    relationLabelStyle: function () {
      return Object.assign({}, this.stylePart, {
        //
      });
    },
  },
};
</script>

<style scoped>
.relationLabel {
  position: absolute;
  min-width: 45px;
  max-width: 80px;
  height: 12px;

  border-radius: 20px;
  padding: 5px;
  border: 1px solid rgba(255, 0, 0, 0.466);
  background-color: rgb(87, 87, 87);
  color: white;
}
.relationLabel p {
  margin: 0px;

  text-overflow: ellipsis;
}</style
>>
