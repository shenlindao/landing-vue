<template>
  <div>
    <v-app>
    <lay-out>
      <item-page/>
    </lay-out>
    </v-app>
  </div>
</template>

<script>
import LayOut from './components/layout/Layout.vue';
import routes from './data/routes';
import ItemPage from './components/layout/ItemPage.vue';

export default {
  name: 'App',
  components: {
    LayOut,
    ItemPage,
  },
  data() {
    return {
      currentRoute: window.location.pathname,
    };
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute];
      const matching = `./pages/${matchingView}.vue`;
      const four0four = './pages/404.vue';
      return matchingView ? matching : four0four;
    },
  },
  render(h) {
    return h(this.ViewComponent);
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
  margin-top: 0;
}
</style>
