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
  height: 580px;
  max-width: 360px;
  width: 100%;
  left: 50%;
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
