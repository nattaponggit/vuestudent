import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // https://iconify.design/icon-sets/mdi/
import store from "./store";
import Vue2Filters from "vue2-filters";

Vue.config.productionTip = false;
Vue.use(Vue2Filters);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
