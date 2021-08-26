<template>
  <div class="buyblock">
    <logo class="buyblocklogo"/>
    <div class="buyblocktext">
    <h2>{{buyBlockH1}}</h2>
    <p>{{buyBlockP}}</p>
    </div>
    <price-block>
      {{actualPrice}}
      <span>{{priceBlockSpan}}</span>
    </price-block>
    <color-picker v-on:clickColor="changeColor($event)"/>
    <app-button v-on:buttonClick="order">
      <img :src="require(`@/assets/pics/for_buy_button.svg`)">
    </app-button>
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
import Logo from './Logo.vue';
import PriceBlock from './PriceBlock.vue';
import AppButton from './AppButton.vue';
import ColorPicker from './ColorPicker.vue';

export default {
  name: 'BuyBlock',
  props: {
    color: Object,
  },
  components: {
    Logo,
    PriceBlock,
    AppButton,
    ColorPicker,
  },
  data() {
    return {
      buyBlockH1: 'Интеллектуальный помощник',
      buyBlockP: 'Массажный механизм с точностью иммитирует человеческие руки',
      priceBlockSpan: '₽',
      actualPrice: '219000',
    };
  },
  methods: {
    order() {
      console.log('Привет!');
    },
    changeColor(color) {
      this.actualPrice = color.price;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .buyblock {
    width: 345px;
    height: 425px;
    right: 15%;
    top: 20%;
    background: rgba(255, 255, 255, 0.85);
    border-radius: 3px;
    position: absolute;
    color: #141414;
  }
  .buyblocklogo {
    position: absolute;
    width: 208px;
    height: auto;
    left: 10%;
    top: 2%;
    text-align: left;
    margin: 10px 0 10px 0;
  }
  .buyblocktext {
    position: absolute;
    height: auto;
    left: 10%;
    top: 15%;
    text-align: left;
    margin: 10px 0 10px 0;
    width: 100%;
    max-width: 275px;
  }
  h2 {
    margin: 10px 0 10px 0;
    font-size: 21px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 15px;
  }
  .appbutton img {
    margin-top: 15px;
  }
  .priceblock span {
    font-size: 25px;
    font-style: normal;
    font-weight: 100;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
</style>
