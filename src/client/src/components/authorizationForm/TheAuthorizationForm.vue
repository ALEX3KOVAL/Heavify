<template>
  <transition name="fade">
    <v-dialog
        @hook:mounted="addParallax"
        v-if="isLoaded"
        data-depth="0.2"
        v-model="isDialogVisible"
        :style="`background-image: url(${setBackgroundImg});`"
        :max-width="authorizationFormWidth"
        id="authorization-form"
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
              :style="`${createCancelButtonTextShadow}`"
              @click="clearFields"
          >
            Очистить
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
              class="authorization-form__button"
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
              :style="`${createCancelButtonTextShadow}`"
              @click="back"
          >
            Отмена
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            class="authorization-form__button"
            text
            :style="`${this.submitButtonTextShadowStyleString}`"
            @click="authorize"
          >
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </transition>
</template>

<script lang="ts">
import theAuthorizationFormMixin from "../../mixins/theAuthorizationFormMixin";
import {validationMixin} from "vuelidate";
import Parallax from "parallax-js";
import PictureService from "../../shared/typicode/api/picture";

export default {
  name: "authorization-form",
  mixins: [
    theAuthorizationFormMixin,
    validationMixin,
  ],
  data: () => ({
    backgroundPath: "",
    isLoaded: false
  }),
  created() {
    PictureService.getComponentsNamesBy("auth", "bg")
        .then(response => {
          //@ts-ignore
          this.backgroundPath = response.data.componentsNames[0];
          //@ts-ignore
          this.isLoaded = true;
          //@ts-ignore
          this.$emit("onDataIsLoaded", "onDataIsLoaded");
        });
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
  },
  computed: {
    //@ts-ignore
    setBackgroundImg() {return `${process.env.VUE_APP_API_URL}/auth_page/bg/${this.backgroundPath}`; }
  },
  methods: {
    addParallax() {
      //@ts-ignore
      this.scene = document.getElementById("content__wrapper");
      //@ts-ignore
      this.scene.setAttribute("style", "overflow: hidden;");
      //@ts-ignore
      var parallaxInstance = new Parallax(this.scene);
      parallaxInstance.friction(0.45, 0.2);
      parallaxInstance.invert();
    }
  },
  beforeDestroy() {
    //@ts-ignore
    this.scene.setAttribute("style", "overflow: unset; overflow-x: hidden !important;")
  }
}
</script>

<style scoped>

</style>
