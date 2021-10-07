<template>
  <div class="v-rande-slider">
    <v-container fluid>
      <v-subheader>Фильтрация по цене:</v-subheader>
    </v-container>
      <div class="range-slider">
        <input
          :min="minPrice"
          :max="maxPrice"
          type="range"
          step="100"
          v-model.number="minPriceSearch"
          @input="$emit('changeMin', minPriceSearch)"
        />
        <input
          :min="minPrice"
          :max="maxPrice"
          type="range"
          step="100"
          v-model.number="maxPriceSearch"
          @input="$emit('changeMax', maxPriceSearch)"
        />
      </div>
      <v-container class="range-inputs">
        <v-text-field
          :value="minPriceSearch"
          :min="minPrice"
          :max="maxPrice"
          class="mt-0 pt-0 range-input-slot"
          hide-details
          single-line
          type="number"
          v-model.number="minPriceSearch"
          @input="$emit('changeMin', minPriceSearch)"
        ></v-text-field>
        <v-text-field
          :value="maxPriceSearch"
          :min="minPrice"
          :max="maxPrice"
          class="mt-0 pt-0 range-input-slot"
          hide-details
          single-line
          type="number"
          v-model.number="maxPriceSearch"
          @input="$emit('changeMax', maxPriceSearch)"
        ></v-text-field>
      </v-container>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: 'FilterRangeSlider',
  props: {
    initialMinPriceSearch: Number,
    initialMaxPriceSearch: Number,
    minPrice: Number,
    maxPrice: Number,
  },
  data() {
    return {
      minPriceSearch: this.initialMinPriceSearch,
      maxPriceSearch: this.initialMaxPriceSearch,
    };
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
