<template>
   <v-card
    class="mx-auto function-list"
   >
    <v-list>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item
          v-for="chairFunction in chairFunctions"
          :key="chairFunction.id"
          @click="$emit('clickFunction', chairFunction.id)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="chairFunction.title">
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'FunctionList2',
  emits: ['clickFunction'],
  props: {
    chairFunctions: Array,
  },
  data() {
    return {
      selectedItem: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.function-list {
  width: 345px;
  right: 0;
  top: 45%;
  transform: translate(0, -50%);
  background: #E4E4E4;
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
.v-list-item__content {
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 12px 30px;
  flex: 0 0 auto;
}
.theme--light.v-list {
  background: #E4E4E4;
  color: rgba(0, 0, 0, 0.87);
  font-weight: 800;
  padding: 0;
}
.v-application .primary--text {
  color: #141414 !important;
  caret-color: #141414 !important;
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
@media (max-width: 1200px){
.v-list-item {
  padding: 0;
}
.v-list-item__content {
  padding: 12px 18px;
}
.function-list {
  width: 255px;
  top: 35%;
}
}
</style>
