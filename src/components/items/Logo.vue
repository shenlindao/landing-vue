<template>
  <div>
    <div class="header_container">
      <img
      :src="require(`@/assets/pics/fujimo_logo.svg`)"
      @click="$router.push({ name: 'home' })"
      >
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
  cursor: pointer;
}
</style>
