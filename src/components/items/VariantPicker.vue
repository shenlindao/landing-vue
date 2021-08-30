<template>
  <div>Выберите цвет:
  <ul>
    <li
      v-for="variant in variants"
      :key="variant.variantId"
      :style="{ backgroundColor: variant.color.hex }"
      @click="$emit('clickVariant', variant.variantId)"
    >
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  emits: ['clickVariant'],
  props: {
    variants: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  position: absolute;
  bottom: 23%;
  left: 10%;
  text-align: left;
  font-size: 12px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-top: 8px;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border: 2px solid #6db6ffa6;
  }
}
</style>
