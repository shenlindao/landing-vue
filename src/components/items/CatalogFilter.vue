<template>
  <v-card class="mx-5 catalog-filter" max-width="300" tile>
    <filter-search :initialWord="filters.word" @search="filterbyWord"/>
    <!-- <filter-category/> -->
    <filter-range-slider
      :initialMinPriceSearch="filters.minPriceSearch"
      :initialMaxPriceSearch="filters.maxPriceSearch"
      :minPrice="minPrice"
      :maxPrice="maxPrice"
      @changeMin="filterbyMinPrice"
      @changeMax="filterbyMaxPrice"
    />
    <!-- <filter-massage/> -->
  </v-card>
</template>

<script>
import _ from 'lodash';
import FilterSearch from './FilterSearch.vue';
// import FilterCategory from './FilterCategory.vue';
import FilterRangeSlider from './FilterRangeSlider.vue';
// import FilterMassage from './FilterMassage.vue';

export default {
  name: 'CatalogFilter',
  props: {
    filters: Object,
    minPrice: Number,
    maxPrice: Number,
  },
  methods: {
    filterbyWord: _.debounce(function (word) {
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
  },
  components: {
    FilterSearch,
    // FilterCategory,
    FilterRangeSlider,
    // FilterMassage,
  },
};
</script>
