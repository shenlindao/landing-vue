import CatalogData from '../data/catalog';

const loadCatalog = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(CatalogData.cards);
  });
});

const searchText = '';

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
    FILTER_SEARCH(state) {
      state.PRODUCTS = state.PRODUCTS.type.filter((index) => index.toLowerCase()
        .includes(searchText.toLowerCase()));
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
