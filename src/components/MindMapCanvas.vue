<template>
  <div
    id="canvasContainer"
    ref="canvasContainer"
    style="height:100%; width:100%;"
  >
    <v-stage
      ref="stage"
      :config="canvasConfig"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
    >
      <v-layer>
        <v-group>
          <nodeComponent
            v-for="nodeID in nodes"
            :key="nodeID"
            :ID="nodeID"
            :apiUrl="apiUrl"
            :canvasSize="{ height: height, width: width }"
            :defaultColors="colors"
          >
          </nodeComponent>
        </v-group>
      </v-layer>
    </v-stage>
  </div>
</template>
<script>
import nodeComponent from "./general/nodeComponent";

export default {
  name: "MindMapCanvas",
  components: {
    nodeComponent
  },
  props: {
    height: Number,
    width: Number,
    colors: Object
  },
  data: function() {
    return {
      mindmapCanvas: null,
      //nodes: [
      //  "254ec766-4267-11ea-9e8b-c33b52287609",
      //  "254ed148-4267-11ea-9e8b-c33b52287609"
      //],
      nodes: [],
      dragItemId: null,
      canvasLocation: { x: 0, y: 0 }
    };
  },
  computed: {
    canvasConfig: function() {
      return {
        height: this.height,
        width: this.width
      };
    },
    apiUrl: function() {
      return this.$store.state.apiUrl[0];
    },
    apiUrlIsValid: function() {
      return this.$store.state.apiUrl[1];
    }
  },
  methods: {
    handleDragstart(e) {
      // save drag element:
      this.dragItemId = e.target._id;
      console.log(e.target);
      // move current element to the top:
      //const node = this.nodes.find(i => i.id === this.dragItemId);
      //const index = this.nodes.indexOf(node);
      //this.nodes.splice(index, 1);
      //this.nodes.push(node);
    },
    handleDragend() {
      this.dragItemId = null;
    }
  },
  watch: {
    apiUrlIsValid(newValue) {
      if (newValue) {
        // todo: get a list of nodes from the api 
        //var url_ = this.$store.state.apiUrl;
        //his.$axios.get(url_+"/get/nodeIDs");
      }else {
        this.nodes = [];
      }
    }
  },
  mounted: function() {
    //var c = this.$refs.mindmapCanvas;
    //this.mindmapCanvas = c.getContext("2d");
  }
};
</script>
<style lang="sass" scoped></style>
