<template>
  <v-dialog
    v-model="isDialogVisible"
    class="authorization-form"
    :max-width="authorizationFormWidth"
  >
    <v-card
      class="authorization-form__fields-row-wrapper"
    >
      <v-card-actions>
        <v-btn
            class="authorization-form__button"
            text
            color="red"
            :style="`position: relative; margin: 2% 2% !important; ${createCancelButtonTextShadow}`"
            @click="clearFields"
        >
          Очистить
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            class="authorization-form__button"
            color="primary"
            text
            :style="`position: relative; margin: 2% 2% !important; ${this.submitButtonTextShadowStyleString}`"
            @click="register = !register"
        >
          {{setAuthModeBtnTitle}}
        </v-btn>
      </v-card-actions>
      <span class="authorization-form__title rounded">{{setTitle}}</span>
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
              @input="$v.login.$touch()"
              :error-messages="emailErrors"
              :counter="30"
              label="Логин"
              required
              outlined
              placeholder="email"
            />
          </v-col>
          <div class="authorization-form__dynamic-field-wrapper">
            <v-col
                class="authorization-form__field-wrapper"
                cols="12"
                sm="12"
                md="10"
                lg="10"
            >
              <v-text-field
                  v-if="register"
                  v-model="userId"
                  :counter="30"
                  @input="$v.userId.$touch()"
                  :error-messages="userIdErrors"
                  label="ID"
                  required
                  outlined
                  placeholder="идентификатор пользователя"
              />
            </v-col>
          </div>

          <v-col
            class="authorization-form__field-wrapper"
            cols="12"
            sm="12"
            md="10"
            lg="10"
          >
            <v-text-field
              @click:append="isPasswordVisible = !isPasswordVisible"
              @input="$v.pwd.$touch()"
              :counter="40"
              :error-messages="pwdErrors"
              :append-icon="isPasswordVisible ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isPasswordVisible ? 'text' : 'password'"
              class="authorization-form__field"
              v-model="pwd"
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
          :style="`${createCancelButtonTextShadow}`"
          @click="back"
        >
          Отмена
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          class="authorization-form__button"
          color="primary"
          text
          :style="`position: relative; margin: 2% 2% !important; ${this.submitButtonTextShadowStyleString}`"
          @click.prevent="authorize"
        >
          Отправить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import theAuthorizationFormMixin from "@/mixins/theAuthorizationFormMixin";
//@ts-ignore
import {validationMixin} from "vuelidate";

export default {
  name: "authorization-form",
  mixins: [
    theAuthorizationFormMixin,
    validationMixin,
  ],
  mounted() {
    let styleString: string = "text-shadow: ";
    for (let i: number = 0.0; i < 2; i += 0.05) {
      styleString += `0 -${i}px 0 rgba(0,0,0,0.9),`
    }
    styleString = styleString.slice(0, -1);
    styleString +=  " !important;";
    //@ts-ignore
    this.submitButtonTextShadowStyleString = styleString;
  },
}
</script>

<style scoped>

</style>
