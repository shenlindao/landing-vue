<template>
  <div class="desctop">
    <h2>Оплата</h2>
    <pay-variants
      :payData="payData"
    />
  </div>
</template>

<script>
import PayVariants from '../items/PayVariants.vue';

export default {
  components: { PayVariants },
  name: 'DesctopMyPay',
  props: {
    payData: Object,
  },
};
</script>

<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 750px;
  top: 0;
  background-size: cover;
  position: relative;
}
h2 {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0);
  font-size: 22pt;
}
</style>
