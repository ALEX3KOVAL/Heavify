<template>
  <transition
      name="fade"
      appear
  >
    <carousel
      :page-name="pageName"
      :component-name="componentName"
      :height="`${setHeight}px`"
    />
  </transition>
</template>

<script>
import Carousel from "./Carousel.vue";
//import {getComponentsNamesBy} from "@/http/consts/picture";
import Lazy from "../lazy/Lazy.vue";
import PictureService from "../../shared/typicode/api/picture.js";

export default {
  name: "CarouselCard",
  components: {
    Carousel,
    Lazy,
  },
  props: {
    pageName: {
      type: String,
      required: true
    },
    componentName: {
      type: String,
      required: true
    }
  },
  data: () => ({
    carouselsComponentsNames: [],
    carouselWrapperHeight: Number,
    clayHumanFileName: ""
  }),
  async created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    console.log("---------------   ", this.pageName);
    PictureService.getComponentsNamesBy(this.pageName, "carousel").then((response) =>
        this.carouselsComponentsNames = response.data.componentsNames
    );
  },
  methods: {
    setWrapperHeight() {
      return screen.height - screen.height * (this.calcPadding()) - this.headerHeight;
    },
    calcPadding() {
      switch(this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          return 0.02;
        case "md":
        case "lg":
          return 0.2;
        case "xl":
          return 0.14;
      }
    }
  },
  computed: {
    setHeight() {
      const w = this.$vuetify.breakpoint.width,
          h = this.$vuetify.breakpoint.height;
      if (h > w) {
        if (w * (100 / h) < 58.7) {
          return w * 0.595;
        }
        else {
          return w * 0.498;
        }
      }
      else {
        if (this.$vuetify.breakpoint.name === "lg") {
          return h * 0.5535;
        }
        return h * 0.6035;
      }
    },
    isSmartphone() {
      return this.$vuetify.breakpoint.xs;
    }
  },
  inject: ["headerHeight"]
}
</script>
