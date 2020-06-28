import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import vuetify from './plugins/vuetify';
import axios from 'axios';

const http = axios.create({
  baseURL: "https://smartroute-esmad.herokuapp.com"
})
Vue.prototype.$http = http;

Vue.use(BootstrapVue);
Vue.use(vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
