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
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.v-input--selection-controls {
    margin-top: 0 !important;
    padding-top: 0 !important;
}
.v-messages {
    min-height: 0 !important;
}
label.v-label.theme--light {
    font-size: 13px;
    color: #1f1f1f;
}
.theme--light.v-subheader {
    color: unset;
}
</style>
