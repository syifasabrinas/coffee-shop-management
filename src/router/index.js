import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "../views/Dashboard.vue";
import Menu from "../views/Menu.vue";
import DetailMenu from "../views/DetailMenu.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import Login from "../views/Login.vue";
import History from "../views/History.vue";
import Admin from "../views/Admin.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },

  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },

  {
    path: "/detail-menu/:id",
    name: "detail-menu",
    component: DetailMenu,
  },

  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },

  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },

  {
    path: "/history",
    name: "history",
    component: History,
  },

  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;