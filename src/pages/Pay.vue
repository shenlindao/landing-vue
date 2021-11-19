<template>
    <desctop-my-pay
    :payData="payData"
    />
</template>

<script>
import DesctopMyPay from '../components/desctops/DesctopMyPay.vue';
import payData from '../data/pay';

export default {
  name: 'Pay',
  components: {
    DesctopMyPay,
  },
  data() {
    return {
      payData,
    };
  },
};
</script>
