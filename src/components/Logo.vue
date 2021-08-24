<template>
  <div>
    <div class="header_container">
      <img :src="require(`@/assets/pics/FUJIMO_LOGO_R.svg`)" :alt="imgDesc">
      <p>{{companyName}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Logo',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  position: absolute;
  height: 20px;
  width: 90px;
  left: 6%;
  top: 17px;
  border-radius: 0px;
}
</style>
