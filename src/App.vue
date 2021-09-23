<template>
  <div>
    <v-app>
    <lay-out>
        <router-view></router-view>
    </lay-out>
    </v-app>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import LayOut from './components/layout/Layout.vue';

export default {
  name: 'App',
  components: {
    LayOut,
  },
  methods: {
    ...mapActions({
      loadCatalog: 'catalogVuex/loadCatalog',
    }),
  },
  created() {
    this.loadCatalog(1000);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
