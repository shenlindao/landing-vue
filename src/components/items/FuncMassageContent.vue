<template>
  <div class="desctop" :style="{backgroundImage: 'url(' + chairFunction.background + ')'}">
    <h2>{{ chairFunction.title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'FuncMassageContent',
  props: {
    funcData: Object,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
