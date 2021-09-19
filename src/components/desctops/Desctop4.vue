<template>
  <div class="desctop" :style="{backgroundImage: 'url(' + bgSpecImg + ')'}">
    <h2 :style="{color: '#fff'}">Технические характеристики</h2>
    <specifications
    :specifics="specificData.specifics"
    />
    <div class="chairs">
    <img class="chair-fas" :src="chairFasImg" />
    <img class="chair-profile" :src="chairProfileImg" />
    </div>
  </div>
</template>

<script>
import specImg from '@/assets/pics/bg-desctop4.jpg';
import Specifications from '../items/Specifications.vue';
import chairFas from '@/assets/pics/chair-fas.svg';
import chairProfile from '@/assets/pics/chair-profile.svg';

export default {
  components: { Specifications },
  name: 'Desctop4',
  props: {
    specificData: Object,
  },
  data() {
    return {
      bgSpecImg: specImg,
      chairFasImg: chairFas,
      chairProfileImg: chairProfile,
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
h2 {
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0);
  font-size: 22pt;
}
.chairs {
  position: absolute;
  top: 25%;
  right: 10%;
}
.chair-fas {
  margin-right: 80px;
}
@media (max-width: 1200px){
.desctop {
  height: 600px;
}
}
</style>
