<template>
  <v-col>
    <the-heading :height="appbarHeight"/>
    <the-content :height="appbarHeight"/>
  </v-col>
</template>

<script>
import TheHeading from "@/components/heading/TheHeading.vue";
import TheContent from "@/components/content/TheContent.vue";
export default {
  name: "IndexView",
  components: {TheContent, TheHeading},
  computed: {
    appbarHeight: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
          var height = this.$vuetify.breakpoint.width * 0.1984;
          return String(height > this.maxHeight ? this.maxHeight : (height < this.minHeight ? this.minHeight : height)) + "px";
        default:
          var height = this.$vuetify.breakpoint.width * 0.2284;
          return String(height > this.maxHeight ? this.maxHeight : (height < this.minHeight ? this.minHeight : height)) + "px";
      }
    },
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
