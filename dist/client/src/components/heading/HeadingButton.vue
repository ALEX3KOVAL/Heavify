<template>
  <v-btn
      color="black"
      fab
      icon
      class="header__btn"
      @click="onClick">
    <v-icon :size="iconsSize">
      {{iconName}}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "the-heading-button",
  props: ["iconsSize", "iconName"],
  methods: {
    onClick(event) {
        return this.$emit("onClick", event);
    }
  }
}
</script>

<style scoped>

</style>
