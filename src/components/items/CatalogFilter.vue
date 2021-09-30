<template>
  <v-card class="mx-5 catalog-filter" max-width="300" tile>
    <filter-search/>
    <filter-range-slider/>
    <filter-massage/>
  </v-card>
</template>

<script>
import FilterSearch from './FilterSearch.vue';
import FilterRangeSlider from './FilterRangeSlider.vue';
import FilterMassage from './FilterMassage.vue';

export default {
  name: 'CatalogFilter',
  components: {
    FilterSearch,
    FilterRangeSlider,
    FilterMassage,
  },
};
</script>

<style lang="scss">
</style>
