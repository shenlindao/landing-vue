<template>
  <div class="function-content">
    <func-massage-content/>
  </div>
</template>

<script>
import FuncMassageContent from './FuncMassageContent.vue';

export default {
  name: 'FunctionContent',
  components: {
    FuncMassageContent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.function-content {
  width: 100%;
  height: 100%;
  color: #141414;
}
</style>
