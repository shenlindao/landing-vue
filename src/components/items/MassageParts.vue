<template>
  <div class="massage-parts">
    <ul>
      <li
        v-for="massagePart in massageParts"
        :key="massagePart.id"
      >
      {{ massagePart.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MassageParts',
  props: {
    massages: Array,
    massageParts: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.massage-parts {
  width: 80px;
  height: 400px;
  left: 50%;
  top: 25%;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 3px;
  position: absolute;
  color: #141414;
}
</style>
