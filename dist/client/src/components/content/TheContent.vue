<template>
  <v-sheet
      @scroll="callback"
      color="background"
      id="scrolling-techniques-2"
      :class="`overflow-y-auto overflow-x-hidden`"
      :height="this.$vuetify.breakpoint.height"
  >
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${height}px`" slot-scope="">
    </div>
    <!--<div class="carousel__wrapper" :style="`height: ${setHeight}px`"> -->
    <CarouselsList
      :page-name="pageName"
    />
    <!-- </div> -->
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${500}px`">
    </div>
  </v-sheet>
</template>

<script>
import velocityMixin from "@/mixins/velocityMixin";
import CarouselsList from "@/components/carousels/CarouselsList.vue";

export default {
  name: "TheContent",
  components: {
    CarouselsList,
  },
  data: () => ({
    presentationCarouselDrawer: true,
    carouselParams: {
    }
  }),
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
  mixins: [velocityMixin]
}
</script>
