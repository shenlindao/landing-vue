<template>
  <div class="item_card" :style="{backgroundImage: bgimg}">
    <h3 :style="{color: headerColor}">{{item.name}}</h3>
    <action-button v-on:buttonClick="order" buttonText="Купить"/>
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
      bgimg: 'require(`@/assets/pics/fujimo_oki-bg_1.jpg`)',
    };
  },
  methods: {
    order() {
      console.log('Привет!');
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
  width: 100%;
  height: 600px;
}
</style>
