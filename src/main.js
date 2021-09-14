import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/lib';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';

Vue.use(VueRouter);

Vue.use(Vuetify);

new Vue({
  vuetify,
  render: (h) => h(App),
  router,
}).$mount('#app');
