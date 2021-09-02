<template>
  <div class="massage-description">
    {{ massageDescription }}
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
  height: 210px;
  width: 420px;
  left: 7%;
  bottom: 8%;
  border-radius: 3px;
  position: absolute;
  color: #141414;
  font-size: 12px;
  text-align: justify;
}
@media (max-width: 1024px){
.massage-description {
  top: 64%;
  width: 340px;
  left: 3%;
  font-size: 11px;
}
}
</style>
