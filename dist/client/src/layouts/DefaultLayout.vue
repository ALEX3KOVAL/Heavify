<template>
  <section class="default__layout">
    <v-col>
      <the-heading :height="headerHeight" :width="width" :page-name="'index'"/>
      <slot/>
    </v-col>
  </section>
</template>

<script>
import TheHeading from "../components/heading/TheHeading.vue";
import TheContent from "../components/content/TheContent.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeading,
    TheContent
  },
  computed: {
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
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
        case "xl":
          return this.$vuetify.breakpoint.width - 17;
        default:
          return this.$vuetify.breakpoint.width;
      }
    }
  }
}
</script>

<style scoped>

</style>
