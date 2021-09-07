<template>
<item-page>
    <desctop-d />
</item-page>
</template>

<script>
import DesctopD from '../components/desctops/DesctopD.vue';
import ItemPage from '../components/layout/ItemPage.vue';

export default {
  name: 'Delivery',
  components: {
    DesctopD,
    ItemPage,
  },
};
</script>
