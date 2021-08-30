<template>
  <div class="function-list">
  <ul>
    <li
      v-for="chairFunction in chairFunctions"
      :key="chairFunction.id"
      @click="$emit('clickFunction', chairFunction.id)"
    >{{chairFunction.title}}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'FunctionList',
  emits: ['clickFunction'],
  props: {
    chairFunctions: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.function-list {
  width: 345px;
  right: 15%;
  top: 20%;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
}
</style>
