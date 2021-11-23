<template>
  <desctop-catalog
    :payVariants="payVariants"
  />
</template>

<script>
import DesctopCatalog from '../components/desctops/DesctopCatalog.vue';
import payData from '../data/pay';

export default {
  name: 'Catalog',
  components: {
    DesctopCatalog,
  },
  data() {
    return {
      payVariants: payData.content,
    };
  },
};
</script>
