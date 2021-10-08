<template>
  <v-container fluid>
      <v-subheader>Фильтрация по виду массажа:</v-subheader>
        <v-checkbox
        v-for="massage in massages.slice(0, -1)"
        :key="massage.id"
        :label="massage.title"
        :value="massage.title"
        color="red"
        v-model="findMassage"
        @change="$emit('setMassage', findMassage)"
        ></v-checkbox>
  </v-container>
</template>

<script>
export default {
  name: 'FilterMassage',
  props: {
    initialMassage: Array,
    massages: Array,
  },
  data() {
    return {
      findMassage: this.initialMassage,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
