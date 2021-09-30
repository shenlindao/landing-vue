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
    minPrice: CatalogData.cards.length
      ? Number(_.minBy(CatalogData.cards, 'price').price)
      : 0,
    maxPrice: CatalogData.cards.length
      ? Number(_.maxBy(CatalogData.cards, 'price').price)
      : 0,
    minPriceSearch: CatalogData.cards.length
      ? Number(_.minBy(CatalogData.cards, 'price').price)
      : 0,
    maxPriceSearch: CatalogData.cards.length
      ? Number(_.maxBy(CatalogData.cards, 'price').price)
      : 0,
    massages: massageData.massages,
    cardsMassages: CatalogData.cards.massage,
    findMassage: [],
  },
  getters: {
    allCards: (state) => state.cards,
    getCard: (state) => state.card,
    getSearchWord: (state) => state.searchWord,
    getFilteredCard: (state) => state.filteredCards,
    getMinPrice: (state) => state.minPrice,
    getMaxPrice: (state) => state.maxPrice,
    getMinPriceSearch: (state) => state.minPriceSearch,
    getMaxPriceSearch: (state) => state.maxPriceSearch,
    getMassages: (state) => state.massages,
    getFindMassage: (state) => state.findMassage,
  },
  mutations: {
    SET_CARD(state, card) {
      state.card = card;
    },
    FILTERED_CARDS_BY_SEARCH(state, word) {
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
    FILTERED_BY_PRICE_MIN(state, price) {
      state.minPriceSearch = price;
      state.filteredCards = state.cards.filter((card) => card.price >= price
        && card.price <= state.maxPriceSearch);
    },
    FILTERED_BY_PRICE_MAX(state, price) {
      state.maxPriceSearch = price;
      state.filteredCards = state.cards.filter((card) => card.price <= price
      && card.price >= state.minPriceSearch);
    },
    FILTERED_BY_MASSAGE(state, payload) {
      if (!(payload)) {
        state.findMassage = [];
        console.log(payload);
        state.filteredCards = null;
      } else {
        state.findMassage.push(payload);
        state.filteredCards = state.cards.filter((card) => {
          if (card.massage) {
            const result = card.massage
              .filter((i) => state.findMassage.includes(i.title));
            return Boolean(result.length);
          }
          return false;
        });
      }
    },
  },
  actions: {
    SET_CARD({ commit }, card) {
      commit('SET_CARD', card);
    },
    FILTERED_CARDS_BY_SEARCH({ commit }, word) {
      commit('FILTERED_CARDS_BY_SEARCH', word);
    },
    FILTERED_BY_PRICE_MIN({ commit }, price) {
      commit('FILTERED_BY_PRICE_MIN', price);
    },
    FILTERED_BY_PRICE_MAX({ commit }, price) {
      commit('FILTERED_BY_PRICE_MAX', price);
    },
    FILTERED_BY_MASSAGE({ commit }, payload) {
      commit('FILTERED_BY_MASSAGE', payload);
    },
  },
};
