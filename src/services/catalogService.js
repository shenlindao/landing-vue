import CatalogData from '../data/catalog';

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

const filterByPrice = (cards, minPrice, maxPrice) => cards.filter(
  (card) => card.price >= minPrice && card.price <= maxPrice,
);

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

const getCards = (filters = null) => {
  console.log('geCards', filters);
  let {
    cards,
  } = CatalogData;
  if (filters === null) return cards;
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
  getCards,
};
