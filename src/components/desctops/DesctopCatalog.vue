<template>
  <div class="desctop">
    <h2>Каталог</h2>
    <catalog-cards :cards="filteredProducts" />
    <catalog-filter
      :selected="selected"
      :options="options"
      @sortedByCategories="setCategory($event)"
    />
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
  data() {
    return {
      options: [
        { name: 'Все', value: 'ALL' },
        { name: 'Массажное кресло', value: 'massage-chair' },
        { name: 'Массажная накидка', value: 'massage-cape' },
      ],
      selected: 'Все',
      sortedCards: [],
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
  // methods: {
  //   setCategory(option) {
  //     this.sortedCards = [];
  //     const vm = this;
  //     this.CatalogData.cards.map((item) => {
  //       if (item.type === option.name) {
  //         vm.sortedCards.push(item);
  //         console.log('123');
  //       }
  //     });
  //     this.selected = option.name;
  //   },
  // },
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
