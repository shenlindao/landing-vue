<template>
  <div>
    <desctop-1 :itemData="itemData" />
    <desctop-2 :funcData="funcData" />
    <desctop-3 />
  </div>
</template>

<script>
import Desctop1 from '../components/desctops/Desctop1.vue';
import Desctop2 from '../components/desctops/Desctop2.vue';
import Desctop3 from '../components/desctops/Desctop3.vue';
import itemData from '../data/items';
import funcData from '../data/functions';

export default {
  name: 'Home',
  components: {
    Desctop1,
    Desctop2,
    Desctop3,
  },
  data() {
    return {
      itemData,
      funcData,
    };
  },
};
</script>

<style scoped>
</style>
