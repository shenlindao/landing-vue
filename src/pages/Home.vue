<template>
  <item-page>
    <desctop-1 :itemData="itemData" />
    <desctop-2 :funcData="funcData" />
  </item-page>
</template>

<script>
import ItemPage from '../components/layout/ItemPage.vue';
import Desctop1 from '../components/desctops/Desctop1.vue';
import Desctop2 from '../components/desctops/Desctop2.vue';
import itemData from '../data/items';
import funcData from '../data/functions';

export default {
  components: {
    ItemPage,
    Desctop1,
    Desctop2,
  },
  data() {
    return {
      itemData,
      funcData,
      currentRoute: window.location.pathname,
    };
  },
};
</script>

<style scoped>
</style>
