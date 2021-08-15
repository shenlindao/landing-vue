<template>
  <div id="app">
    <div class="items">
      <ItemCard
        v-for="item in items"
        :itemName="item.name"
        :itemColors="item.colors"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script>
import ItemCard from './components/items/ItemCard.vue';

const ITEM_COLORS = [
  { name: 'Красный', color: 'red' },
  { name: 'Зеленый', color: 'green' },
  { name: 'Голубой', color: 'blue' },
  { name: 'Черный', color: 'black' },
];
const ITEMS = [
  { id: 1, name: 'Крусло 1', colors: ITEM_COLORS },
  { id: 2, name: 'Крусло 2', colors: ITEM_COLORS },
  { id: 3, name: 'Крусло 3', colors: ITEM_COLORS },
  { id: 4, name: 'Крусло 4', colors: ITEM_COLORS },
];

export default {
  name: 'App',
  components: {
    ItemCard,
  },
  data() {
    return {
      items: ITEMS,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
