<template>
  <div class="massage-vid">
  </div>
</template>

<script>
export default {
  name: 'MassageVid',
  emits: [''],
  props: {
  },
  components: {
  },
  methods: {
    // changeVaiant(variantId) {
    //   // console.log('changeVaiant', variantId);
    //   this.$emit('variantCahnged', variantId);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.massage-vid {
  width: 100px;
  height: 400px;
  left: 5%;
  top: 25%;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
</style>
