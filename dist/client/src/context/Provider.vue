<template>
  <span>
    <slot/>
  </span>
</template>

<script>
import UserStore from "../store/userStore";
export default {
  name: "provider",
  methods: {
    headerHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
        case "xl":
          var height = this.$vuetify.breakpoint.height * 0.4084;
          return height;
        default:
          var height = this.$vuetify.breakpoint.height * 0.1884;
          return height;
      }
    },
  },
  provide() {
    return {
      userStore: UserStore,
      headerHeight: this.headerHeight()
    }
  }
}
</script>
