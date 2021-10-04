<template>
  <div class="v-rande-slider">
    <v-container fluid>
      <v-subheader>Фильтрация по цене:</v-subheader>
    </v-container>
      <div class="range-slider">
        <input
          :min="storeMinValue"
          :max="storevMaxValue"
          type="range"
          step="100"
          v-model.number="barMinValue"
        />
        <input
          :min="storeMinValue"
          :max="storevMaxValue"
          type="range"
          step="100"
          v-model.number="barMaxValue"
        />
      </div>
      <v-container class="range-inputs">
        <v-text-field
          :value="barMinValue"
          :min="storeMinValue"
          :max="barMaxValue"
          class="mt-0 pt-0 range-input-slot"
          hide-details
          single-line
          type="number"
          v-model.number="barMinValue"
        ></v-text-field>
        <v-text-field
          :value="barMaxValue"
          :min="barMinValue"
          :max="storevMaxValue"
          class="mt-0 pt-0 range-input-slot"
          hide-details
          single-line
          type="number"
          v-model.number="barMaxValue"
        ></v-text-field>
      </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FilterRangeSlider',
  computed: {
    ...mapGetters({
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
        return this.$store.state.catalogVuex.filters.minPriceSearch;
      },
      set(minPriceSearch) {
        this.$store.dispatch('catalogVuex/setFilters', {
          ...this.$store.state.catalogVuex.filters,
          minPriceSearch,
        });
      },
    },
    barMaxValue: {
      get() {
        return this.$store.state.catalogVuex.filters.maxPriceSearch;
      },
      set(maxPriceSearch) {
        this.$store.dispatch('catalogVuex/setFilters', {
          ...this.$store.state.catalogVuex.filters,
          maxPriceSearch,
        });
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
.range-inputs {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
}
.range-input-slot {
  max-width: 32%;
}
</style>
