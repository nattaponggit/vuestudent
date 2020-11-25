import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import Stock from "@/views/Stock.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { isSecured: false },
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    meta: { isSecured: false },
    component: Register,
  },
  {
    path: "/stock",
    name: "stock",
    meta: { isSecured: true },
    component: Stock,
  },
  {
    path: "/",
    meta: { isSecured: false },
    redirect: "/login",
  },
  {
    path: "*",
    redirect: "/login", // page not found
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Router guard
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => (record.meta.isSecured ? true : false))) {
    // secure route
    if (api.isLoggedIn()) {
      next();
    } else {
      next("/login");
    }
  } else {
    // unsecure route
    next();
  }
});

export default router;
