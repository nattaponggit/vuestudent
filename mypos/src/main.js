import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // https://iconify.design/icon-sets/mdi/
import store from "./store";
import Vue2Filters from "vue2-filters";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  store,
  mixins: [Vue2Filters.mixin],
  render: (h) => h(App),
}).$mount("#app");
