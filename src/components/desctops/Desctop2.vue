<template>
  <div class="desctop" :style="{backgroundImage: 'url(' + chairFunction.background + ')'}">
    <h2>{{ chairFunction.title }}</h2>
    <function-list
      v-on:clickFunction="setFunction($event)"
      :chairFunctions="funcData.chairFunctions"
    />
  </div>
</template>

<script>
import FunctionList from '../items/FunctionList.vue';

export default {
  name: 'Desctop2',
  components: {
    FunctionList,
  },
  props: {
    funcData: Object,
  },
  data() {
    return {
      chairFunction: this.funcData.chairFunctions[0],
    };
  },
  methods: {
    setFunction(funcId) {
      this.chairFunction = this.funcData.chairFunctions.find(
        (chairFunction) => chairFunction.id === funcId,
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 750px;
  top: 0;
  background-size: cover;
  position: relative;
}
h2 {
    position: absolute;
    left: 10%;
    top: 10%;
    font-size: 30pt;
    background-color: #ffffffb5;
    padding: 10px;
}
</style>
