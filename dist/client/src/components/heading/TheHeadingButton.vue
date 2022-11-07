<template>
  <v-btn
      fab
      icon
      class="elevation-14 header__btn"
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
  created() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        return this.$emit("authorizationButtonNoNeeded", e);
      }
    })
  },
  methods: {
    onClick(event) {
        return this.$emit("onButtonClick", event);
    }
  }
}
</script>

<style scoped>

</style>
