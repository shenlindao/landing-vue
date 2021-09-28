<template>
  <v-container fluid>
      <v-subheader>Фильтрация по виду массажа:</v-subheader>
        <v-checkbox
        v-for="massage in massages"
        :key="massage.id"
        :label="massage.title"
        :value="massage.title"
        color="red"
        ></v-checkbox>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FilterMassage',
  computed: {
    ...mapGetters({
      getMassages: 'catalogVuex/getMassages',
    }),
    // massages() {
    //   return (this.getMassages);
    // },
    massages: {
      get() {
        return (this.getMassages);
      },
      set(value) {
        this.$store.dispatch('catalogVuex/FILTERED_CARDS', value);
      },
    },
  },
};
</script>

<style lang="scss">
</style>
