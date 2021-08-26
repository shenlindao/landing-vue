<template>
    <div class="priceblock">
      <slot/>
    </div>
</template>

<script>
export default {
  name: 'PriceBlock',
  data() {
    return {
      price: '219 000',
    };
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

    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: 53px;
    letter-spacing: 0em;
    text-align: left;
  }
</style>
