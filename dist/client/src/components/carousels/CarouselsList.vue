<template>
  <div
    :style="`margin-top: ${headerHeight}px !important;`"
    class="carousels-row__wrapper rounded-t-lg"
  >
    <Lazy
      class="carousels-row"
      v-for="componentName in carouselsComponentsNames"
      :unrender="true"
      :unrender-delay="100"
    >
    <transition
        name="bounce"
        appear>
      <carousel
        :page-name="pageName"
        :component-name="componentName"
        :height="`${setHeight}px`"
      />
    </transition>
    <img
      v-if="$vuetify.breakpoint.name !== 'xs'"
      src="../../icon.png"
      alt=""
      class="carousel__img"
      :style="`height: ${setHeight}px`"/>
  </Lazy>
    <Lazy
        class="carousels-row"
        v-for="componentName in carouselsComponentsNames"
        :unrender="true"
        :unrender-delay="100"
    >
      <transition
          name="bounce"
          appear>
        <carousel
            :page-name="pageName"
            :component-name="componentName"
            :height="`${setHeight}px`"
        />
      </transition>
      <img
        v-if="$vuetify.breakpoint.name !== 'xs'"
        src="../../icon.png" alt=""
        class="carousel__img"
        :style="`height: ${setHeight}px`"/>
    </Lazy>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import {getComponentsNamesBy} from "@/http/api/picture";
import Lazy from "../lazy/Lazy.vue";

export default {
  name: "CarouselsList",
  components: {
    Carousel,
    Lazy,
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    headerHeight: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    carouselsComponentsNames: [],
    carouselWrapperHeight: Number,
  }),
  async created() {
    this.carouselsComponentsNames = await getComponentsNamesBy(this.pageName, "carousel");
  },
  computed: {
    setHeight() {
      const w = this.$vuetify.breakpoint.width,
          h = this.$vuetify.breakpoint.height;
      if (h > w) {
        if (w * (100 / h) < 58.7) {
          return w * 0.485;
        }
        else {
          return w * 0.388;
        }
      }
      else {
        return h * 0.5335;
      }
    },
  },
}
</script>
