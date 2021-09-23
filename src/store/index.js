import Vue from 'vue';
import Vuex from 'vuex';
import catalogVuex from './catalogVuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { catalogVuex },
});
