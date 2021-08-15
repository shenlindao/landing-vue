<template>
  <div v-on:click="$emit('buttonClick')" class="button">
    {{buttonText}}
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    buttonText: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .button {
    width: 150px;
    height: 50px;
    background-color: rgb(177, 53, 53);
    color: rgb(231, 231, 231);
    &:hover {
      cursor: pointer;
      box-shadow: 0px 4px 10px rgb(0 0 0 / 25%);
    }
  }
</style>
