<template>
  <div>
    <div
      class="uprav-label"
      :style="{ backgroundImage: 'url(' + upravBg + ')' }"
    >
    <div class="uprav-label-container">
      <slot></slot>
    </div>
    </div>
  </div>
</template>

<script>
import upravImg from '@/assets/pics/uprav-label.svg';

export default {
  name: 'UpravLabel',
  data() {
    return {
      upravBg: upravImg,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.uprav-label {
  width: 272px;
  height: 271px;
  background-size: contain;
  color: #fff;
  font-size: 12px;
  position: relative;
}
.label-1  .uprav-label-container {
  width: 200px;
  height: 180px;
  position: absolute;
  left: 50%;
  top: 19%;
  transform: translate(-50%, 0);
}
.uprav-label-container p {
  margin-top: 10px;
  font-size: 11px;
}
.label-2 .uprav-label-container {
  width: 200px;
  height: auto;
  position: absolute;
  left: 50%;
  top: 25%;
  transform: rotate(180deg) translate(50%, 0);
}
</style>
