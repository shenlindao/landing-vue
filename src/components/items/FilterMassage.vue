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
        <p>{{thisMassage}}</p>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FilterMassage',
  computed: {
    ...mapGetters({
      getMassages: 'catalogVuex/getMassages',
      getFindMassage: 'catalogVuex/getFindMassage',
    }),
    massages() {
      return (this.getMassages);
    },
    findMassage: {
      get() {
        return this.$store.state.findMassage;
      },
      set(payload) {
        this.$store.dispatch('catalogVuex/FILTERED_BY_MSAASGE', payload);
      },
    },
    thisMassage() {
      return (this.getFindMassage);
    },
  },
};
</script>

<style lang="scss">
</style>
