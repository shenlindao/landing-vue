<template>
    <desctop-catalog :CatalogData="CatalogData" />
</template>

<script>
import DesctopCatalog from '../components/desctops/DesctopCatalog.vue';
import CatalogData from '../data/catalog';

export default {
  name: 'Catalog',
  components: {
    DesctopCatalog,
  },
  data() {
    return {
      CatalogData,
    };
  },
};
</script>
