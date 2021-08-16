<template>
<div>
  <my-header/>
  <div><slot/></div>
  <my-footer/>
</div>
</template>

<script>
import MyFooter from './Footer.vue';
import MyHeader from './Header.vue';

export default {
  name: 'LayOut',
  components: {
    MyFooter,
    MyHeader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
