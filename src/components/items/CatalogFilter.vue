<template>
  <v-card class="mx-5 catalog-filter" max-width="300" tile>
    <filter-search
      :initialWord="filters.word"
      @search="filterbyWord"
    />
    <filter-category
      :categories="categories"
      :initialCategory="filters.findCategory"
      @setCategory="filterbyCategory"
    />
    <filter-range-slider
      :initialMinPriceSearch="filters.minPriceSearch"
      :initialMaxPriceSearch="filters.maxPriceSearch"
      :minPrice="minPrice"
      :maxPrice="maxPrice"
      @changeMin="filterbyMinPrice"
      @changeMax="filterbyMaxPrice"
    />
    <filter-massage
      :massages="massages"
      :initialMassage="filters.findMassage"
      @setMassage="filterbyMassage"
    />
  </v-card>
</template>

<script>
import _ from 'lodash';
import FilterSearch from './FilterSearch.vue';
import FilterCategory from './FilterCategory.vue';
import FilterRangeSlider from './FilterRangeSlider.vue';
import FilterMassage from './FilterMassage.vue';

export default {
  name: 'CatalogFilter',
  props: {
    filters: Object,
    minPrice: Number,
    maxPrice: Number,
    massages: Array,
    categories: Array,
  },
  methods: {
    filterbyWord: _.debounce(function setTimeOutForInputWord(word) {
      this.filters.word = word;
      this.$emit('filterChanged', this.filters);
    }, 300),
    filterbyMinPrice(minPriceSearch) {
      this.filters.minPriceSearch = minPriceSearch;
      this.$emit('filterChanged', this.filters);
    },
    filterbyMaxPrice(maxPriceSearch) {
      this.filters.maxPriceSearch = maxPriceSearch;
      this.$emit('filterChanged', this.filters);
    },
    filterbyMassage(findMassage) {
      this.filters.findMassage = findMassage;
      this.$emit('filterChanged', this.filters);
    },
    filterbyCategory(findCategory) {
      this.filters.findCategory = findCategory;
      this.$emit('filterChanged', this.filters);
    },
  },
  components: {
    FilterSearch,
    FilterCategory,
    FilterRangeSlider,
    FilterMassage,
  },
};
</script>
