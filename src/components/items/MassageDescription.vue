<template>
  <div class="massage-description">
    {{ massageDescription }}
  </div>
</template>

<script>
export default {
  name: 'MassageDescription',
  props: {
    massageDescription: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
