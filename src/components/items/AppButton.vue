<template>
  <div  v-on:click="$emit('buttonClick')" class="button">
  </div>
</template>

<script>
export default {
  name: 'AppButton',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .button {
    height: 55px;
    width: 220px;
    border-radius: 3px;
    background: #ED1B24;
    position: absolute;
    left: 10%;
    bottom: 5%;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 2px 2px rgb(0 0 0 / 25%);
    }
  }
  .button img {
    position: absolute;
    width: 60px;
    height: auto;
    left: 10%;
    bottom: 5%;
  }
</style>
