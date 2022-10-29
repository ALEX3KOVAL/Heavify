<template>
  <v-btn
      icon
      fab
      class="elevation-14 header__btn header__btn-menu"
  >
    <v-icon
        :size="iconsSize">
      mdi-menu
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "the-menu-button",
  props: ["iconsSize"]
}
</script>

<style scoped>

</style>
