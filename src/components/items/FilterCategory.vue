<template>
  <v-container fluid>
      <v-subheader>Фильтрация по категориям:</v-subheader>
        <v-select
          :items="categories"
          v-model="findCategory"
        ></v-select>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FilterCategory',
  computed: {
    ...mapGetters({
      getCategories: 'catalogVuex/getCategories',
    }),
    categories() {
      return (this.getCategories);
    },
    findCategory: {
      get() {
        return this.$store.state.catalogVuex.filters.findCategory;
      },
      set(findCategory) {
        this.$store.dispatch('catalogVuex/setFilters', {
          ...this.$store.state.catalogVuex.filters,
          findCategory,
        });
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>
