<template>
  <div class="v-rande-slider">
      <div class="range-slider">
        <v-subheader>Цена</v-subheader>
        <input
          type="range"
          step="1000"
          v-model.number="minPrice"
        />
        <input
          type="range"
          step="1000"
          v-model.number="maxPrice"
        />
      </div>
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'vRangeSlider',
  computed: {
    ...mapGetters('catalogVuex', {
      minPriceAll: 'minPrice',
      maxPriceAll: 'maxPrice',
    }),
    // minPrice: {
    //   get() {
    //     return this.$store.state.minPrice;
    //   },
    //   set(value) {
    //     this.$store.dispatch('catalogVuex/FILTERED_BY_PRICE_MIN', value);
    //   },
    // },
    // maxPrice: {
    //   get() {
    //     return this.$store.state.maxPrice;
    //   },
    //   set(value) {
    //     this.$store.dispatch('catalogVuex/FILTERED_BY_PRICE_MAX', value);
    //   },
    // },
  },
};
</script>

<style scoped lang="scss">
</style>
