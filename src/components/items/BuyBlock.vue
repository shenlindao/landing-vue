<template>
  <div class="buyblock">
    <app-button v-on:buttonClick="order">
      <img :src="require('@/assets/pics/for_buy_button.svg')">
    </app-button>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  name: 'BuyBlock',
  components: {
    AppButton,
  },
  methods: {
    order() {
      console.log('Привет!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .buyblock {
    width: 345px;
    height: 425px;
    right: 15%;
    top: 20%;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    position: absolute;
  }
</style>
