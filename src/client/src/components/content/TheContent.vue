<template>
  <main id="content__wrapper" :class="`${isBlurModeState ? 'blur' : ''}`">
      <slot />
  </main>
</template>

<script>
import Modal from "../Modal.vue";
export default {
  name: "content",
  components: {Modal},
  data: () => ({
    isBlurModeState: false,
  }),
  props: {
    pageName: {
      type: String,
      required: true
    },
  },
  mounted() {
    this.$root.$on("onContentBlurToggle", () => {
      this.isBlurModeState = !this.isBlurModeState;
    });
  }
}
</script>
