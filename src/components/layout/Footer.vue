<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="black lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Разработка проекта на Vue - Кривонос Артём
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Дизайн проекта на Figma - Захаров Олег
      </v-card-text>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }}<strong></strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    icons: [
      'mdi-vk',
      'mdi-instagram',
      'mdi-facebook',
    ],
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-footer {
  display: block;
}
</style>
