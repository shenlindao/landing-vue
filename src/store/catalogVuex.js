import _ from 'lodash';
import CatalogData from '../data/catalog';
import massageData from '../data/massage';
import categoriesData from '../data/categories';

const categories = categoriesData.categories.map((i) => i.title);

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
    return cards.filter((card) => {
      if (card.massage) {
        const result = card.massage.map((i) => i.title);
        return findMassage.every((v) => result.includes(v));
      }
      return false;
    });
  }
  return cards;
};

const filtersByCategories = (cards, findCategory) => {
  if (findCategory.length > 0 && findCategory !== 'Все категории') {
    return cards.filter((card) => {
      if (card.category) {
        const res = card.category
          .filter((l) => findCategory
            .includes(l.title));
        return Boolean(res.length);
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
  cards = filtersByCategories(
    cards,
    filters.findCategory,
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
      findCategory: 'Все категории',
    },

    minPrice: CatalogData.cards.length
      ? Number(_.minBy(CatalogData.cards, 'price').price)
      : 0,
    maxPrice: CatalogData.cards.length
      ? Number(_.maxBy(CatalogData.cards, 'price').price)
      : 0,
    massages: massageData.massages,
    cardsMassages: CatalogData.cards.massage,
    categories,
  },
  getters: {
    getMinPrice: (state) => state.minPrice,
    getMaxPrice: (state) => state.maxPrice,
    getMassages: (state) => state.massages,
    getCategories: (state) => state.categories,
  },
  mutations: {
    setFilters(state, newFilters) {
      state.filters = newFilters;
      state.cards = filterCards(state.filters);
    },
  },
  actions: {
    setFilters({ commit }, newFilters) {
      commit('setFilters', newFilters);
    },
  },
};
