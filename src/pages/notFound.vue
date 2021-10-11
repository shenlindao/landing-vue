<template>
  <div class="desctop">
    <p class="not-found">404</p>
  </div>
</template>

<script>

export default {
  name: 'notFound',
};
</script>

<style scoped>
.desctop {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
  background-color: #ffffff;
  background-size: cover;
  position: relative;
}
.not-found {
  font-size: 80pt;
  text-align: center;
  margin-top: 150px;
}
</style>
