<template>
  <div class="product-pic">
    <img class="product-img" :src="chairImage">
  </div>
</template>

<script>

export default {
  name: 'ProductPic',
  props: {
    chairImage: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product-pic {
  height: auto;
  max-width: 595px;
  width: 100%;
  left: 16%;
  top: 20%;
  position: absolute;
}
.product-img {
  max-width: 100%;
}
@media (max-width: 1200px){
.product-pic {
  height: auto;
  max-width: 448px;
  top: 25%;
}
}
</style>
