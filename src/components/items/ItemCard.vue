<template>
  <div class="item_card">
    <h3 :style="{color: headerColor}">{{item.name}}</h3>
    <action-button v-on:buttonClick="order" buttonText="Купить"/>
    <action-button v-on:buttonClick="alertHello" buttonText="Привет"/>
    <color-picker :colors=item.colors v-on:clickColor="changeColor($event)"/>
  </div>
</template>

<script>
import ActionButton from '../ActionButton.vue';
import ColorPicker from './ColorPicker.vue';

export default {
  name: 'ItemCard',
  components: {
    ActionButton,
    ColorPicker,
  },
  props: {
    item: Object,
  },
  data() {
    return {
      headerColor: 'red',
    };
  },
  methods: {
    order() {
      console.log('Привет!');
    },
    alertHello() {
      alert(this.itemName);
    },
    changeColor(color) {
      console.log(color);
      this.headerColor = color.color;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item_card {
  width: 400px;
  height: 300px;
  background-color: gray;
}
</style>
