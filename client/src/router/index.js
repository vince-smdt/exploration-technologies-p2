import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductView from '../views/ProductView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: HomeView,
  },
  {
    path: '/product/:id',
    name: 'ProductView',
    component: ProductView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
