<template>
  <div class="massage-vid">
    <ul>
      <li
        v-for="massage in massages"
        :key="massage.id"
        @click="$emit('clickMassage', massage.id)"
      >
      <img class="massage-img" :src="massageImage">
      {{ massage.title }}
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
  width: 100px;
  height: 400px;
  left: 5%;
  top: 25%;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  text-align: left;
  font-size: 11px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  &:hover {
    cursor: pointer;
  }
}
</style>
