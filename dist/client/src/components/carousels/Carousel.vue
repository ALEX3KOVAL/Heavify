<template>
    <v-container class="presentation-carousel">
        <v-card
          class="presentation-carousel__wrapper rounded-xl"
          :height="height"
          :style="`width: ${setWidth}px;`"
        >
          <v-carousel
              interval="5000"
              cycle
              continuous
              hide-delimiter-background
              delimiter-icon="mdi-guitar-pick"
              show-arrows-on-hover
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
      presentationCarouselSlides: [],
    }
  },
  created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    getPicturesGroupByNames(this.pageName, "carousel", this.componentName)
        .then((data) => {
          this.presentationCarouselSlides = data
        });
  },
  computed: {
    setWidth() {
      const w = this.$vuetify.breakpoint.width,
          h = this.$vuetify.breakpoint.height;
      if (h > w) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
          case "sm":
            return w * 0.85;
          case "md":
            return w * 0.6;
          default:
            return w * 0.5;
        }
      }
      else {
        return w * 0.5;
      }
    }
  }
}
</script>
