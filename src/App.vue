<template>
  <div>
    <v-app>
    <lay-out>
    <div class="items">
      <Desctop1
      :itemData="itemData"
      />
      <Desctop2
      :funcData="funcData"
      />
    </div>
    </lay-out>
    </v-app>
  </div>
</template>

<script>
import Desctop1 from './components/desctops/Desctop1.vue';
import Desctop2 from './components/desctops/Desctop2.vue';
import LayOut from './components/layout/Layout.vue';
import itemData from './data/items';
import funcData from './data/functions';

const NotFound = { template: '<p>Страница не найдена</p>' };
const Home = { template: '<p>главная</p>' };
const About = { template: '<p>о нас</p>' };

const routes = {
  '/': Home,
  '/about': About,
};

export default {
  name: 'App',
  components: {
    Desctop1,
    Desctop2,
    LayOut,
  },
  data() {
    return {
      itemData,
      funcData,
      currentRoute: window.location.pathname,
    };
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound;
    },
  },
  render(h) { return h(this.ViewComponent); },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
