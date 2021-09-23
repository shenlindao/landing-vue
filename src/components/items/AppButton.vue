<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog transition="dialog-top-transition" max-width="560" height="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" class="buy-btn">
            <slot />
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              ><div class="zag">Заказать</div>
              <v-btn icon @click="dialog.value = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-col cols="12">
              <v-text-field
                label="Имя"
                type="name"
                v-model.trim="form.personName"
                :class="$v.form.personName.$error ? 'is-invalid' : ''"
              >
              </v-text-field>
              <v-alert
              dense
              outlined
              type="error"
              v-if="$v.form.personName.$dirty && !$v.form.personName.required"
              >
              Пожалуйста, укажите свое имя
              </v-alert>
            </v-col>
            <v-col cols="12">
              <vue-tel-input-vuetify
                label="Телефон"
                placeholder=""
                v-model.trim="form.personPhone"
              ></vue-tel-input-vuetify>
            </v-col>
            <v-alert
              dense
              outlined
              type="error"
              v-if="$v.form.personPhone.$dirty && !$v.form.personPhone.required"
              >
              Пожалуйста, укажите свой номер телефона
              </v-alert>
            <v-checkbox
              v-model="form.agreement"
              label="Согласие на обработку персональных данных"
              color="red"
            >
            </v-checkbox>
            <v-alert
              dense
              outlined
              type="error"
              v-if="$v.form.agreement.$dirty && !$v.form.agreement.mustBeTrue"
              >
              Требуется ваше согласие на обработку персональных данных
              </v-alert>
            <v-btn text @click="checkForm" class="order-btn">
              Подтвердить
            </v-btn>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue';

export default {
  mixins: [validationMixin],
  name: 'AppButton',
  components: {
    VueTelInputVuetify,
  },
  data: () => ({
    form: {
      personName: '',
      personPhone: '',
      agreement: false,
    },
  }),
  // computed: {
  //   ...mapGetters({
  //     getProductName: 'catalogVuex/getProductName',
  //   }),
  //   productName() {
  //     return this.getProductName;
  //   },
  // },
  methods: {
    // postMessage() {
    //   console.log(`Имя: ${this.form.personName}`);
    //   console.log(`Телфон: ${this.form.personPhone}`);
    // },
    checkForm() {
      this.$v.form.$touch();
      if (!this.$v.form.$error) {
        console.log('Валидация прошла успешно');
      } else {
        console.log('Валидация не прошла');
      }
    },
  },
  validations: {
    form: {
      personName: {
        required,
      },
      personPhone: {
        required,
      },
      agreement: {
        mustBeTrue(value) {
          return value;
        },
      },
    },
  },
};
</script>

<style scoped lang="scss">
.v-dialog {
  height: inherit;
}
.v-card.v-sheet.theme--light {
  height: 100%;
}
.v-btn:focus {
  opacity: 1 !important;
}
.buy-btn {
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
.v-input,
.vue-tel-input-vuetify {
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
i.v-icon.notranslate.mdi.mdi-checkbox-marked.theme--light.red--text {
  font-size: inherit !important;
}
.v-input--selection-controls {
  margin: 15px 0 15px 0 !important;
  padding-top: 0 !important;
}
.v-alert--dense {
  padding-top: 2px;
  padding-bottom: 2px;
  align-items: center;
  display: inline-flex;
  flex: 1 1 auto;
  font-size: 16px;
  letter-spacing: normal;
  max-width: 60%;
  width: 100%;
  text-align: left;
}
.v-alert--prominent .v-alert__icon {
  align-self: center;
  height: auto;
  min-width: auto;
}
.v-alert--prominent .v-alert__icon.v-icon {
  font-size: 20px;
}
.v-alert--dense[data-v-69a92d24] {
  font-size: 12px;
}
</style>
