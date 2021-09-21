<template>
  <v-card class="mx-auto catalog-filter" max-width="300" tile>
    <v-subheader>Категории</v-subheader>
    <p>Select: {{selected}}</p>
    <v-select
      :options="options"
      @select="optionSelect"
      :selected="selected"
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
  components: {
    VSelect,
  },
  data() {
    return {
      minPrice: 0,
      maxPrice: 300000,
      options: [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 },
      ],
      selected: 'Select',
    };
  },
  methods: {
    optionSelect(option) {
      this.selected = option.name;
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
}
input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>
