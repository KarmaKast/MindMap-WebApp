import Vue from "vue";
import axios from "axios";
import VueKonva from "vue-konva";

import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueKonva);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
