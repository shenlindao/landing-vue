import _ from 'lodash';
import CatalogData from '../data/catalog';
import massageData from '../data/massage';

const filterByWord = (cards, word) => {
  if (word) {
    return cards.filter((card) => card.type
      .toLowerCase()
      .includes(word)
      || card.model.toLowerCase().includes(word)
      || String(card.price).includes(word));
  }
  return cards;
};

const filterByPrice = (cards, minPrice, maxPrice) => cards.filter((card) => card.price >= minPrice
  && card.price <= maxPrice);

const filtersByMassage = (cards, findMassage) => {
  if (findMassage.length > 0) {
    cards.filter((card) => {
      if (card.massage) {
        const result = card.massage
          .filter((i) => findMassage.includes(i.title));
        return Boolean(result.length);
      }
      return false;
    });
  }
  return cards;
};

const filterCards = (filters) => {
  let { cards } = CatalogData;
  cards = filterByWord(
    cards,
    filters.word,
  );
  cards = filterByPrice(
    cards,
    filters.minPriceSearch,
    filters.maxPriceSearch,
  );
  cards = filtersByMassage(
    cards,
    filters.findMassage,
  );
  return cards;
};

export default {
  namespaced: true,
  state: {
    cards: CatalogData.cards,
    card: {},

    filters: {
      word: null,
      minPriceSearch: CatalogData.cards.length
        ? Number(_.minBy(CatalogData.cards, 'price').price)
        : 0,
      maxPriceSearch: CatalogData.cards.length
        ? Number(_.maxBy(CatalogData.cards, 'price').price)
        : 0,
      findMassage: [],
    },

    minPrice: CatalogData.cards.length
      ? Number(_.minBy(CatalogData.cards, 'price').price)
      : 0,
    maxPrice: CatalogData.cards.length
      ? Number(_.maxBy(CatalogData.cards, 'price').price)
      : 0,
    massages: massageData.massages,
    cardsMassages: CatalogData.cards.massage,
  },
  getters: {
    getMinPrice: (state) => state.minPrice,
    getMaxPrice: (state) => state.maxPrice,
    getMassages: (state) => state.massages,
  },
  mutations: {
    setFilters(state, newFilters) {
      state.filters = newFilters;
      state.cards = filterCards(state.filters);
    },
    // FILTERED_BY_MASSAGE(state, payload) {
    //   if (!(payload)) {
    //     state.findMassage = [];
    //     state.filteredCards = null;
    //   } else {
    //     state.findMassage.push(payload);
    //     state.filteredCards = state.cards.filter((card) => {
    //       if (card.massage) {
    //         const result = card.massage
    //           .filter((i) => state.findMassage.includes(i.title));
    //         return Boolean(result.length);
    //       }
    //       return false;
    //     });
    //   }
    // },
  },
  actions: {
    setFilters({ commit }, newFilters) {
      console.log(newFilters);
      commit('setFilters', newFilters);
    },
  },
};
