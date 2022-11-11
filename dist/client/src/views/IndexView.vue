<template>
  <v-col>
    <the-heading :height="headerHeight" :width="width" page-name="index"/>
    <the-content :header-height="headerHeight" page-name="index"/>
  </v-col>
</template>

<script>
import TheHeading from "@/components/heading/TheHeading.vue";
import TheContent from "@/components/content/TheContent.vue";
export default {
  name: "IndexView",
  components: {TheContent, TheHeading},
  computed: {
    headerHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
          var height = this.$vuetify.breakpoint.width * 0.1984;
          return height;
        default:
          var height = this.$vuetify.breakpoint.width * 0.2284;
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
  },
  created() {
    document.addEventListener("DOMContentLoaded", function(){
      window.pageYOffset = 0;
    });
  }
}
</script>

<style scoped>

</style>
