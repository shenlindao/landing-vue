<template>
  <div class="desctop">
    <h2>Каталог</h2>
    <div class="catalog-content">
      <catalog-filter
        @filterChanged="updateFilter"
        :filters="filters"
        :minPrice="minPrice"
        :maxPrice="maxPrice"
        :massages="massages"
        :categories="categories"
      />
      <catalog-cards :cards="cards"/>
      <!-- <v-pagination
      v-model="pageChangeHandler"
      :length="pageCount"
      /> -->
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
// import paginationMixin from '@/mixins/pagination.mixin';
import CatalogCards from '../items/CatalogCards.vue';
import CatalogFilter from '../items/CatalogFilter.vue';
import cardService from '../../services/catalogService';
import massageData from '../../data/massage';
import categoriesData from '../../data/categories';

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
  // mixins: [paginationMixin],
  components: {
    CatalogCards,
    CatalogFilter,
  },
  data() {
    const queryParams = {
      word: this.$route.query.word,
      minPriceSearch: Number(this.$route.query.minPriceSearch),
      maxPriceSearch: Number(this.$route.query.maxPriceSearch),
      findMassage: String(this.$route.query.findMassage).split(','),
      findCategory: String(this.$route.query.findCategory),
    };
    if (JSON.stringify(this.$route.query) !== '{}') {
      return {
        filters: { ...queryParams },
        minPrice,
        maxPrice,
        massages: massageData.massages,
        categories: categoriesData.categories,
      };
    }
    return {
      filters: { ...defaultFilters },
      minPrice,
      maxPrice,
      massages: massageData.massages,
      categories: categoriesData.categories,
    };
  },
  computed: {
    cards() {
      return cardService.getCards(this.filters);
    },
  },
  methods: {
    updateFilter(filter) {
      this.$router.push({ query: filter });
    },
  },
  // async mounted(cards) {
  //   this.setupPagination(cards);
  // },
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
