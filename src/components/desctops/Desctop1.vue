<template>
  <div class="desctop" :style="{backgroundImage: 'url(' + bgimg + ')'}">
    <buy-block
      v-on:variantCahnged="setVariant($event)"
      :itemData="itemData"
      :variant="variant"
    />
    <product-pic :chairImage="variant.picture"/>
    <label-product>
      <img :src="require(`@/assets/pics/label.svg`)">
    </label-product>
  </div>
</template>

<script>
import ProductPic from '../items/ProductPic.vue';
import LabelProduct from '../items/LabelProduct.vue';
import BuyBlock from '../items/BuyBlock.vue';
import BackgroundImg from '@/assets/pics/fujimo_oki-bg_1.jpg';

export default {
  name: 'Desctop1',
  components: {
    ProductPic,
    LabelProduct,
    BuyBlock,
  },
  props: {
    itemData: Object,
  },
  data() {
    return {
      bgimg: BackgroundImg,
      variant: this.itemData.variants[0],
    };
  },
  methods: {
    setVariant(variantId) {
      // console.log('from Desctop1', variantId);
      this.variant = this.itemData.variants.find(
        (variant) => variant.variantId === variantId,
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 750px;
  top: 0;
  background-size: cover;
  position: relative;
}
</style>
