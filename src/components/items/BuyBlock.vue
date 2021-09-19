<template>
  <div class="buyblock">
    <logo class="buyblocklogo" />
    <div class="buyblocktext">
      <h2>{{ itemData.title }}</h2>
      <p>{{ itemData.description }}</p>
    </div>
    <price-block>
      {{ variant.price.toLocaleString('ru-RU') }}
      <span>₽</span>
    </price-block>
    <v-main>
      <app-button>
        <img :src="require(`@/assets/pics/for_buy_button.svg`)" />
      </app-button>
    </v-main>
    <keep-alive>
    <variant-picker
      :variants="itemData.variants"
      v-on:clickVariant="changeVaiant($event)"
    />
    </keep-alive>
  </div>
</template>

<script>
import Logo from './Logo.vue';
import PriceBlock from './PriceBlock.vue';
import VariantPicker from './VariantPicker.vue';
import AppButton from './AppButton.vue';

export default {
  name: 'BuyBlock',
  emits: ['variantCahnged'],
  props: {
    itemData: Object,
    variant: Object,
  },
  components: {
    Logo,
    PriceBlock,
    AppButton,
    VariantPicker,
  },
  methods: {
    changeVaiant(variantId) {
      this.$emit('variantCahnged', variantId);
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
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
}
.v-main {
  position: absolute;
  left: 10%;
  bottom: 5%;
}
.theme--light.v-btn:focus {
  opacity: 0 !important;
}
.theme--light.v-btn {
  color: transparent;
}
@media (max-width: 1200px){
.buyblock {
  top: 18%;
  right: 2%;
  width: 306px;
}
}
</style>
