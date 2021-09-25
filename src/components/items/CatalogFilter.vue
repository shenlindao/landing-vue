<template>
  <v-card class="mx-5 catalog-filter" max-width="300" tile>
    <v-text-field
      label="Поиск"
      hide-details="auto"
      v-model="searchWord"
    ></v-text-field>
  </v-card>
</template>

<script>
export default {
  name: 'CatalogFilter',
  computed: {
    searchWord: {
      get() {
        return this.$store.state.searchWord;
      },
      set(value) {
        this.$store.dispatch('catalogVuex/FILTERED_CARDS', value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.range-slider {
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}
.range-slider input[type="range"] {
  width: 100%;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 3px;
  margin-top: -9px;
  width: 10px;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: #367ebd;
  height: 3px;
  cursor: pointer;
  border: none;
}
.range-values {
  margin-top: 20px;
}
.search-cards {
  border: 1px solid rgb(112, 112, 112);
  border-radius: 5px;
  width: 100%;
  min-height: 35px;
  padding-left: 10px;
}
</style>
