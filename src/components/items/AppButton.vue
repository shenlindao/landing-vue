<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" max-width="560" height="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
          v-bind="attrs"
          v-on="on"
          class="buy-btn"
          >
            <slot />
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              ><div class="zag">Отправить заявку</div>
              <v-btn
              icon
              @click="dialog.value = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-col cols="12">
              <v-text-field label="Имя"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="E-mail"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Телефон"></v-text-field>
            </v-col>
            <v-btn
              text
              @click="dialog.value = false"
              class="order-btn"
            >
              Подтвердить
            </v-btn>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AppButton',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-dialog {
    height: inherit;
}
.v-card.v-sheet.theme--light {
    height: 100%;
}
.v-btn:focus {
    opacity: 1.0 !important;
}
.buy-btn{
  width: 220px !important;
  height: 55px !important;
}
.order-btn {
  width: 58% !important;
  height: 40px !important;
  margin: 10px 0 20px 0 !important;
}
.buy-btn,
.order-btn {
  background-color: #ed1b24 !important;
  border-radius: 3px;
  font-size: 16px !important;
  text-transform: unset;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  color: #fff !important;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 2px 2px rgb(0 0 0 / 25%);
  }
}
.v-toolbar__extension {
  justify-content: space-between;
}
.v-dialog {
  border-radius: 0 !important;
}
.zag {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 19px;
  color: rgb(57 57 57);
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-input {
  align-items: center;
  display: inline-flex;
  flex: 1 1 auto;
  font-size: 16px;
  letter-spacing: normal;
  max-width: 60%;
  width: 100%;
  text-align: left;
}
button.v-btn.v-btn--icon.v-btn--round.theme--light.v-size--default {
  position: absolute;
  right: 25px;
}
.theme--light.v-btn:focus::before {
    opacity: 0;
}
</style>
