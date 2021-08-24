<template>
  <div class="header">
    <logo/>
    <header-href/>
  </div>
</template>

<script>
import HeaderHref from '../items/HeaderHref.vue';
import Logo from '../items/Logo.vue';

export default {
  name: 'Header',
  components: {
    Logo,
    HeaderHref,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  height: 54px;
  width: 100%;
  left: 0px;
  top: 0px;
  border-radius: 0px;
  position: fixed;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgb(0 0 0 / 30%);
  z-index: 100;
}
</style>
