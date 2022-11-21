<template>
  <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto overflow-x-hidden"
      :height="pageHeight"
      width="100%"
  >
    <div class="d-flex justify-center" :style="`background: linear-gradient(to right, rgb(215,211,241), rgb(231,236,246));color: white;width: 100%;height: ${1900}px;` ">
      <CarouselsList
          :page-name="this.pageName"
          :header-height="`${headerHeight-1}px`"
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
