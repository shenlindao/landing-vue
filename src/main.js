import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

const app = new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
