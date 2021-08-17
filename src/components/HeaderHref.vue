<template>
<div>
    <ul>
      <li
        class="header_hrefs"
        v-for="headhref in headhrefs"
        :item="headhref"
        :key= headhref.id
      >
        {{headhref.title}}
      </li>
    </ul>
  </div>
</template>

<script>
const HEADHREFS = [
  { id: 0, title: 'Доставка' },
  { id: 1, title: 'Оплата' },
  { id: 2, title: 'О компании' },
  { id: 3, title: 'Контакты' },
];

export default {
  name: 'HeadHref',
  data() {
    return {
      items: HEADHREFS,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .header_hrefs {
    width: 150px;
    height: 50px;
    background-color: transparent;
    color: rgb(39, 39, 39);
    &:hover {
      cursor: pointer;
      color: rgb(66, 0, 0);
    }
  }
</style>
