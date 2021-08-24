<template>
  <div class="item_card" :style="{backgroundImage: 'url(' + bgimg + ')'}">
    <!-- <h3 :style="{color: headerColor}">{{item.name}}</h3> -->
    <buy-block/>
  </div>
</template>

<script>
import BuyBlock from './items/BuyBlock.vue';
import BackgroundImg from '@/assets/pics/fujimo_oki-bg_1.jpg';

export default {
  name: 'ItemCard',
  components: {
    BuyBlock,
  },
  data() {
    return {
      headerColor: 'red',
      bgimg: BackgroundImg,
    };
  },
  methods: {
    // Зачем метод из списка методов вытащил?
    changeColor(color) {
      console.log(color);
      this.headerColor = color.color;
    },
  },
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
