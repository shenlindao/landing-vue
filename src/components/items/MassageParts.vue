<template>
    <div class="massage-parts">
      <ul>
        <li
        v-for="part in massageParts"
        :key="part.name"
        >
        <img class="part-img" :src="part.icon">
        <div class="part-name">{{ part.name }}</div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'MassageParts',
  props: {
    massageParts: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.massage-parts {
  max-width: 140px;
  width: 100%;
  height: 400px;
  right: 27%;
  top: 20%;
  position: absolute;
  color: #141414;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
  text-align: center;
  font-size: 11px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}
.part-name {
    line-height: 70px;
}
@media (max-width: 1200px){
.massage-parts {
  right: 0;
  left: auto;
  max-width: 270px;
  width: 100%;
  height: auto;
  top: 54%;
}
li {
  display: inline-block;
  margin-bottom: 10px;
  margin: 5px;
}
.part-name {
  line-height: 20px;
}
}
</style>
