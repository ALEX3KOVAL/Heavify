<template>
  <v-sheet
      @scroll="callback"
      color="background"
      id="scrolling-techniques-2"
      class="overflow-y-auto overflow-x-hidden"
      height="787px"
  >
    <div>
    </div>
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${this.height}px`">
    </div>
    <div class="carousel__wrapper" :style="`height: ${carouselHeight}px`">
      <transition appear
        name="bounce">
        <carousel
          v-if="presentationCarouselDrawer"
          :height="carouselHeight"
          :page-name="pageName"
          component-name="presentation"/>
      </transition>
    </div>
    <div class="carousel__wrapper" :style="`height: ${carouselHeight}px;`">
      <carousel
        :height="carouselHeight"
        :page-name="pageName"
        component-name="presentation"/>
    </div>
  </v-sheet>
</template>

<script>
import TheIndexViewCarousel from "@/components/carousels/Carousel.vue";
import velocityMixin from "@/mixins/velocityMixin";
import Carousel from "@/components/carousels/Carousel.vue";

export default {
  name: "TheContent",
  data: () => ({
    presentationCarouselDrawer: true
  }),
  components: {Carousel, TheIndexViewCarousel},
  props: {
    height: {
      type: Number,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  methods: {
    callback() {
      this.presentationCarouselDrawer = document.getElementsByClassName("carousel__wrapper")[0].getBoundingClientRect().y * 100 / this.$vuetify.breakpoint.height > 1;
    }
  },
  computed: {
    carouselHeight: function () {
      return this.$vuetify.breakpoint.height * 0.573;
    }
  },
  mixins: [velocityMixin]
}
</script>

<style scoped>
</style>
