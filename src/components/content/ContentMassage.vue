<template>
  <div>
    <massage-vid
      v-on:clickMassage="setMassage($event)"
      :massages="massageData.massages"
    />
    <div class="massage-description">
      {{ massage.description }}
    </div>
    <massage-pic :massageImage="massage.picture"/>
    <massage-parts
    :massagePart="massageData.massageParts"
    />
  <div>
  {{ massage.parts }}
  </div>
  </div>
</template>

<script>
import MassageVid from '../items/MassageVid.vue';
import MassagePic from '../items/MassagePic.vue';
import MassageParts from '../items/MassageParts.vue';

export default {
  name: 'ContentMassage',
  components: {
    MassageVid,
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
.massage-description {
  width: 800px;
  height: auto;
  padding: 10px;
  left: 15%;
  bottom: 5%;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  position: absolute;
  color: #141414;
  font-size: 10px;
  text-align: justify;
}
</style>
