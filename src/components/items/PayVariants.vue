<template>
  <v-row
    justify="center"
    class="pay-block"
  >
    <v-expansion-panels
      accordion
      focusable
      multiple
      v-model="panel"
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
          <div class="pay-block-image">
            <div class="pay-image"
              v-for="(icn,i) in pay.pic"
              :key="i"
            >
              <img class="pay-card-img" :src="icn.icon" />
            </div>
          </div>
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
      panel: [1],
      payIcon: this.payData.content.pic,
    };
  },
};
</script>

<style scoped lang="scss">
.pay-block {
  margin: 200px 15% 220px 15%;
}
.pay-block-title {
  font-size: 14pt;
  font-weight: 500;
}
.pay-block-text {
  text-align: left;
}
.pay-block-image {
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
}
</style>
