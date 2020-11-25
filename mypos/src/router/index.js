import Vue from "vue";
import VueRouter from "vue-router";
import api from "../services/api";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Stock from "../views/Stock.vue";
import StockCreate from "../views/StockCreate.vue";
import StockEdit from "../views/StockEdit.vue";
import Shop from "../views/Shop.vue";
import Report from "../views/Report.vue";
import Transaction from "../views/Transaction.vue";

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
    meta: { isSecured: true },
    name: "stock",
    component: Stock,
  },
  {
    path: "/stock-create",
    meta: { isSecured: true },
    name: "stock-create",
    component: StockCreate,
  },
  {
    path: "/stock-edit/:id",
    meta: { isSecured: true },
    name: "stock-edit",
    component: StockEdit,
  },
  {
    path: "/shop",
    meta: { isSecured: true },
    name: "shop",
    component: Shop,
  },
  {
    path: "/report",
    meta: { isSecured: true },
    name: "report",
    component: Report,
  },
  {
    path: "/transaction",
    meta: { isSecured: true },
    name: "transaction",
    component: Transaction,
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
