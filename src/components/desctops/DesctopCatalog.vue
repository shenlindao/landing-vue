<template>
  <div class="desctop">
    <h2>Каталог</h2>
    <div class="catalog-content">
      <catalog-filter
        @filterChanged="updateFilter"
        :filters="filters"
        :minPrice="minPrice"
        :maxPrice="maxPrice"
      />
      <catalog-cards :cards="cards"/>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import CatalogCards from '../items/CatalogCards.vue';
import CatalogFilter from '../items/CatalogFilter.vue';
import cardService from '../../services/catalogService';

const [minPrice, maxPrice] = [
  Number(_.minBy(cardService.getCards(), 'price').price),
  Number(_.maxBy(cardService.getCards(), 'price').price),
];

const defaultFilters = {
  word: null,
  minPriceSearch: minPrice,
  maxPriceSearch: maxPrice,
  findMassage: [],
  findCategory: 'Все категории',
};

export default {
  name: 'DesctopCatalog',
  components: {
    CatalogCards,
    CatalogFilter,
  },
  methods: {
    updateFilter(filter) {
      console.log('New filter', filter);
      this.$router.push({ query: filter });
    },
  },
  data() {
    return {
      filters: { ...defaultFilters, ...this.$route.query },
      minPrice,
      maxPrice,
    };
  },
  computed: {
    cards() {
      return cardService.getCards(this.filters);
    },
    // filters() {
    //   const filters = defaultFilters;
    //   filters.word = this.query.word || null;
    //   filters.minPriceSearch = this.query.minPriceSearch
    // || Number(_.minBy(this.cards, 'price').price);
    //   console.log(filters.minPriceSearch);
    //   return filters;
    // },
  },
};
</script>

<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
  background-color: #ffffff;
  background-size: cover;
  position: relative;
}
h2 {
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 22pt;
  color: black;
}
.catalog-content {
  width: 100%;
  margin-bottom: 100px;
  display: inline-flex;
}
.catalog-filter {
  top: 18px;
  width: 100%;
  height: fit-content;
  text-align: left;
  padding: 10px;
}
.catalog-cards {
  width: 100%;
  height: auto;
  display: inline-flex;
  text-align: left;
  overflow: hidden;
  flex-wrap: wrap;
}
</style>
