<template>
  <v-dialog
      v-model="isDialogVisible"
      persistent
      max-width="600px"
  >
    <template v-slot:activator="{on, attrs}">
      <slot v-bind="{attrs, on}"/>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">LogIn/Register</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-text-field
                  label="Логин"
                  required
                  placeholder="email, номер телефона, ID"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                  label="Пароль"
                  type="password"
                  required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="red darken-1"
            text
            @click="isDialogVisible = false"
        >
          Закрыть
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="isDialogVisible = false"
        >
          Отправить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: "authorization-form",
  data: () => ({
    isDialogVisible: false
  }),
  watch: {
    dialog (val) {
      if (!val) return

      setTimeout(() => (this.dialog = false), 4000)
    },
  },
}
</script>

<style scoped>

</style>
