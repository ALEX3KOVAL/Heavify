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
          @click="sdshfdhsdfsahfsahsafhhsdfahdfhfsfsahvsdvvxvhxsa"
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
    authorize() {
      try {
        //@ts-ignore
        UserStore.actions.login(this.login, this.pwd).then(() => {
          //@ts-ignore
          this.clearFields();
          //@ts-ignore
          this.hide();
          //@ts-ignore
          this.$router.push('/home');
        });
      }
      catch (err) {
        //отображаем в форме, что логин/пароль невер(ен)ны
      }
    }
  }
}
</script>

<style scoped>

</style>
