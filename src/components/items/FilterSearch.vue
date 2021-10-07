<template>
  <v-container fluid>
      <v-text-field
        label="Поиск"
        hide-details="auto"
        v-model="word"
        @input="$emit('search', word)"
      ></v-text-field>
    </v-container>
</template>

<script>
export default {
  name: 'FilterSearch',
  props: {
    initialWord: String,
  },
  data() {
    return {
      word: this.initialWord,
    };
  },
};
</script>

<style scoped lang="scss">
.search-cards {
  border: 1px solid rgb(112, 112, 112);
  border-radius: 5px;
  width: 100%;
  min-height: 35px;
  padding-left: 10px;
}
</style>
