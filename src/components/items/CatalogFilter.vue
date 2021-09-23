<template>
  <v-card class="mx-5 catalog-filter" max-width="300" tile>
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
          @change="changeRangeSliders($event)"
        />
        <input
          type="range"
          min="0"
          max="300000"
          step="1000"
          v-model.number="maxPrice"
          @change="changeRangeSliders($event)"
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
  emits: [
    'sortedByCategories',
    'changedByRangeSliders',
  ],
  components: {
    VSelect,
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
    minPrice: {
      type: Number,
      default: 0,
    },
    maxPrice: {
      type: Number,
      default: 300000,
    },
    CatalogData: Object,
  },
  methods: {
    sortByCategories(option) {
      this.$emit('sortedByCategories', option);
    },
    changeRangeSliders() {
      this.$emit('changedByRangeSliders');
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
