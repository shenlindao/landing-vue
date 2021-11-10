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
        <v-btn class="mx-4 white--text" icon href="https://vk.com/shenlin">
        <font-awesome-icon :icon="['fab', 'vk']" />
        </v-btn>
        <v-btn class="mx-4 white--text" icon href="https://t.me/Shenlindao">
        <font-awesome-icon :icon="['fab', 'telegram-plane']" />
        </v-btn>
        <v-btn class="mx-4 white--text" icon href="https://wa.me/+79653693279">
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Разработка проекта - Кривонос Артём
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
      ['fab', 'vk'],
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
