import _ from 'lodash';
import CatalogData from '../data/catalog';
import massageData from '../data/massage';

export default {
  namespaced: true,
  state: {
    cards: CatalogData.cards,
    card: {},
    searchWord: null,
    filteredCards: null,
    massages: massageData.massages,
    // minPrice: CatalogData.cards.length
    //   ? Number(_.minBy(CatalogData.cards, 'price').price)
    //   : 0,
    // maxPrice: CatalogData.cards.length
    //   ? Number(_.maxBy(CatalogData.cards, 'price').price)
    //   : 0,
  },
  getters: {
    allCards: (state) => state.cards,

    getMassages: (state) => state.massages,

    // getCard: (state) => state.card,

    // getSearchWord: (state) => state.searchWord,

    getFilteredCard: (state) => state.filteredCards,

    getFilteredByPriceMin: (state) => state.filteredByPriceMin,

    getFilteredByPriceMax: (state) => state.filteredByPriceMax,

    getMinPrice: (state) => (state.cards.length
      ? Number(_.minBy(state.cards, 'price').price)
      : 0),
    getMaxPrice: (state) => (state.cards.length
      ? Number(_.maxBy(state.cards, 'price').price)
      : 0),
  },
  mutations: {
    SET_CARD(state, card) {
      state.card = card;
    },
    FILTERED_CARDS(state, word) {
      if (!(word) || word === '{}') {
        state.searchWord = null;
        state.filteredCards = null;
      } else {
        state.searchWord = word.trim().toLowerCase();
        state.filteredCards = state.cards.filter((card) => card.type.toLowerCase().includes(word)
          || card.model.toLowerCase().includes(word)
          || String(card.price).includes(word));
      }
    },
    // FILTERED_BY_PRICE_MIN(state, price) {
    //   state.filteredByPriceMin = state.cards.filter((card) => card.price >= price);
    // },
    // FILTERED_BY_PRICE_MAX(state, price) {
    //   state.filteredByPriceMax = state.cards.filter((card) => card.price <= price);
    // },
  },
  actions: {
    SET_CARD({ commit }, card) {
      commit('SET_CARD', card);
    },
    FILTERED_CARDS({ commit }, word) {
      commit('FILTERED_CARDS', word);
    },
    // FILTERED_BY_PRICE_MIN({ commit }, price) {
    //   commit('FILTERED_BY_PRICE_MIN', price);
    // },
    // FILTERED_BY_PRICE_MAX({ commit }, price) {
    //   commit('FILTERED_BY_PRICE_MAX', price);
    // },
  },
};
