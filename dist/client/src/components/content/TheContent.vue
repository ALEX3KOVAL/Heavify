<template>
  <main>
    <slot />
  </main>
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
