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
  height: 533px;
  max-width: 617px;
  width: 100%;
  left: 15%;
  top: 20%;
  position: absolute;
}
.product-img {
  max-width: 100%;
}
@media (max-width: 1024px){
.product-pic {
  height: auto;
  max-width: 448px;
  left: 9%;
  top: 25%;
}
}
</style>
