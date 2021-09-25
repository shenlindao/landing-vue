<template>
  <div class="v-rande-slider">
      <div class="range-slider">
        <v-subheader>Цена</v-subheader>
        <input
          type="range"
          :min="0"
          :max="300000"
          step="1000"
          v-model.number="minPrice"
          @change="changeRangeSliders($event)"
        />
        <input
          type="range"
          :min="0"
          :max="300000"
          step="1000"
          v-model.number="maxPrice"
          @change="changeRangeSliders($event)"
        />
      </div>
      <div class="range-values">
        <p>Min: {{minPrice}}</p>
        <p>Max: {{maxPrice}}</p>
      </div>
  </div>
</template>

<script>

export default {
  name: 'vSelect',
  emits: ['select'],
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
    selectOption(option) {
      this.$emit('select', option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect);
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
};
</script>

<style scoped lang="scss">
  .v-select {
    position: relative;
    width: 200px;
    cursor: pointer;
  }
  .select-title {
    border: solid 1px ;
  }
  .v-select p {
    margin: 0;
  }
  .options {
    border: solid 1px #aeaeae;
    position: absolute;
    background-color: #fff;
    z-index: 3;
    width: inherit;
  }
  .options p:hover {
    background-color: #e7e7e7;
  }

</style>
