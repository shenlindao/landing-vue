  <template>
  <item-page>
    <p class='not-found'>404</p>
  </item-page>
</template>

<script>
import ItemPage from '../components/layout/ItemPage.vue';

export default {
  components: {
    ItemPage,
  },
};
</script>

<style scoped>
.not-found {
    font-size: 80pt;
    text-align: center;
}
</style>
