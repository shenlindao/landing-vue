<template>
  <div class="desctop1" :style="{backgroundImage: 'url(' + bgimg + ')'}">
    <buy-block/>
    <product-pic/>
    <label-product>
      <img :src="require(`@/assets/pics/label.svg`)">
    </label-product>
  </div>
</template>

<script>
import ProductPic from '../items/ProductPic.vue';
import LabelProduct from '../items/LabelProduct.vue';
import BuyBlock from '../items/BuyBlock.vue';
// import BackgroundImg from '@/assets/pics/fujimo_oki-bg_1.jpg';

export default {
  name: 'Desctop1',
  components: {
    ProductPic,
    LabelProduct,
    BuyBlock,
    // BackgroundImg,
  },
  data() {
    return {
      // bgimg: BackgroundImg,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desctop1 {
  width: 100%;
  height: 750px;
  top: 0;
  background-size: cover;
  position: relative;
}
</style>
