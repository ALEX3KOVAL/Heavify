<template>
  <div
    class="carousels-row__wrapper rounded-t-lg"
    :style="`height:${setWrapperHeight()}px;`"
  >
  <transition
      name="fade"
      appear
  >
    <carousel
        @clayIsLoaded="setClayHuman"
        :page-name="pageName"
        :component-name="componentName"
        :height="`${setHeight}px`"
    />
  </transition>
  <v-img
    v-if="clayHumanFileName !== ''"
    :src="`${API_URL}/${pageName}_page/carousel/${componentName}/clay/${clayHumanFileName}`"
    class="carousel__img"
    aspect-ratio="1.7"
    contain
  >
    <template v-slot:placeholder>
      <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
      >
        <v-progress-circular
            indeterminate
            color="grey lighten-5"
        ></v-progress-circular>
      </v-row>
    </template>
  </v-img>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import {getComponentsNamesBy} from "@/http/api/picture";
import Lazy from "../lazy/Lazy.vue";

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
    this.carouselsComponentsNames = await getComponentsNamesBy(this.pageName, "carousel");
  },
  methods: {
    setClayHuman(fileName) {
      this.clayHumanFileName = fileName;
      console.log(this.clayHumanFileName);
    },
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
          return 0.12;
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
