<template>
  <div>
    <img class="heat-vid-img" :src="massage.icon">
    <div class="heat-vid-title">{{ massage.title }}</div>
    <massage-description :massageDescription="massage.description"/>
    <massage-pic :massageImage="massage.picture" />
    <massage-parts :massageParts="massage.parts" />
  </div>
</template>

<script>
import MassageDescription from '../items/MassageDescription.vue';
import MassagePic from '../items/MassagePic.vue';
import MassageParts from '../items/MassageParts.vue';

export default {
  name: 'ContentMassage',
  components: {
    MassageDescription,
    MassagePic,
    MassageParts,
  },
  props: {
    massageData: Object,
  },
  data() {
    return {
      massage: this.massageData.massages[4],
    };
  },
  methods: {
    setMassage(MassageId) {
      this.massage = this.massageData.massages.find(
        (massage) => massage.id === MassageId,
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-massage {
  width: 100%;
  height: 100%;
}
.heat-vid-img {
  height: auto;
  max-width: 325px;
  width: 100%;
  left: 10%;
  top: 16%;
  position: absolute;
}
.heat-vid-title {
    left: 15%;
    top: 64%;
    position: absolute;
    color: #141414;
    font-size: 14px;
    font-weight: 800;
    text-align: justify;
}
.massage-description {
  top: 69%;
}
</style>
