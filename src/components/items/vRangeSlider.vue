<template>
  <div class="v-rande-slider">
      <div class="range-slider">
        <v-subheader>Цена</v-subheader>
        <input
          :min="barMinValue"
          :max="barMaxValue"
          type="range"
          step="1000"
          v-model.number="barMinValue"
        />
        <input
          :min="barMinValue"
          :max="barMaxValue"
          type="range"
          step="1000"
          v-model.number="barMaxValue"
        />
      </div>
      <div class="range-values">
        <p>Min: {{barMinValue}}</p>
        <p>Max: {{barMaxValue}}</p>
      </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'vRangeSlider',
  computed: {
    // ...mapGetters({
    //   getMinPrice: 'catalogVuex/getMinPrice',
    //   getMaxPrice: 'catalogVuex/getMaxPrice',
    // }),
    // vMinValue() {
    //   return this.getMinPrice;
    // },
    // vMaxValue() {
    //   return this.getMaxPrice;
    // },
    barMinValue: {
      get() {
        return this.$store.state.minPrice;
      },
      set(value) {
        this.$store.dispatch('catalogVuex/FILTERED_BY_PRICE_MIN', value);
      },
    },
    barMaxValue: {
      get() {
        return this.$store.state.maxPrice;
      },
      set(value) {
        this.$store.dispatch('catalogVuex/FILTERED_BY_PRICE_MAX', value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>
