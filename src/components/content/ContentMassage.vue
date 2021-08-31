<template>
  <div>
    <massage-vid/>
    <massage-description/>
    <massage-pic/>
    <massage-parts/>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content-massage {
  width: 100%;
  height: 100%;
}
</style>
