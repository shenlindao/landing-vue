<template>
  <v-card
    flat
    color="transparent"
  >
    <v-subheader>Min and max range slider</v-subheader>

    <v-card-text>
      <v-row>
        <v-col class="px-4">
          <v-range-slider
            v-model="range"
            :max="barMinValue"
            :min="barMaxValue"
            hide-details
            class="align-center"
          >
            <template v-slot:prepend>
              <v-text-field
                :value="barMinValue"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(barMinValue, $event)"
              ></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field
                :value="barMaxValue"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(barMaxValue, $event)"
              ></v-text-field>
            </template>
          </v-range-slider>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
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
