<template>
  <div class="function-list">
  <ul>
    <li
      v-for="chairFunction in chairFunctions"
      :key="chairFunction.id"
      @click="$emit('clickFunction', chairFunction.id)"
    >
    <div class="list">{{chairFunction.title}}</div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: 'FunctionList2',
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
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  background: #CBCBCB;
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
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  height: 57px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
}
.list {
  left: 12%;
  top: 50%;
  transform: translate(0, -50%);
  position: absolute;
}
</style>
