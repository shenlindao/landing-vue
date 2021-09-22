<template>
  <div class="catalog-cards">
    <v-card
      class="mx-3 my-12 catalog-card-filling"
      max-width="270"
      elevation="4"
      outlined
      shaped
      tile
      v-for="card in cards"
      :key="card.id"
    >
      <!-- Изображение -->
      <v-img height="250" :src="`${card.picture}`"> </v-img>

      <!-- Рейтинг -->
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="card.raiting"
            color="amber"
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
        <div class="card-price">{{ card.price.toLocaleString('ru-RU') }} <span>₽</span></div>

        <!-- Доступное количество -->
        <div class="card-avalible">Доступно: {{ card.count }}</div>

        <!-- Кнопка "Купить" -->
        <app-button>
          <img :src="require(`@/assets/pics/for_buy_button.svg`)" />
        </app-button>

      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  components: { AppButton },
  name: 'CatalogCards',
  props: {
    cards: Array,
  },
};
</script>

<style scoped lang="scss">
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
.card-price {
  font-size: 30px;
  margin-bottom: 10px;
}
.card-avalible {
  margin-bottom: 10px;
}
</style>
