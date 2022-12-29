<template>
  <v-sheet
      id="scrolling-techniques-2"
      :height="height"
  >
    <div class="content__wrapper">
      <CarouselsList
          :page-name="'index'"
          :header-height="this.headerHeight"
      />
    </div>
  </v-sheet>
</template>

<script>
import TheHeading from "@/components/heading/TheHeading.vue";
import TheContent from "@/components/content/TheContent.vue";
import CarouselsList from "@/components/carousels/CarouselsList.vue";

export default {
  name: "IndexView",
  components: {TheContent, TheHeading, CarouselsList},
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
    //@ts-ignore
    height() {
      //@ts-ignore
      return this.$vuetify.breakpoint.height;
    }
  },
}
</script>

<style scoped>

</style>
