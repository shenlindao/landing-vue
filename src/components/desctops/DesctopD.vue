<template>
  <div class="desctop">
    <h2>Доставка</h2>
  </div>
</template>

<script>
export default {
  name: 'DesctopD',
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
  top: 5%;
  transform: translate(-50%, 0);
  font-size: 22pt;
  color: rgb(233, 245, 255);
}
</style>
