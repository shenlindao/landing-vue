<template>
  <v-card class="mx-auto catalog-filter" max-width="300" tile>
    <v-subheader>Категории</v-subheader>
    <v-select
      :selected="selected"
      :options="options"
      @select="sortByCategories($event)"
    />
    <v-subheader>Цена</v-subheader>
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="300000"
          step="1000"
          v-model.number="minPrice"
          @change="setRangeSliders"
        />
        <input
          type="range"
          min="0"
          max="300000"
          step="1000"
          v-model.number="maxPrice"
          @change="setRangeSliders"
        />
      </div>
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
  </v-card>
</template>

<script>
import VSelect from './vSelect.vue';

export default {
  name: 'CatalogFilter',
  emits: ['sortedByCategories'],
  components: {
    VSelect,
  },
  data() {
    return {
      minPrice: 0,
      maxPrice: 300000,
    };
  },
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: '',
    },
  },
  methods: {
    sortByCategories(option) {
      this.$emit('sortedByCategories', option);
    },
    setRangeSliders() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.catalog-filter {
  position: absolute;
  top: 200px;
  left: 1%;
  width: 100%;
  height: auto;
  text-align: left;
  padding: 10px;
}
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
