<template>
  <div class="product-pic">
    <img class="product-img" :src="require(`@/assets/pics/fujimo_oki_1.png`)">
  </div>
</template>

<script>
export default {
  name: 'ProductPic',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .product-pic {
    height: 533px;
    max-width: 617px;
    width: 100%;
    left: 18%;
    top: 20%;
    position: absolute;
  }
  .product-img {
    max-width: 100%;
  }
</style>
