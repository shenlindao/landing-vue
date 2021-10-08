<template>
  <v-container fluid>
      <v-subheader>Фильтрация по категориям:</v-subheader>
        <v-select
          :items="cat"
          v-model="findCategory"
          @change="$emit('setCategory', findCategory)"
        ></v-select>
  </v-container>
</template>

<script>
export default {
  name: 'FilterCategory',
  props: {
    initialCategory: String,
    categories: Array,
  },
  data() {
    return {
      findCategory: this.initialCategory,
    };
  },
  computed: {
    cat() {
      return this.categories.map((i) => i.title);
    },
  },
};
</script>

<style scoped lang="scss">
</style>
