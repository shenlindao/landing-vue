<template>
  <div class="massage-pic">
    <img class="massage-img" :src="massageImage" />
  </div>
</template>

<script>
export default {
  name: 'massagePic',
  props: {
    massageImage: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.massage-pic {
  height: 400px;
  max-width: 400px;
  width: 100%;
  left: 15%;
  top: 25%;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
.massage-img {
  max-width: 100%;
  max-height: 100%;
}
</style>
