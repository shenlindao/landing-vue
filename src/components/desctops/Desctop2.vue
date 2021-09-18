<template>
  <div class="desctop" :style="{backgroundImage: 'url(' + chairFunction.background + ')'}">
    <h2 :style="{color: [chairFunction.id == '4' ? '#fff': '#000']}"
    >{{chairFunction.title}}</h2>
    <function-list
      v-on:clickFunction="setFunction($event)"
      :chairFunctions="funcData.chairFunctions"
    />
    <keep-alive>
    <content-massage
    v-if="chairFunction.id == '1'"
    :massageData="massageData"
    />
    </keep-alive>
    <content-heat
    v-if="chairFunction.id == '2'"
    :massageData="massageData"
    />
    <content-zero-gravity
    v-if="chairFunction.id == '3'"
    :massageData="massageData"
    />
    <content-scan
    v-if="chairFunction.id == '4'"
    :massageData="massageData"
    />
  </div>
</template>

<script>
import FunctionList from '../items/FunctionList.vue';
import ContentMassage from '../content/ContentMassage.vue';
import massageData from '@/data/massage';
import ContentHeat from '../content/ContentHeat.vue';
import ContentZeroGravity from '../content/ContentZeroGravity.vue';
import ContentScan from '../content/ContentScan.vue';

export default {
  name: 'Desctop2',
  components: {
    FunctionList,
    ContentMassage,
    ContentHeat,
    ContentZeroGravity,
    ContentScan,
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
