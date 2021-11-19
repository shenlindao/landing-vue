<template>
  <v-row
    justify="center"
    class="pay-block"
  >
    <v-expansion-panels
      accordion
      focusable
    >
      <v-expansion-panel
        v-for="(pay,i) in pays"
        :key="i"
      >
        <v-expansion-panel-header
          class="pay-block-title"
        >
          {{pay.title}}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="pay-block-text" v-html="pay.text"></div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>

<script>
export default {
  name: 'PayVariants',
  props: {
    payData: Object,
  },
  data() {
    return {
      pays: this.payData.content,
    };
  },
};
</script>

<style scoped lang="scss">
.pay-block {
  max-width: 1200px;
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translate(-50%, 0);
}
.pay-block-title {
  font-size: 14pt;
  font-weight: 500;
}
.pay-block-text {
  text-align: left;
}
</style>
