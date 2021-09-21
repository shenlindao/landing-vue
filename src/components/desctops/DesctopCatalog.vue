<template>
  <div class="desctop">
    <h2>Каталог</h2>
    <catalog-cards
    :cards="CatalogData.cards"
    />
    <catalog-filter/>
  </div>
</template>

<script>
import CatalogCards from '../items/CatalogCards.vue';
import CatalogFilter from '../items/CatalogFilter.vue';

export default {
  components: {
    CatalogCards,
    CatalogFilter,
  },
  name: 'DesctopCatalog',
  props: {
    CatalogData: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 750px;
  top: 0;
  background-color: #ffffff;
  background-size: cover;
  position: relative;
}
h2 {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0);
  font-size: 22pt;
  color: rgb(0, 0, 0);
}
.catalog-cards {
  position: absolute;
  top: 150px;
  left: 25%;
  width: 100%;
  height: auto;
  max-width: 900px;
  display: inline-flex;
  text-align: left;
}
</style>
