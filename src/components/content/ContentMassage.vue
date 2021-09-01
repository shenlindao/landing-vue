<template>
  <div>
    <massage-vid
      v-on:clickMassage="setMassage($event)"
      :massages="massageData.massages"
    />
    <massage-description :massageDescription="massage.description"/>
    <massage-pic :massageImage="massage.picture" />
    <massage-parts :massageParts="massage.parts" />
  </div>
</template>

<script>
import MassageVid from '../items/MassageVid.vue';
import MassageDescription from '../items/MassageDescription.vue';
import MassagePic from '../items/MassagePic.vue';
import MassageParts from '../items/MassageParts.vue';

export default {
  name: 'ContentMassage',
  components: {
    MassageVid,
    MassageDescription,
    MassagePic,
    MassageParts,
  },
  props: {
    massageData: Object,
  },
  data() {
    return {
      massage: this.massageData.massages[0],
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
</style>
