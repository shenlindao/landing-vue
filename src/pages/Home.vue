<template>
  <div>
    <desctop-home
    :bannersData="bannersData"
    :payVariants="payVariants"
    />
  </div>
</template>

<script>
import DesctopHome from '../components/desctops/DesctopHome.vue';
import bannersData from '../data/banners';
import payData from '../data/pay';

export default {
  name: 'Home',
  components: {
    DesctopHome,
  },
  data() {
    return {
      bannersData,
      payVariants: payData.content,
    };
  },
};
</script>
