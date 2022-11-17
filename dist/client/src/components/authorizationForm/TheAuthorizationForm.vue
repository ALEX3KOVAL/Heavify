<template>
  <v-dialog
      v-model="isDialogVisible"
      persistent
      class="authorization-form"
      :max-width="authorizationFormWidth"
  >
    <template v-slot:activator="{on, attrs}">
      <slot v-bind="{attrs, on}"/>
    </template>
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
              ></v-text-field>
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
              ></v-text-field>
            </v-col>
          </div>
      <v-card-actions>
        <v-btn
          text
          color="red"
          @click="action">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip
            left
          >
          </v-tooltip>
        </v-slide-x-reverse-transition>
        <v-btn
          color="primary"
          text
          @click="action"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "authorization-form",
  data: () => ({
    isDialogVisible: false,
    login: "",
    pwd: ""
  }),
  methods: {
    hide() {
      this.isDialogVisible = false;
    },
    toggleVisible() {
      this.isDialogVisible = !this.isDialogVisible;
    },
    action() {
      this.pwd = "";
      this.login = "";
      this.isDialogVisible = false;
    },
  },
  computed: {
    authorizationFormWidth() {
      let width = this.$vuetify.breakpoint.width;
      switch (this.$vuetify.breakpoint.name) {
        case "sm":
        case "xs":
          return width * 0.8;
        case "md":
          return width * 0.7;
        default:
          return width * 0.3;
      }
    }
  }
}
</script>

<style scoped>

</style>
