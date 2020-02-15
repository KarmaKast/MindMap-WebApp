import Vue from "vue";
import axios from "axios";
import VueKonva from "vue-konva";
import Vue2TouchEvents from "vue2-touch-events";

import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueKonva);
Vue.use(Vue2TouchEvents);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
