<template>
  <v-card class="mx-5 catalog-filter" max-width="300" tile>
    <filter-search/>
    <filter-category/>
    <filter-range-slider/>
    <filter-massage/>
  </v-card>
</template>

<script>
import FilterSearch from './FilterSearch.vue';
import FilterCategory from './FilterCategory.vue';
import FilterRangeSlider from './FilterRangeSlider.vue';
import FilterMassage from './FilterMassage.vue';

export default {
  name: 'CatalogFilter',
  components: {
    FilterSearch,
    FilterCategory,
    FilterRangeSlider,
    FilterMassage,
  },
};
</script>

<style,
    FilterCategory lang="scss">
</style>
