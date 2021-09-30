<template>
  <v-container fluid>
      <v-text-field
        label="Поиск"
        hide-details="auto"
        v-model="searchWord"
      ></v-text-field>
    </v-container>
</template>

<script>
export default {
  name: 'FilterSearch',
  computed: {
    searchWord: {
      get() {
        return this.$store.state.searchWord;
      },
      set(value) {
        this.$store.dispatch('catalogVuex/FILTERED_CARDS_BY_SEARCH', value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.search-cards {
  border: 1px solid rgb(112, 112, 112);
  border-radius: 5px;
  width: 100%;
  min-height: 35px;
  padding-left: 10px;
}
</style>
