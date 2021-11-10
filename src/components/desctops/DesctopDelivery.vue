<template>
  <div class="desctop">
    <h2>Доставка</h2>
    <v-alert
      class="alert-block"
      v-if="errored"
      prominent
      type="error"
    >
    Информация не подгружена
    </v-alert>>
    <div class="delivery-block">
      {{ info }}
    </div>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'DesctopDelivery',
  data() {
    return {
      info: null,
      errored: false,
    };
  },
  mounted() {
    axios
      .get('https://glav-dostavka.ru/api/calc/?responseFormat=json&method=api_city')
      .then((response) => { (this.info = response); })
      .catch((error) => console.log(error));
    this.errored = true;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.desctop {
  width: 100%;
  height: 750px;
  top: 0;
  background-color: #808080;
  background-size: cover;
  position: relative;
}
h2 {
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0);
  font-size: 22pt;
  color: rgb(233, 245, 255);
}
.delivery-block,
.alert-block {
  margin-top: 200px;
  color: #fff;
  position: absolute;
}
.alert-block {
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
