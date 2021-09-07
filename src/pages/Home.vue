<template>
<item-page>
    <desctop-1 :itemData="itemData" />
    <desctop-2 :funcData="funcData" />
</item-page>
</template>

<script>
import Desctop1 from '../components/desctops/Desctop1.vue';
import Desctop2 from '../components/desctops/Desctop2.vue';
import itemData from '../data/items';
import funcData from '../data/functions';
import ItemPage from '../components/layout/ItemPage.vue';

export default {
  name: 'Home',
  components: {
    Desctop1,
    Desctop2,
    ItemPage,
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
