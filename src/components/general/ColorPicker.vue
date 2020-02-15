<template>
  <div id="color-picker-container" :style="ContainerStyle">
    <div
      :style="{
        padding: '8px 15px',
        background: '#ffa7a7',
        borderRadius: '20px 5px 5px 5px'
      }"
    >
      <div
        :style="{
          width: '200px',
          height: '100px',
          backgroundColor: 'blue',
          borderRadius: '5px'
        }"
      ></div>
    </div>
    <div
      :style="{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: 'blue'
      }"
    ></div>
  </div>
</template>
<script>
/*
a color picker component that mainly deals with hsla and looks consistant with the overall design,

*/
export default {
  name: "ColorPicker",
  components: {},
  data: function() {
    return {};
  },
  computed: {
    ContainerStyle: function() {
      return {
        display: "grid",
        position: "absolute",
        bottom: "20px",
        gridGap: "2px"
      };
    }
  }
};
</script>
<style lang="sass" scoped></style>
