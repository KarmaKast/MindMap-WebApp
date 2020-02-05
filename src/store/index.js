import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window_height: window.innerHeight,
    window_width: window.innerWidth,
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
    update_apiUrl(state, url) {
      state.apiUrl[0] = url;
    },
    update_apiUrlValidity(state, isValid) {
      state.apiUrl[1] = isValid;
    }
  },
  getters: {
    validateAPI: state => {
      var url_ = state.apiUrl;
      // todo: validate url_
      var isValid = url_ !== "" ? true : false;
      return isValid;
    }
  },
  actions: {},
  modules: {}
});
