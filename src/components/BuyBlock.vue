<template>
  <div class="buyblock">
    <app-button v-on:buttonClick="order" :buttonText="Купить"/>
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
    position: absolute;
    width: 345px;
    height: 425px;
    left: 889px;
    top: 190px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
  }
</style>
