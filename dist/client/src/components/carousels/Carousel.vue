<template>
    <v-container class="presentation-carousel" :style="`height: ${height}px`">
        <v-card
          class="elevation-24 rounded-xl presentation-carousel__wrapper" :height="height" :style="`width: ${width}px;`"
        >
          <v-carousel
              cycle
              continuous
              hide-delimiter-background
              delimiter-icon="mdi-guitar-pick"
              show-arrows-on-hover
              class="rounded-xl presentation-carousel__slider"
              :height="height"
          >
            <v-carousel-item
                class="rounded-xl"
                v-for="(slide, i) in presentationCarouselSlides"
                :key="i"
                :src="`${API_URL}/index_page/carousel/${componentName}/${slide}`"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
    </v-container>
</template>

<script>
import getPicturesGroupByNames from "@/http/api/picture";

export default {
  name: "carousel",
  props: {
    pageName: {
      type: String,
      required: true
    },
    componentName: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      drawer: true,
      presentationCarouselSlides: [],
    }
  },
  created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    getPicturesGroupByNames("index", "carousel", this.componentName).then((data) => this.presentationCarouselSlides = data);
  }
}
</script>

<style scoped>

</style>
