<template>
  <v-sheet
      @scroll="callback"
      color="background"
      id="scrolling-techniques-2"
      :class="`overflow-y-auto overflow-x-hidden`"
      :height="this.$vuetify.breakpoint.height"
  >
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${height}px`">
    </div>
    <div class="carousel__wrapper" :style="`height: ${setHeight}px`">
      <transition appear
        name="bounce">
        <carousel
          v-if="presentationCarouselDrawer"
          :height="setHeight"
          :width="setWidth"
          :page-name="pageName"
          component-name="presentation"/>
      </transition>
    </div>
    <div class="carousel__wrapper" :style="`height: ${setHeight}px;`">
      <carousel
        :height="setHeight"
        :width="setWidth"
        :page-name="pageName"
        component-name="presentation"/>
    </div>
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${500}px`">
    </div>
  </v-sheet>
</template>

<script>
import velocityMixin from "@/mixins/velocityMixin";
import Carousel from "@/components/carousels/Carousel.vue";

export default {
  name: "TheContent",
  data: () => ({
    presentationCarouselDrawer: true,
    carouselHeight: 0,
    carouselWidth: 0
  }),
  components: {Carousel},
  props: {
    height: {
      type: Number,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
  },
  methods: {
    callback() {
      this.presentationCarouselDrawer =
          document.getElementsByClassName("carousel__wrapper")[0]
              .getBoundingClientRect().y * 100 / this.$vuetify.breakpoint.height > 1;
    },
  },
  created() {

    /*switch(this.$vuetify.breakpoint.name) {
      case "xs":
        return this.$vuetify.breakpoint.height / 2.4;
      case "sm":
        return this.$vuetify.breakpoint.height / 1.7 - (this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height ? 0.1 : this.$vuetify.breakpoint.width / this.$vuetify.breakpoint.height);
      case "md":
        return this.$vuetify.breakpoint.height / 2 - (this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height ? 0.9 : this.$vuetify.breakpoint.width / this.$vuetify.breakpoint.height);
      case "lg":
        return this.$vuetify.breakpoint.height / 3 - (this.$vuetify.breakpoint.width > this.$vuetify.breakpoint.height ? 0 : this.$vuetify.breakpoint.width / this.$vuetify.breakpoint.height);
      case "xl":
        return this.$vuetify.breakpoint.height * 0.563;
    }*/
  },
  computed: {
    setHeight() {
      const w = this.$vuetify.breakpoint.width;
      let h = this.$vuetify.breakpoint.height;
      if (h > w) {
        if (w * (100 / h) < 58.7) {
          this.carouselHeight = w * 0.5;
          return this.carouselHeight;
        }
        else {
          this.carouselHeight = w * 0.4;
          return this.carouselHeight;
        }
      }
      else {
        this.carouselHeight = h * 0.55;
        return this.carouselHeight;
      }
    },
    setWidth() {
      const w = this.$vuetify.breakpoint.width;
      let h = this.$vuetify.breakpoint.height;
      if (h > w) {
        switch(this.$vuetify.breakpoint.name) {
          case "xs":
            this.carouselWidth = w * 0.9;
            break;
          case "md":
            this.carouselWidth = w * 0.7;
            break;
        }
        return this.carouselWidth;
      }
      else {
        this.carouselWidth = w * 0.5;
        return this.carouselWidth;
      }
    }
  },
  mixins: [velocityMixin]
}
</script>

<style scoped>
</style>
