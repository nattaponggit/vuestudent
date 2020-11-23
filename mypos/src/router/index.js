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
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/stock",
    name: "stock",
    component: Stock,
  },
  {
    path: "/",
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

export default router;
