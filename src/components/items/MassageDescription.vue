<template>
  <div class="massage-description"  v-html="massageDescription">
  </div>
</template>

<script>
export default {
  name: 'MassageDescription',
  props: {
    massageDescription: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.massage-description {
  height: auto;
  width: 420px;
  left: 7%;
  top: 64%;
  border-radius: 3px;
  position: absolute;
  color: #141414;
  font-size: 12px;
  text-align: justify;
}
@media (max-width: 1200px){
.massage-description {
  width: 340px;
  left: 3%;
  font-size: 11px;
}
}
</style>
