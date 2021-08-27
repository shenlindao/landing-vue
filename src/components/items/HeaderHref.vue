<template>
<div>
    <ul>
      <li
        class="header_hrefs"
        v-for="headhref in headhrefs"
        :key= headhref.id
      >
        {{headhref.title}}
      </li>
    </ul>
    <div class="tel">8 (800) 888-88-88</div>
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
      headhrefs: HEADHREFS,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  ul {
    width: 45%;
    font-size: 14px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -45%);
  }
  .header_hrefs {
    width: 150px;
    background-color: transparent;
    color: #272727;
    list-style-type: none;
    margin-left: 0;
    &:hover {
      cursor: pointer;
      color: #7A7A7A
;
    }
  }
  .tel {
    width: 150px;
    position: absolute;
    right: 3%;
    top: 18px;
    font-size: 14px;
  }
</style>
