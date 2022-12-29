<template>
<<<<<<< HEAD
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
=======
  <main>
    <slot />
  </main>
>>>>>>> indexView
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
}
</script>
