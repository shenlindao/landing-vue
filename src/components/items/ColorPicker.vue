<template>
  <ul>
    <li
      v-for="color in colors"
      :key="color.name"
      :style="{color: color.color}"
      @click="$emit('clickColor', color)"
    >
      {{color.name}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ColorPicker',
  props: {
    colors: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {
  list-style-type: none;
}
</style>
