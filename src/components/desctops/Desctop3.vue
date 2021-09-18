<template>
  <div class="desctop">
    <img class="desctop3-panel-img" :src="panelImg" />
    <img class="desctop3-laptop-img" :src="laptopImg" />
    <uprav-label class="label-1">
      <h2>{{h2Panel}}</h2>
      <p>{{pPanel}}</p>
    </uprav-label>
    <uprav-label class="label-2">
      <h2>{{h2Laptop}}</h2>
      <p>{{pLaptop}}</p>
    </uprav-label>
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
      h2Panel: 'Боковая панель управления',
      pPanel: 'Панель управления массажным креслом FUJIMO TON расположена на правом подлокотнике. Кнопки с символами интуитивно понятны и максимально облегчают использование.',
      h2Laptop: 'Сенсорное управление',
      pLaptop: 'Русифицированный 7-дюймовый пульт управления делает использование кресла простым и удобным.',
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
  transform: rotate(-180deg);
}
</style>
