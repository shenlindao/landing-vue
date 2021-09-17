<template>
  <div class="desctop">
    <img class="desctop3-panel-img" :src="panelImg" />
    <img class="desctop3-laptop-img" :src="laptopImg" />
    <uprav-label class="label-1" />
    <uprav-label class="label-2" />
  </div>
</template>

<script>
import desctopPanelImg from '@/assets/pics/fujimo_ton_panel.png';
import desctopLaptopImg from '@/assets/pics/fujimo_ton_laptop.png';
import UpravLabel from '../items/UpravLabel.vue';

export default {
  name: 'Desctop3',
  components: {
    UpravLabel,
  },
  data() {
    return {
      panelImg: desctopPanelImg,
      laptopImg: desctopLaptopImg,
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
  background-color: black;
  background-size: cover;
  position: relative;
}
.desctop3-panel-img {
  position: absolute;
  bottom: 0;
  left: 0;
}
.desctop3-laptop-img {
  position: absolute;
  bottom: 0;
  right: 0;
}
.label-1 {
  position: absolute;
  top: 16%;
  left: 25%;
}
.label-2 {
  position: absolute;
  bottom: 5%;
  right: 27%;
}
.uprav-label .uprav-label-img {
  transform: rotate(-180deg) !important;
}
</style>
