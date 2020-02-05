<template>
  <!--<v-rect
    :config="{
      width: 160,
      height: 40,
      fill: 'rgba(255,255,255,0.8)',
      shadowBlur: 0,
      cornerRadius: 50,
      stroke: 'red',
      strokeWidth: 0.5,
      draggable: false
    }"
  />-->

  <v-group
    :config="{
      x: this.canvasSize['width'] / 2 - 80,
      y: this.canvasSize['height'] / 2 - 20,
      draggable: true
    }"
  >
    <v-rect
      :config="{
        width: 160,
        height: 40,
        fill: 'rgba(255,255,255,0.8)',
        shadowBlur: 0,
        cornerRadius: 50,
        stroke: 'red',
        strokeWidth: 0.5,
        draggable: false
      }"
    />
    <v-text
      :config="{
        text: this.nodeLabel
      }"
    >
    </v-text>
  </v-group>
</template>

<script>
export default {
  name: "nodeComponent",
  props: {
    ID:String,
    apiUrl: String,
    canvasSize: Object,
    defaultColors: Object
  },
  data: function() {
    return {
      minHeight: 40,
      minWidth: 40,
      nodeLocation: { x: 0, y: 0 },
      nodeLabel: "__test__"
    };
  },
  computed: {
    nodeStyle: function() {
      return "";
    }
  },
  created: function() {
    if (this.ID === undefined) {
      // create new node using the nodeAPI and take its ID
    }
  }
};
</script>

<style lang="sass" scoped></style>
