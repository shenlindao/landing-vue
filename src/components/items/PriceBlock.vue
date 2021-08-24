<template>
  <div>
    <div class="priceblock">
      <p>₽</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PriceBlock',
  props: {
    companyName: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .priceblock {
    position: absolute;
    height: auto;
    left: 10%;
    top: 46%;
    text-align: left;
    margin: 0;
    width: 100%;
    max-width: 275px;
  }
</style>
