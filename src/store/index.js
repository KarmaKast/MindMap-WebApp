import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window_height: window.innerHeight,
    window_width: window.innerWidth,
    /*canvas_height: 0,
    canvas_width: 0,*/
    apiUrl: ["", false],
    theme: [],
  },
  mutations: {
    update_window_height(state) {
      state.window_height = window.innerHeight;
    },
    update_window_width(state) {
      state.window_width = window.innerWidth;
    },
    /*update_canvas_height(state, val) {
      state.canvas_height = val;
    },
    update_canvas_width(state, val) {
      state.canvas_width = val;
    },*/
    update_apiUrl(state, url) {
      state.apiUrl[0] = url;
    },
    update_apiUrlValidity(state, isValid) {
      state.apiUrl[1] = isValid;
    },
  },
  getters: {},
  actions: {
    update_window_size(context) {
      context.commit("update_window_width");
      context.commit("update_window_height");
    },
    update_apiUrl(context, url) {
      //console.log("doing action");
      context.commit("update_apiUrl", url);

      var isValid = url === "" ? false : true;
      context.commit("update_apiUrlValidity", isValid);
    },
  },
  modules: {},
});
