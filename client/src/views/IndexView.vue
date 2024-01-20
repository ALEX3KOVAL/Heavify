<template>
    <vueper-slides
      :dragging-distance="70" prevent-y-scroll
      3d
      v-if="pageName !== ''"
      class="slider"
      :style="`height:${setHeight(headerHeight)}px;`"
    >
      <!-- здесь будет потом componentsNames -->
      <vueper-slide
        title="AAAAAAAAAAAA"
        style="color: black !important;background-color: white;"
        v-for="i in 3"
        :key="i"
      >
        <template #content>
          <CarouselCard
              page-name="index"
              component-name="presentation"
          />
        </template>
      </vueper-slide>
    </vueper-slides>
</template>

<script>
import TheHeading from "@/components/heading/TheHeading.vue";
import TheContent from "@/components/content/TheContent.vue";
import CarouselCard from "@/components/carousels/CarouselCard.vue";
import Consumer from "../context/Consumer.vue";
import {VueperSlides, VueperSlide} from "vueperslides"

export default {
  name: "IndexView",
  components: {Consumer, TheContent, TheHeading, CarouselCard, VueperSlide, VueperSlides},
  data: () => ({
    pageName: "",
    height: 0
  }),
  created() {
    this.pageName = this.$route.name;
  },
  methods: {
    //@ts-ignore
    setHeight(headerHeight) {
      this.height = screen.height - screen.height * (this.calcPadding()) - headerHeight + screen.height * 0.03;
      return this.height;
    },
    calcPadding() {
      switch(this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          return 0.12;
        case "md":
        case "lg":
          return 0.12;
        case "xl":
          return 0.15;
      }
    }
  },
  watch: {
    height() {
      document.getElementsByClassName("vueperslides__inner")[0].setAttribute("style", `height: ${this.height}px;`)
      document.getElementsByClassName("vueperslides__parallax-wrapper")[0].setAttribute("style", `height: ${this.height}px;`)

    }
  },
  inject: ["headerHeight"]
}
</script>

<style scoped>

</style>
