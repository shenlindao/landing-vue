<template>
  <div class="desctop">
    <h2>Каталог</h2>
    <div class="catalog-content">
      <catalog-filter
        :selected="selected"
        :options="options"
        :minPrice="minPrice"
        :maxPrice="maxPrice"
        @sortedByCategories="setCategory($event)"
        @changedByRangeSliders="setRangeSliders()"
      />
      <catalog-cards :cards="filteredProducts" />
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
  created() {
    this.$store.dispatch('loadMassive', 1000);
  },
  data() {
    return {
      options: [
        { name: 'Все', value: 'ALL' },
        { name: 'Массажное кресло', value: 'massage-chair' },
        { name: 'Массажная накидка', value: 'massage-cape' },
      ],
      selected: 'Все',
      sortedCards: [],
      minPrice: 0,
      maxPrice: 300000,
    };
  },
  computed: {
    filteredProducts() {
      if (this.sortedCards.length) {
        return this.sortedCards;
      }
      return this.CatalogData.cards;
    },
  },
  props: {
    CatalogData: Object,
  },
  methods: {
    setRangeSliders() {
      if (this.minPrice > this.maxPrice) {
        const tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.setCategory();
    },
    setCategory(option) {
      const vm = this;
      const PRODUCTS = this.CatalogData.cards;
      vm.sortedCards = PRODUCTS.filter((item) => item.price
      >= vm.minPrice && item.price <= vm.maxPrice);
      if (option) {
        vm.sortedCards = PRODUCTS.filter((item) => item.type === option.name);
        this.selected = option.name;
      }
    },
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
