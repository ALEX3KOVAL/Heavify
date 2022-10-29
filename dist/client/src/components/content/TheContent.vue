<template>
  <v-sheet
      color="background"
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      height="787px"
  >
    <div>
    </div>
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${this.height}`">
    </div>
    <the-index-view-carousel/>
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${600}px`">
    </div>

  </v-sheet>
</template>

<script>
import TheIndexViewCarousel from "@/components/carousels/TheIndexViewCarousel.vue";
export default {
  name: "TheContent",
  components: {TheIndexViewCarousel},
  props: {
    height: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
