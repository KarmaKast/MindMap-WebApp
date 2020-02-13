import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window_height: window.innerHeight,
    window_width: window.innerWidth,
    canvas_height: 0,
    canvas_width: 0,
    apiUrl: ["", false],
    theme: []
  },
  mutations: {
    update_window_height(state, val) {
      state.window_height = val;
    },
    update_window_width(state, val) {
      state.window_width = val;
    },
    update_canvas_height(state, val) {
      state.canvas_height = val;
    },
    update_canvas_width(state, val) {
      state.canvas_width = val;
    },
    update_apiUrl(state, url) {
      state.apiUrl[0] = url;
    },
    update_apiUrlValidity(state, isValid) {
      state.apiUrl[1] = isValid;
    }
  },
  getters: {},
  actions: {
    update_apiUrl(context, url) {
      //console.log("doing action");
      context.commit("update_apiUrl", url);

      var isValid = url === "" ? false : true;
      context.commit("update_apiUrlValidity", isValid);
    }
  },
  modules: {}
});
