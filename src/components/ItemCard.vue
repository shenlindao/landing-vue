<template>
  <div class="item_card" :style="{backgroundImage: 'url(' + bgimg + ')'}">
    <!-- <h3 :style="{color: headerColor}">{{item.name}}</h3> -->
    <buy-block/>
    <product-pic/>
    <label-product>
      <img :src="require(`@/assets/pics/label.svg`)">
    </label-product>
  </div>
</template>

<script>
import ProductPic from './items/ProductPic.vue';
import LabelProduct from './items/LabelProduct.vue';
import BuyBlock from './items/BuyBlock.vue';
import BackgroundImg from '@/assets/pics/fujimo_oki-bg_1.jpg';

export default {
  name: 'ItemCard',
  components: {
    LabelProduct,
    ProductPic,
    BuyBlock,
  },
  data() {
    return {
      headerColor: 'red',
      bgimg: BackgroundImg,
    };
  },
  // methods: {
  //   changeColor(color) {
  //     this.headerColor = color.color;
  //   },
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item_card {
  width: 100%;
  height: 750px;
  top: 0;
  background-size: cover;
  position: relative;
}
</style>
