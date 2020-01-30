import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    window_height: window.innerHeight,
    window_width: window.innerWidth
  },
  mutations: {
    update_window_height(state, val) {
      state.window_height = val;
    },
    update_window_width(state, val) {
      state.window_width = val;
    }
  },
  actions: {},
  modules: {}
});
