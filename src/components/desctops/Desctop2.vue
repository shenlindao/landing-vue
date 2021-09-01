<template>
  <div class="desctop" :style="{backgroundImage: 'url(' + chairFunction.background + ')'}">
    <h2>{{chairFunction.title}}</h2>
    <function-list
      v-on:clickFunction="setFunction($event)"
      :chairFunctions="funcData.chairFunctions"
    />
    <content-massage
    v-if="chairFunction.id == '1'"
    :massageData="massageData"
    />
  </div>
</template>

<script>
import FunctionList from '../items/FunctionList.vue';
import ContentMassage from '../content/ContentMassage.vue';
import massageData from '@/data/massage';

export default {
  name: 'Desctop2',
  components: {
    FunctionList,
    ContentMassage,
  },
  props: {
    funcData: Object,
  },
  data() {
    return {
      chairFunction: this.funcData.chairFunctions[0],
      massageData,
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
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0);
  font-size: 22pt;
}
</style>
