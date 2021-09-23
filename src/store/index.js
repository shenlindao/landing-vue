import Vue from 'vue';
import Vuex from 'vuex';
import CatalogData from '../data/catalog';

Vue.use(Vuex);

const loadMassive = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(CatalogData.cards);
  }, 1000);
});

export default new Vuex.Store({
  state: {
    PRODUCTS: [],
  },
  getters: {
    getMassive(state) {
      return state.PRODUCTS;
    },
  },
  mutations: {
    SET_CATALOG(state, payload) {
      state.PRODUCTS = payload;
    },
  },
  actions: {
    async loadMassive({ commit }) {
      try {
        const PRODUCTS = await loadMassive();
        commit('SET_CATALOG', PRODUCTS);
        console.log(PRODUCTS);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
