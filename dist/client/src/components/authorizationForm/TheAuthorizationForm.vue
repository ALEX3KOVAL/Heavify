<template>
  <v-dialog
    v-model="isDialogVisible"
    persistent
    class="authorization-form"
    :max-width="authorizationFormWidth"
  >
    <v-card
      class="authorization-form__fields-row-wrapper"
    >
      <span class="authorization-form__title">Login/Register</span>
        <div
          class="authorization-form__fields-row"
        >
          <v-col
            class="authorization-form__field-wrapper"
            cols="12"
            sm="12"
            md="10"
            lg="10"
          >
            <v-text-field
              v-model="login"
              label="Логин"
              height="40"
              required
              outlined
              placeholder="email, номер телефона, ID"
            />
          </v-col>
          <v-col
            class="authorization-form__field-wrapper"
            cols="12"
            sm="12"
            md="10"
            lg="10"
          >
            <v-text-field
              v-model="pwd"
              height="40"
              label="Пароль"
              type="password"
              required
              outlined
            />
          </v-col>
        </div>
      <v-card-actions>
        <v-btn
          text
          color="red"
          @click="back"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip
            left
          />
        </v-slide-x-reverse-transition>
        <v-btn
          color="primary"
          text
          @click="authorize"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import theAuthorizationFormMixin from "@/mixins/theAuthorizationFormMixin";
import UserStore from "@/store/userStore";

export default {
  name: "authorization-form",
  mixins: [
    theAuthorizationFormMixin,
  ],
  methods: {
    async authorize() {
      //@ts-ignore
      let responseMsg = await UserStore.actions.login(this.login, this.pwd);
      let flag: boolean = responseMsg === "ok";
      //@ts-ignore
      this.clearFields();
      //@ts-ignore
      this.login = flag ? "О, ВОТ ЭТА ДЕДУ НАДА" : "ПАШОЛ НАХЕР ОТСЮДА, ЧОРТ";
      setTimeout(() => {
        //@ts-ignore
        flag ? this.$router.push('/home') : this.back();
        //@ts-ignore
        this.clearFields();
        //@ts-ignore
        this.hide();
      }, 3000);
    }
  }
}
</script>

<style scoped>

</style>
