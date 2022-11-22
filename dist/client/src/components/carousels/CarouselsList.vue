<template>
  <div
    :style="`margin-top: ${headerHeight} !important;`"
    class="carousels-row__wrapper rounded-t-lg"
  >
    <Lazy
      v-for="componentName in carouselsComponentsNames"
      :unrender="true"
      :unrender-delay="100"
    >
    <transition
        appear
        name="bounce">
      <carousel
        :page-name="pageName"
        :component-name="componentName"
      />
    </transition>
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
    Lazy
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    headerHeight: {
      type: String,
      required: true
    }
  },
  data: () => ({
    carouselsComponentsNames: [],
    carouselWrapperHeight: Number,
  }),
  created() {
    getComponentsNamesBy(this.pageName, "carousel")
        .then((data) => {
          console.log(data);
          this.carouselsComponentsNames = data;
          console.log("ghghghghghgh ---- ", this.carouselsComponentsNames[0]);
        });
  },
  methods: {
    setCarouselWrapperHeight(height) {
      this.carouselWrapperHeight = height;
    }
  }
}
</script>
