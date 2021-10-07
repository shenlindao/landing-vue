import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Delivery from '../pages/Delivery.vue';
import Pay from '../pages/Pay.vue';
import Contacts from '../pages/Contacts.vue';
// import Catalog from '../pages/Catalog.vue';
import notFound from '../pages/notFound.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: Delivery,
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import(/* webpackChunkName: "group-foo" */ '../pages/Catalog.vue'),
    },
    {
      path: '*',
      name: 'notfound',
      component: notFound,
    },
    {
      path: '/fujimo-ton',
      name: 'fujimo-ton',
      component: Home, // в дальнейшем заменить
    },
  ],
});
