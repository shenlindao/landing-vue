<template>
  <v-container fluid>
      <v-subheader>Фильтрация по виду массажа:</v-subheader>
        <v-checkbox
        v-for="massage in massages.slice(0,-1)"
        :key="massage.id"
        :label="massage.title"
        :value="massage.title"
        color="red"
        v-model="findMassage"
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
    massages() {
      return (this.getMassages);
    },
    findMassage: {
      get() {
        return this.$store.state.catalogVuex.filters.findMassage;
      },
      set(findMassage) {
        this.$store.dispatch('catalogVuex/setFilters', {
          ...this.$store.state.catalogVuex.filters,
          findMassage,
        });
      },
    },
  },
};
</script>

<style scoped lang="scss">
</style>
