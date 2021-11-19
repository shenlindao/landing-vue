<template>
  <div>
    <desctop-home :bannersData="bannersData"/>
  </div>
</template>

<script>
import DesctopHome from '../components/desctops/DesctopHome.vue';
import bannersData from '../data/banners';

export default {
  name: 'Home',
  components: {
    DesctopHome,
  },
  data() {
    return {
      bannersData,
    };
  },
};
</script>

<style scoped>
</style>
