<template>
  <div class="desctop" :style="{backgroundImage: 'url(' + bgimg + ')'}">
    <specifications/>
  </div>
</template>

<script>
import specImg from '@/assets/pics/fujimo_oki-bg_1.jpg';
import Specifications from '../items/Specifications.vue';

export default {
  components: { Specifications },
  name: 'Desctop4',
  data() {
    return {
      bgSpecImg: specImg,
    };
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
@media (max-width: 1200px){
.desctop {
  height: 600px;
}
}
</style>
