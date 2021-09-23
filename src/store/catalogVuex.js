import CatalogData from '../data/catalog';

const loadCatalog = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(CatalogData.cards);
  }, time);
});

export default {
  namespaced: true,
  state: {
    PRODUCTS: [],
  },
  getters: {
    getCatalog(state) {
      return state.PRODUCTS;
    },
  },
  mutations: {
    SET_CATALOG(state, catalogCards) {
      state.PRODUCTS = catalogCards;
    },
  },
  actions: {
    async loadCatalog({ commit }, catalogCards) {
      try {
        const PRODUCTS = await loadCatalog(catalogCards);
        commit('SET_CATALOG', PRODUCTS);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
