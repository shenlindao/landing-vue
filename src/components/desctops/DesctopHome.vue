<template>
  <div class="desctop" :style="{ backgroundImage: 'url(' + bgimg + ')' }">
    <v-carousel
    cycle
    interval="10000"
    hide-delimiter-background
    show-arrows-on-hover
    class="home-carusel"
    height="70vh"
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import BackgroundImg from '@/assets/pics/home-bg-1.jpg';

export default {
  name: 'DesctopHome',
  components: {},
  props: {},
  data() {
    return {
      bgimg: BackgroundImg,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 120vh;
  top: 0;
  background-size: cover;
  position: relative;
}
.home-carusel {
  max-width: 90%;
  width: auto;
  left: 50%;
  transform: translate(-50%, 100px);
}
@media (max-width: 1200px) {
  .desctop {
    height: 600px;
  }
}
</style>
