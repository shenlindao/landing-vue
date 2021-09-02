<template>
  <div class="massage-vid">
    <ul>
      <li
        v-for="massage in massages"
        :key="massage.id"
        @click="$emit('clickMassage', massage.id)"
      >
      <img class="massage-vid-img" :src="massage.icon">
      <div class="massage-vid-title">{{ massage.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MassageVid',
  emits: ['clickMassage'],
  props: {
    massages: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.massage-vid {
  max-width: 420px;
  width: 100%;
  height: 360px;
  left: 7%;
  top: 13%;
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
img {
  width: 100%;
  height: 123px;
  padding-left: 20px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  width: 170px;
  height: 170px;
  display: inline-block;
  vertical-align: top;
  margin: 5px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 1s;
  }
}
.massage-vid-title {
  max-width: 135px;
  width: 100%;
  padding-left: 40px;
}
@media (max-width: 1200px){
.massage-vid {
  max-width: 368px;
  height: 360px;
  left: 1%;
  top: 14%;
}
}
</style>
