<template>
  <v-dialog
      v-model="isDialogVisible"
      :style="`max-width: ${authorizationFormWidth}px`"
      :max-width="authorizationFormWidth"
      class="authorization-form"
  >
    <v-card
      class="authorization-form__fields-row-wrapper"
    >
      <v-expand-transition>
        <transition name="bounce">
          <h2
            class="error-message__text"
            v-if="isVisibleErrorMessage"
          >
            {{this.errorMessage}}
          </h2>
        </transition>
      </v-expand-transition>
      <v-card-actions>
        <v-btn
            class="authorization-form__button"
            text
            color="red"
            :style="`${createCancelButtonTextShadow}`"
            @click="clearFields"
        >
          Очистить
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            class="authorization-form__button"
            color="primary"
            text
            :style="`${this.submitButtonTextShadowStyleString}`"
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
              @focus="isVisibleErrorMessage = false"
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
        <v-expand-transition>
          <div v-show=register class="authorization-form__dynamic-field-wrapper">
            <v-col
                class="authorization-form__field-wrapper"
                cols="12"
                sm="12"
                md="10"
                lg="10"
            >
              <v-text-field
                  @focus="isVisibleErrorMessage = false"
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
        </v-expand-transition>
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
            :style="`${this.submitButtonTextShadowStyleString}`"
            @click="authorize"
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
