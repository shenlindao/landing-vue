<template>
  <v-card class="mx-5 catalog-filter" max-width="300" tile>
    <v-text-field
      label="Поиск"
      hide-details="auto"
      v-model="searchWord"
    ></v-text-field>
    <v-subheader>Фильтрация по цене:</v-subheader>
    <MultiRangeSlider
    :min="barMinValue"
    :max="barMaxValue"
    :ruler="false"
    :label="true"
    :minValue="barMinValue"
    :maxValue="barMaxValue"
    />
    <div class="range-values">
      <p>Min: {{barMinValue}}</p>
      <p>Max: {{barMaxValue}}</p>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import MultiRangeSlider from 'multi-range-slider-vue';

export default {
  name: 'CatalogFilter',
  components: {
    MultiRangeSlider,
  },
  // data() {
  //   return {
  //     barMinValue: 0,
  //     barMaxValue: 300000,
  //   };
  // },
  // methods: {
  //   UpdateValues(e) {
  //     this.barMinValue = e.minValue;
  //     this.barMaxValue = e.maxValue;
  //   },
  // },
  computed: {
    ...mapGetters({
      getMinPrice: 'catalogVuex/getMinPrice',
      getMaxPrice: 'catalogVuex/getMaxPrice',
    }),
    barMinValue() {
      return this.getMinPrice;
    },
    barMaxValue() {
      return this.getMaxPrice;
    },
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
.multi-range-slider {
  border: none !important;
  box-shadow: none !important;
}
.multi-range-slider > .thumb::before {
  box-shadow: 0px 0px 0px 0px #a5a5a5, inset 0px 0px 7px 1px #a9a3a3 !important;
  border: none !important;
}
.multi-range-slider .bar-inner[data-v-cff044c2] {
  background-color: #b9b9b9 !important;
  border: none !important;
  box-shadow: none !important;
}
.multi-range-slider .thumb *[data-v-cff044c2] {
  position: absolute;
  bottom: 25px;
  width: auto;
  height: auto;
  padding: 2px;
  left: -20px;
  font-size: 75%;
  text-align: center;
  line-height: normal;
  background-color: #4caf50;
  border-radius: unset;
  color: white;
  box-shadow: 0px 0px 5px black;
}
</style>
