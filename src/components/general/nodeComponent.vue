<template>
  <div
    ref="nodeContainer"
    :style="nodeStyle"
    @mousedown.left="startdrag"
    @mousemove="dodrag"
    @mouseup.left="stopdrag"
  >
    <div
      id="inner"
      :style="{
        borderRadius: 'inherit',
        border: '1.2px dashed rgba(255, 255, 255, 0.28)',
        backdropFilter: 'blur(2px)',
        pointerEvents: 'none',
        display: 'grid',
        placeItems: 'center'
      }"
    >
      <p>
        {{ nodeLabel }}
      </p>
    </div>
  </div>
  <!--<v-group
    ref="nodeGroup"
    :config="{
      x: this.canvasSize['width'] / 2 - 80,
      y: this.canvasSize['height'] / 2 - 20,
      draggable: true
    }"
  >
    <v-rect
      ref="rect"
      :config="{
        width: 160,
        height: 40,
        fill: 'rgba(255,255,255,0.2)',
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
  </v-group>-->
</template>

<script>
export default {
  name: "nodeComponent",
  props: {
    ID: String,
    apiUrl: String,
    canvasSize: Object,
    canvasLocation: Object,
    defaultColors: Object
  },
  data: function() {
    return {
      minHeight: 40,
      minWidth: 40,
      nodeLocation: { x: 0, y: 0 },
      nodeLabel: "__null__",
      konvaNode: null,
      nodeSize: { height: 60, width: 160 },
      dragging: false,
      draggingDeltas: { x: 0, y: 0 }
    };
  },
  computed: {
    canvasCenter: function() {
      return {
        x: this.canvasSize["width"] / 2 - this.nodeSize.width / 2,
        y: this.canvasSize["height"] / 2 - this.nodeSize.height / 2
      };
    },
    nodeStyle: function() {
      return {
        position: "absolute",
        top: `${this.canvasCenter["y"] + this.nodeLocation["y"]}px`,
        left: `${this.canvasCenter["x"] + this.nodeLocation["x"]}px`,
        width: `${this.nodeSize["width"]}px`,
        height: `${this.nodeSize["height"]}px`,
        cursor: this.dragging ? "grabbing" : "grab",
        zIndex: this.dragging ? "5000" : "unset",

        backgroundColor: "rgba(255,255,255,0.2)",
        border: `0.5px dashed rgb(255, 164, 164)`,
        borderRadius:
          this.nodeSize["height"] > this.nodeSize["width"]
            ? `${this.nodeSize["height"]}px`
            : `${this.nodeSize["width"]}px`,
        boxShadow: `0px 0px 4px 1px hsla(0, 0%, 0%, 0.1)`,
        display: "grid",
        gridTemplateColumns: "100%",
        padding: "8px"
      };
    }
  },
  methods: {
    startdrag(event) {
      this.dragging = true;
      console.log(
        `started dragging Loc(${this.nodeLocation["x"]},${this.nodeLocation["y"]})`
      );

      console.log(event);
      var boundingBox = this.$refs.nodeContainer.getBoundingClientRect();
      // context: draggingDeltas are ---
      this.draggingDeltas["x"] = event.clientX - boundingBox.x;
      this.draggingDeltas["y"] = event.clientY - boundingBox.y;

      console.log(`x:${this.draggingDeltas.x}, y:${this.draggingDeltas.y}`);
    },
    dodrag() {
      if (this.dragging) {
        this.nodeLocation["x"] += event.offsetX - this.draggingDeltas.x;
        this.nodeLocation["y"] += event.offsetY - this.draggingDeltas.y;
      }
    },
    stopdrag() {
      this.dragging = false;
      console.log(
        `ended dragging Loc(${this.nodeLocation["x"]},${this.nodeLocation["y"]})`
      );
      this.draggingDeltas = { x: 0, y: 0 };
    }
  },
  mounted: function() {
    if (this.ID === undefined) {
      // create new node using the nodeAPI and take its ID
    }
  },
  updated() {}
};
</script>

<style lang="sass" scoped></style>
