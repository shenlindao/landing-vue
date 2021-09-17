<template>
  <div>
    <massage-description :massageDescription="zgDescription"/>
    <massage-pic :massageImage="zgPicture" />
  </div>
</template>

<script>
import MassageDescription from '../items/MassageDescription.vue';
import MassagePic from '../items/MassagePic.vue';
import ZgGbWomen from '@/assets/pics/zero-gravity-women.png';

export default {
  name: 'ContentMassage',
  components: {
    MassageDescription,
    MassagePic,
  },
  data() {
    return {
      zgDescription: 'Центральным в понимании функции Zero Gravity (Невесомости) , которая призвана предотвратить и облегчить боли в спине и шее, является концепция "нейтрального положения". Такое положение человека в массажном кресле - это установленный набор углов наклона, который позволяет позвоночнику быть максимально расслабленным и устойчивым к нагрузкам. Это, в свою очередь, снижает давление на межпозвоночные диски, улучшает кровообращение и снимает напряжение мягких тканей, связанное со статическим положением покоя.',
      zgPicture: ZgGbWomen,
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
.massage-description {
  top: 40%;
  max-width: 354px;
}
.massage-pic {
  height: 580px;
  max-width: 508px;
  width: 100%;
  left: 54%;
  top: 15%;
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
