<template>
  <div id="app">
    <lay-out>
    <div class="items">
      <ItemCard
        v-for="item in items"
        :item="item"
        :key="item.id"
      />
    </div>
    </lay-out>
  </div>
</template>

<script>
import ItemCard from './components/items/ItemCard.vue';
import LayOut from './components/layout/Layout.vue';

const ITEM_COLORS = [
  { name: 'Красный', color: 'red' },
  { name: 'Зеленый', color: 'green' },
  { name: 'Голубой', color: 'blue' },
  { name: 'Черный', color: 'black' },
];
const ITEMS = [
  { id: 1, name: 'Desctop 1', colors: ITEM_COLORS },
  { id: 2, name: 'Desctop 2', colors: ITEM_COLORS },
  { id: 3, name: 'Desctop 3', colors: ITEM_COLORS },
  { id: 4, name: 'Desctop 4', colors: ITEM_COLORS },
];

export default {
  name: 'App',
  components: {
    ItemCard,
    LayOut,
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
