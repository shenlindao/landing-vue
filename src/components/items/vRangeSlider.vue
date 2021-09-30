<template>
  <div class="v-rande-slider">
      <div class="range-slider">
        <v-subheader>Цена</v-subheader>
        <input
          :min="storeMinValue"
          :max="storevMaxValue"
          type="range"
          step="1000"
          v-model.number="barMinValue"
        />
        <input
          :min="storeMinValue"
          :max="storevMaxValue"
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
import { mapGetters } from 'vuex';

export default {
  name: 'vRangeSlider',
  computed: {
    ...mapGetters({
      getMinPrice: 'catalogVuex/getMinPriceSearch',
      getMaxPrice: 'catalogVuex/getMaxPriceSearch',
      minValue: 'catalogVuex/getMinPrice',
      maxValue: 'catalogVuex/getMaxPrice',
    }),
    storeMinValue() {
      return this.minValue;
    },
    storevMaxValue() {
      return this.maxValue;
    },
    barMinValue: {
      get() {
        return this.getMinPrice;
      },
      set(value) {
        this.$store.dispatch('catalogVuex/FILTERED_BY_PRICE_MIN', value);
      },
    },
    barMaxValue: {
      get() {
        return this.getMaxPrice;
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
