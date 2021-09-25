import CatalogData from '../data/catalog';

// const removerAcentos = (string) => {
//   const mapaAcentosHex = {
//     a: /[\xE0-\xE6]/g,
//     e: /[\xE8-\xEB]/g,
//     i: /[\xEC-\xEF]/g,
//     o: /[\xF2-\xF6]/g,
//     u: /[\xF9-\xFC]/g,
//     c: /\xE7/g,
//   };
//   for (const letra in mapaAcentosHex) {
//     const expressaoRegular = mapaAcentosHex[letra];
//     string = string.replace(expressaoRegular, letra);
//   }
//   return string;
// };

export default {
  namespaced: true,
  state: {
    cards: CatalogData.cards,
    card: {},
    searchWord: null,
    filteredCards: null,
  },
  getters: {
    allCards: (state) => state.cards,

    getCard: (state) => state.card,

    getSearchWord: (state) => state.searchWord,

    getFilteredCard: (state) => state.filteredCards,
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
          || card.model.toLowerCase().includes(word));
      }
    },
  },
  actions: {
    SET_CARD({ commit }, card) {
      commit('SET_CARD', card);
    },
    FILTERED_CARDS({ commit }, word) {
      commit('FILTERED_CARDS', word);
    },
  },
};
