<template>
  <v-dialog
    v-model="isDialogVisible"
    class="authorization-form"
    :max-width="authorizationFormWidth"
  >
    <v-card
      class="authorization-form__fields-row-wrapper"
    >
      <span class="authorization-form__title rounded-b">Login</span>
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
              @click:append="show3 = !show3"
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show3 ? 'text' : 'password'"
              counter
              class="authorization-form__field"
              v-model="pwd"
              height="40"
              label="Пароль"
              required
              outlined
            />
          </v-col>
        </div>
      <v-card-actions>
        <v-btn
          class="authorization-form__button"
          text
          color="red"
          :style="`position: relative; margin: 2% 2% !important; ${createCancelButtonTextShadow}`"
          @click="back"
        >
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="authorization-form__button"
          color="primary"
          text
          :style="`position: relative; margin: 2% 2% !important; ${this.submitButtonTextShadowStyleString}`"
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
      //@ts-ignore
      this.clearFields();
      //@ts-ignore
      this.hide();
      if (responseMsg === "ok") {
        //@ts-ignore
        await this.$router.push('/home');
      }
      else {
        //@ts-ignore
        this.back();
      }
    },
  },
  computed: {
    createCancelButtonTextShadow(): string {
      //@ts-ignore
      return (this.submitButtonTextShadowStyleString as string).replace("#6200EE", "red");
    }
  },
  mounted() {
    let styleString: string = "text-shadow: ";
    for (let i: number = 0.0; i < 2; i += 0.05) {
      styleString += `0 -${i}px 0 rgba(0,0,0,0.9),`
    }
    styleString = styleString.slice(0, -1);
    styleString +=  " !important;";
    //@ts-ignore
    this.submitButtonTextShadowStyleString = styleString;
  }
}
</script>

<style scoped>

</style>
