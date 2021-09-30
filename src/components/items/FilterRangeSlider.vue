<template>
  <div class="v-rande-slider">
    <v-container fluid>
      <v-subheader>Фильтрация по цене:</v-subheader>
    </v-container>
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
  name: 'FilterRangeSlider',
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
</style>
