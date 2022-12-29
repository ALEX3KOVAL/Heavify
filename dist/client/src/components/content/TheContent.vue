<template>
  <v-sheet
    :style="`margin-top: ${this.headerHeight}px;`"
    id="scrolling-techniques-2"
    :height="pageHeight"
  >
    <div class="content__wrapper">
      <CarouselsList
        :page-name="this.pageName"
      />
    </div>
  </v-sheet>
</template>

<script>
import CarouselsList from "@/components/carousels/CarouselsList.vue";

export default {
  name: "TheContent",
  components: {
    CarouselsList,
  },
  data: () => ({
    presentationCarouselDrawer: true,
  }),
  props: {
    headerHeight: {
      type: Number,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
  },
  computed: {
    pageHeight() {
      return this.$vuetify.breakpoint.height;
    }
  },
}
</script>
