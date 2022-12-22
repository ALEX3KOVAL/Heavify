<template>
  <v-container
    class="carousel"
    :style="`height:${height};`"
  >
      <v-card
        class="carousel__wrapper rounded-xl"
      >
        <v-carousel
          v-if="presentationCarouselSlides.clay !== ''"
          interval="5000"
          cycle
          continuous
          hide-delimiter-background
          delimiter-icon="mdi-guitar-pick"
          show-arrows-on-hover
          class="carousel-container"
          :height="height"
        >
          <v-carousel-item
              v-for="(slide, i) in presentationCarouselSlides"
              :key="i"
              :src="`${API_URL}/${pageName}_page/carousel/${componentName}/${slide}`"
          >
          </v-carousel-item>
        </v-carousel>
      </v-card>
  </v-container>
</template>

<script>
import {getPicturesGroupByNames} from "@/http/api/picture";

export default {
  name: "carousel",
  props: {
    height: {
      type: String,
      required: true
    },
    componentName: {
      type: String,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      drawer: true,
      presentationCarouselSlides: {
        filesNames: [""],
        clay: ""
      },
    }
  },
  async created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    await getPicturesGroupByNames(this.pageName, "carousel", this.componentName)
        .then((data) => {
          this.presentationCarouselSlides = data.filesNames;
          console.log(this.presentationCarouselSlides);
          this.$emit("clayIsLoaded", data.clay);
        });
  },
  computed: {
    setWidth() {
      const w = this.$vuetify.breakpoint.width,
          h = this.$vuetify.breakpoint.height;
      console.log(this.$vuetify.breakpoint.name);
      if (h > w) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
          case "sm":
          case "md":
            return w * 0.8;
          default:
            return w * 0.5;
        }
      }
      else {
        return w * 0.55;
      }
    }
  }
}
</script>
