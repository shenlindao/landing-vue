<template>
  <div class="desctop" :style="{ backgroundImage: 'url(' + bgimg + ')' }">
    <swiper :options="swiperOptionsBanner">
      <swiper-slide v-for="(item, i) in items" :key="i">
        <div align="center"><img :src="item.src" /></div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
<div class="swiper">
    <swiper :options="swiperOptionsPopular" class="slider-popular">
      <swiper-slide v-for="card in cards" :key="card.id">
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
            <app-button>
              <img :src="require(`@/assets/pics/for_buy_button.svg`)" />
            </app-button>
          </v-card-text>
        </v-card>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { Autoplay } from 'swiper';
import BackgroundImg from '@/assets/pics/home-bg-1.jpg';
import cardService from '../../services/catalogService';
import AppButton from '../items/AppButton.vue';

Swiper.use([Autoplay]);

export default {
  name: 'DesctopHome',
  components: {
    Swiper,
    SwiperSlide,
    AppButton,
  },
  computed: {
    cards() {
      return cardService.getCards();
    },
  },
  data() {
    return {
      swiperOptionsBanner: {
        slidesPerView: 1,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        speed: 500,
        initialSlide: 0,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        paginationClickable: true,
      },
      swiperOptionsPopular: {
        slidesPerView: 3,
        autoplay: {
          disableOnInteraction: false,
          delay: 2000,
        },
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      bgimg: BackgroundImg,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
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
.home-carusel {
  max-width: 90%;
  max-height: 70vh;
  width: auto;
}
.slider-popular {
  max-width: 900px;
  width: 100%;
  overflow: hidden;
  position: inherit;
  left: 50%;
  transform: translate(-50%, 0);
}
.swiper {
  position: relative;
}
.swiper-slide {
  height: 100%;
  width: 100%;
  margin-top: 100px;
  overflow: hidden;
}
.v-card__text {
  width: unset;
}
button.buy-btn {
  padding: unset !important;
}
.slider-popular .swiper-slidec {
  max-height: 75vh;
  margin: 20px 0 50px 0;
  overflow: visible;
}
.swiper-slide img {
  border-radius: 30px;
  max-height: 60vh;
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
