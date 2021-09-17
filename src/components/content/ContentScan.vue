<template>
  <div>
    <img class="heat-vid-img" :src="scanBgPicture">
    <massage-description :massageDescription="scanDescription"/>
    <massage-pic :massageImage="scanPictureChair" />
  </div>
</template>

<script>
import MassageDescription from '../items/MassageDescription.vue';
import MassagePic from '../items/MassagePic.vue';
import BgElementScan from '@/assets/pics/bg-element-scan.png';
import chairScan from '@/assets/pics/fujimo_ton_black_bright.png';

export default {
  name: 'ContentScan',
  components: {
    MassageDescription,
    MassagePic,
  },
  data() {
    return {
      scanDescription: 'Сканирование роста— массажное кресло способно определять комплекцию тела пользователя, чтобы повысить точность массирования проблемных зон. Сканер представлен системой оптического наблюдения. Данная функция совмещается с функцией поиска «зажатых» областей, а также с системой определения местоположения пользователя в кресле. Оно автоматически подстраивает длину, ширину и глубину хода исполнительных массажных механизмов под конкретного человека, что позволяет значительно повысить эффективность сеансов массажа.',
      scanBgPicture: BgElementScan,
      scanPictureChair: chairScan,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-massage {
  width: 100%;
  height: 100%;
}
h2 {
  color: #fff;
}
.heat-vid-img {
  height: auto;
  max-width: 325px;
  width: 100%;
  left: 8%;
  top: 16%;
  position: absolute;
}
.massage-description {
  max-width: 354px;
  color: #fff;
}
.massage-pic {
  height: 580px;
  max-width: 524px;
  width: 100%;
  left: 54%;
  top: 25%;
  transform: translate(-50%, 0);
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
.massage-img {
  max-width: 100%;
  max-height: 100%;
}
@media (max-width: 1200px){
.massage-pic {
  left: 56%;
}
}
</style>
