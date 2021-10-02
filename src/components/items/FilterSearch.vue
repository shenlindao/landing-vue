<template>
  <v-container fluid>
      <v-text-field
        label="Поиск"
        hide-details="auto"
        v-model="word"
      ></v-text-field>
    </v-container>
</template>

<script>
export default {
  name: 'FilterSearch',
  computed: {
    word: {
      get() {
        return this.$store.state.catalogVuex.filters.word;
      },
      set(word) {
        console.log('Payload', word);
        this.$store.dispatch('catalogVuex/setFilters', {
          ...this.$store.state.catalogVuex.filters,
          word: word.trim().toLowerCase(),
        });
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
