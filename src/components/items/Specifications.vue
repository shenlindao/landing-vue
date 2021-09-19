<template>
  <div class="specifications">
    <ul class="specifications-list">
      <li
      v-for="specific in specifics"
      :key="specific.id"
      >
      <span>{{specific.property}}</span>
      <span>{{specific.val}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Specifications',
  props: {
    specificData: Object,
    specifics: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.specifications-list {
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  width: 316px;
  height: auto;
  position: absolute;
  top: 41%;
  left: 5%;
}
ul.specifications-list {
  margin: 0;
  padding: 0;
}
ul.specifications-list li {
  clear: both;
  list-style-type: none;
  line-height: 20px;
}
ul.specifications-list li span:first-child {
  float: left;
  padding: 0 0.4em 0 0;
  margin: 0;
}
ul.specifications-list li span + span {
  float: right;
  padding: 0 0 0 0.4em;
  margin: 0;
}
ul.specifications-list li:after {
  content: "";
  display: block;
  overflow: hidden;
  height: 1em;
  border-bottom: 1px dotted #3C3C3C;
}
</style>
