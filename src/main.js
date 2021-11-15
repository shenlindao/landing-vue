import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify/lib';
import Paginate from 'vuejs-paginate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome, fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store/index';
import 'swiper/swiper-bundle.css';

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.component('paginate', Paginate);
library.add(faUserSecret);
library.add(faFontAwesome);
library.add(fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
new Vue({
  vuetify,
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
