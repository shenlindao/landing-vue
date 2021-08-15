<template>
  <div>
    <img :src="require(`@/assets/pics/${fileName}`)" :alt="imgDesc">
    <p>{{companyName}}</p>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    fileName: String,
    companyName: String,
    imgDesc: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  width: 200px;
}
</style>
