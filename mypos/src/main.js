import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // https://iconify.design/icon-sets/mdi/
import store from "./store";
import Vue2Filters from "vue2-filters";
import { imageUrl } from "@/services/constants";

Vue.config.productionTip = false;
Vue.use(Vue2Filters);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");

Vue.use(require("vue-moment")); // require to call lib like this
Vue.filter("imageUrl", function(image) {
  return `${imageUrl}/${image}?timestamp=${Date.now()}`;
});
