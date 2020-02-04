import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window_height: window.innerHeight,
    window_width: window.innerWidth,
    apiUrl: "",
    theme: []
  },
  mutations: {
    update_window_height(state, val) {
      state.window_height = val;
    },
    update_window_width(state, val) {
      state.window_width = val;
    },
    update_apiUrl(state, url) {
      state.apiUrl = url;
    }
  },
  getters: {
    //validateAPI(state) {
    validateAPI() {
      //var url_ =  state.apiUrl;
      // todo: validate url_
      var isValid = true;
      return isValid;
    }
  },
  actions: {},
  modules: {}
});
