<template>
  <div>
    <div class="label-product">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabelProduct',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .label-product {
    position: absolute;
    left: 16%;
    bottom: 8%;
    max-width: 200px;
    max-height: 200px;
    width: 100%;
    height: 100%;
  }
  .label-product img {
    width: 100%;
  }
</style>
