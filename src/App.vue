<template>
  <div>
    <v-app>
    <lay-out>
    <div class="items">
      <ItemCard
        v-for="item in items"
        :item="item"
        :key="item.id"
      />
    </div>
    </lay-out>
    </v-app>
  </div>
</template>

<script>
import ItemCard from './components/ItemCard.vue';
import LayOut from './components/layout/Layout.vue';

const ITEMS = [
  { id: 1, name: 'Desctop 1' },
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
