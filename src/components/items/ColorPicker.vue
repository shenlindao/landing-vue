<template>
  <div>{{colorPickerLine}}
  <ul>
    <li
      v-for="color in colors"
      :key="color.id"
      :style="{ backgroundColor: color.hex }"
    >
    </li>
  </ul>
  </div>
</template>

<script>
const COLORPICKER = [
  {
    id: 0, name: 'Коричневый', hex: '#7d361e', price: 219000,
  },
  {
    id: 1, name: 'Бежевый', hex: '#fcefba', price: 230000,
  },
  {
    id: 2, name: 'Черный', hex: '#000000', price: 240000,
  },
  {
    id: 3, name: 'Бронзовый', hex: '#ff7b13', price: 250000,
  },
];
export default {
  name: 'ColorPicker',
  data() {
    return {
      colorPickerLine: 'Выберите цвет:',
      colors: COLORPICKER,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div {
  position: absolute;
  bottom: 23%;
  left: 10%;
  text-align: left;
  font-size: 12px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  margin-top: 8px;
  display: inline-block;
  border-radius: 50%;
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
    border: 2px solid #6db6ffa6;
  }
}
</style>
