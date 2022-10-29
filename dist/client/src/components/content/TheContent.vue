<template>
  <v-sheet
      @scroll=""
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
import {computed} from "@vue/composition-api";

export default {
  name: "TheContent",
  data: () => ({
    presentationCarouselDrawer: true,
  }),
  provide() {
    return {
      presentationCarouselDrawer: computed(() => this.presentationCarouselDrawer)
    }
  },
  components: {TheIndexViewCarousel},
  props: {
    height: {
      type: String,
      required: true
    }
  },
  methods: {
    callback() {
      console.log(this.$el.scrollHeight);
    }
  }
}
</script>

<style scoped>
</style>
