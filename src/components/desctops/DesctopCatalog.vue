<template>
  <div class="desctop">
    <h2>Каталог</h2>
    <div class="catalog-content">
      <catalog-filter/>
      <catalog-cards/>
    </div>
  </div>
</template>

<script>
import CatalogCards from '../items/CatalogCards.vue';
import CatalogFilter from '../items/CatalogFilter.vue';

export default {
  name: 'DesctopCatalog',
  components: {
    CatalogCards,
    CatalogFilter,
  },
};
</script>

<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
  background-color: #ffffff;
  background-size: cover;
  position: relative;
}
h2 {
  margin-top: 80px;
  margin-bottom: 20px;
  font-size: 22pt;
  color: black;
}
.catalog-content {
  width: 100%;
  margin-bottom: 100px;
  display: inline-flex;
}
.catalog-filter {
  top: 18px;
  width: 100%;
  height: fit-content;
  text-align: left;
  padding: 10px;
}
.catalog-cards {
  width: 100%;
  height: auto;
  display: inline-flex;
  text-align: left;
  overflow: hidden;
  flex-wrap: wrap;
}
</style>
