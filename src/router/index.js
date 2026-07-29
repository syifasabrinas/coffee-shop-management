import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Menu from '../views/Menu.vue'
import DetailMenu from '../views/DetailMenu.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'
import History from '../views/History.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/menu/:id',
      name: 'DetailMenu',
      component: DetailMenu,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path: '/history',
      name: 'History',
      component: History,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
})

export default router