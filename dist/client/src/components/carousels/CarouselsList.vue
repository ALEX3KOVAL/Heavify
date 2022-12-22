<template>
  <div
    :style="`margin-top: ${headerHeight}px !important;`"
    class="carousels-row__wrapper rounded-t-lg"
  >
    <div
      :style="`height: ${setHeight}px;`"
    >
      <Lazy
          class="carousels-row"
          v-for="componentName in carouselsComponentsNames"
          :unrender="true"
          :unrender-delay="100"
      >
        <transition
            name="bounce"
            appear
        >
          <carousel
              @clayIsLoaded="setClayHuman"
              :page-name="pageName"
              :component-name="componentName"
              :height="`${setHeight}px`"
          />
        </transition>
        <img
          v-if="clayHumanFileName !== ''"
          :src="`${API_URL}/${pageName}_page/carousel/${componentName}/clay/${clayHumanFileName}`"
          alt=""
          class="carousel__img"
          :style="`height: ${setHeight}px !important;`"
        />
      </Lazy>
    </div>
    <div
      :style="`height: ${setHeight}px !important;`"
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
              @clayIsLoaded="setClayHuman"
              :page-name="pageName"
              :component-name="componentName"
              :height="`${setHeight}px`"
          />
        </transition>
        <img
            v-if="clayHumanFileName !== ''"
            :src="`${API_URL}/${pageName}_page/carousel/${componentName}/clay/${clayHumanFileName}`" alt=""
            class="carousel__img"
            :style="`height: ${setHeight}px !important;`"/>
      </Lazy>
    </div>
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
    clayHumanFileName: ""
  }),
  async created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    this.carouselsComponentsNames = await getComponentsNamesBy(this.pageName, "carousel");
  },
  methods: {
    setClayHuman(fileName) {
      this.clayHumanFileName = fileName;
      console.log(this.clayHumanFileName);
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
          return w * 0.388;
        }
      }
      else {
        if (this.$vuetify.breakpoint.name === "lg") {
          return h * 0.5535;
        }
        return h * 0.6035;
      }
    },
  },
}
</script>
