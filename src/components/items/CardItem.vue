<template>
  <div>
    <!-- Изображение -->

    <v-img
      height="250"
      :src="`${picture}`"
      :class="{ 'catalog-img-link': router }"
      @click="$router.push({ name: router })"
    />

    <!-- Рейтинг -->
    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="raiting"
          background-color="orange lighten-3"
          color="orange"
          dense
          half-increments
          readonly
          size="14"
        >
        </v-rating>
        <div class="grey--text ms-4">
          {{ raiting }}
        </div>
      </v-row>

      <!-- Название -->
      <v-card-title>
        {{ type }}
        <br />
        {{ model }}
      </v-card-title>

      <!-- Цена -->
      <div class="card-price">
        {{ price.toLocaleString("ru-RU") }} <span>₽</span>
      </div>

      <!-- Доступное количество -->
      <div class="card-avalible">Доступно: {{ count }}</div>

      <!-- Кнопка "Купить" -->
      <app-button>
        <img :src="require(`@/assets/pics/for_buy_button.svg`)" />
      </app-button>
    </v-card-text>

    <slot />
  </div>
</template>

<script>
import AppButton from './AppButton.vue';

export default {
  components: { AppButton },
  name: 'CardItem',
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
.catalog-card-filling {
  max-height: 475px;
}
.catalog-img-link {
  cursor: pointer;
}
</style>
