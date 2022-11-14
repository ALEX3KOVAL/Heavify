<template>
  <v-navigation-drawer
    v-model="isVisible"
    absolute
    temporary
    color="rgba(0,0,0,.8)"
  >
    <v-list
      nav
      dense
    >
      <v-list-item-group active-class="deep-purple--text text--accent-4">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account</v-list-item-title>
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
      this.isSideBarVisible = !this.isSideBarVisible;
    }
  }
}
</script>
