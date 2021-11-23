<template>
  <div class="desctop" :style="{ backgroundImage: 'url(' + bgimg + ')' }">
    <div class="hooper-main-block">
    <hooper :settings="hooperSettingsBanner">
      <slide v-for="(banner, i) in banners" :key="i">
        <div align="center">
          <img class="hooper-img" :src="banner.link" />
          </div>
      </slide>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
    </div>
    <div class="hooper-main-block">
      <h2>Популярные товары</h2>
      <hooper :settings="hooperSettingsPopular" class="slider-popular">
        <slide v-for="card in cards" :key="card.id">
          <v-card
            class="mx-3 my-5 catalog-card-filling"
            max-width="270"
            elevation="4"
            outlined
            shaped
            tile
          >
            <!-- Изображение -->
            <v-img
              height="250"
              :src="`${card.picture}`"
              :class="{ 'catalog-img-link': card.router }"
              @click="$router.push({ name: card.router })"
            />
            <!-- Рейтинг -->
            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="card.raiting"
                  background-color="orange lighten-3"
                  color="orange"
                  dense
                  half-increments
                  readonly
                  size="14"
                >
                </v-rating>
                <div class="grey--text ms-4">
                  {{ card.raiting }}
                </div>
              </v-row>
              <!-- Название -->
              <v-card-title>
                {{ card.type }}
                <br />
                {{ card.model }}
              </v-card-title>
              <!-- Цена -->
              <div class="card-price">
                {{ card.price.toLocaleString("ru-RU") }} <span>₽</span>
              </div>
              <!-- Доступное количество -->
              <div class="card-avalible">Доступно: {{ card.count }}</div>
              <!-- Кнопка "Купить" -->
              <app-button
              :payVariants="payVariants"
              :productName="card.type + ' ' + card.model"
              >
                <img :src="require(`@/assets/pics/for_buy_button.svg`)" />
              </app-button>
            </v-card-text>
          </v-card>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper';
import 'hooper/dist/hooper.css';
import BackgroundImg from '@/assets/pics/home-bg-1.jpg';
import cardService from '../../services/catalogService';
import AppButton from '../items/AppButton.vue';

export default {
  name: 'DesctopHome',
  components: {
    AppButton,
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  props: {
    bannersData: Object,
    payVariants: Array,
  },
  computed: {
    cards() {
      return cardService.getCards();
    },
  },
  data() {
    return {
      hooperSettingsBanner: {
        itemsToShow: 1,
        centerMode: false,
        autoPlay: true,
        playSpeed: '5000',
        wheelControl: false,
        infiniteScroll: true,
        pagination: 'fraction',
      },
      hooperSettingsPopular: {
        itemsToShow: 3,
        centerMode: false,
        autoPlay: true,
        playSpeed: '5000',
        wheelControl: false,
        infiniteScroll: true,
      },
      bgimg: BackgroundImg,
      banners: this.bannersData.content,
    };
  },
};
</script>

<style scoped lang="scss">
.desctop {
  width: 100%;
  top: 0;
  background-size: cover;
  position: relative;
}
.hooper-main-block {
  margin-top: 75px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.hooper-main-block:last-child {
  padding-bottom: 100px;
}
.hooper {
  height: auto;
  width: auto;
}
.hooper-slide {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
ul.hooper-track {
  padding: 0;
}
.slider-popular {
  max-width: 900px;
  width: 100%;
  overflow: hidden;
  position: inherit;
  left: 50%;
  transform: translate(-50%, 0);
}
.v-card__text {
  width: unset;
}
svg.icon.icon-arrowLeft,
svg.icon.icon-arrowRight {
  width: 45px !important;
  height: 45px !important;
}
button.buy-btn {
  padding: unset !important;
}
.hooper-img {
  border-radius: 30px;
  height: 88vh;
  width: auto;
}
.popular-carusel {
  max-width: 400px;
  min-height: 620px;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 100px);
}
.popular-carusel .v-window__container {
  flex-direction: row !important;
}
.v-footer {
  display: block;
  position: absolute !important;
  bottom: 0 !important;
  width: 100% !important;
}
.v-card__title {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.0125em;
  line-height: 1.5rem;
  word-break: unset;
  padding: 16px 0;
}
.v-card__text {
  text-align: left;
}
.card-price {
  font-size: 30px;
  margin-bottom: 10px;
}
.card-avalible {
  margin-bottom: 10px;
}
.catalog-card-filling {
  max-height: 475px;
  left: 47%;
  transform: translate(-50%, 0);
}
.catalog-img-link {
  cursor: pointer;
}
</style>

<style lang="scss">
ul.hooper-track {
  padding: 0;
}
svg.icon.icon-arrowLeft,
svg.icon.icon-arrowRight {
  width: 45px !important;
  height: 45px !important;
}
.hooper-next, .hooper-prev {
  padding: 0 !important;
  transform: translateY(0) !important;
}
</style>
