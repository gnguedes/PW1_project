import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import Vuetify from "vuefify/lib";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import vuetify from "./plugins/vuetify";

Vue.use(BootstrapVue);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  Vuetify,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
