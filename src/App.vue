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
import LayOut from './components/layout/Layout.vue';

export default {
  name: 'App',
  components: {
    LayOut,
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
