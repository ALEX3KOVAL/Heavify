<template>
  <v-navigation-drawer
    v-model="isVisible"
    class="side-bar"
    absolute
    temporary
    style="width: 100vw !important;height: auto !important;"
    :color="`${this.$vuetify.theme.currentTheme.background}ac`"
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group
        active-class="deep-purple--text text--accent-4"
        style="display: flex;flex-direction: row;"
      >
        <v-list-item
            style="margin:1vw !important;"
        >
          <v-list-item-title
            style="text-align: left;display: inline; font-size: medium;margin-left:3vw !important;"
          >
            О проекте
          </v-list-item-title>
        </v-list-item>
        <v-spacer />
        <v-list-item
          style="flex:unset;"
        >
          <v-list-item-icon
              style="align-self: center !important;"
          >
          </v-list-item-icon>
          <v-list-item-title
              style="color:red;text-align: right;display: inline; font-size: medium;margin-right:3vw !important;"
          >
            Выйти
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "the-side-bar",
  data: () => ({
    isVisible: false
  }),
  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>
