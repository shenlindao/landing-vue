<template>
  <div>
    <ul>
      <router-link
        v-for="headhref in headhrefs"
        :key="headhref.id"
        :to="{ name: headhref.href }"
        class="header_hrefs"
        >
          {{ headhref.title }}
        </router-link>
    </ul>
    <div class="tel">8 (800) 888-88-88</div>
  </div>
</template>

<script>
const HEADHREFS = [
  { id: 0, title: 'Доставка', href: 'delivery' },
  { id: 1, title: 'Оплата', href: 'pay' },
  { id: 2, title: 'Контакты', href: 'contacts' },
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
  list-style-type: none;
  margin-left: 0;
  background-color: transparent;
  color: #272727;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #7a7a7a;
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
