import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/lib';
import Paginate from 'vuejs-paginate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.component('paginate', Paginate);

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
