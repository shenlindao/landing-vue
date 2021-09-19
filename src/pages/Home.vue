<template>
  <div>
      <desctop-1 :itemData="itemData" />
      <desctop-2 :funcData="funcData" />
      <desctop-3 />
      <desctop-4 :specificData="specificData" />
  </div>
</template>

<script>
import Desctop1 from '../components/desctops/Desctop1.vue';
import Desctop2 from '../components/desctops/Desctop2.vue';
import Desctop3 from '../components/desctops/Desctop3.vue';
import Desctop4 from '../components/desctops/Desctop4.vue';
import itemData from '../data/items';
import funcData from '../data/functions';
import specificData from '../data/specifications';

export default {
  name: 'Home',
  components: {
    Desctop1,
    Desctop2,
    Desctop3,
    Desctop4,
  },
  data() {
    return {
      itemData,
      funcData,
      specificData,
    };
  },
};
</script>

<style scoped>
</style>
