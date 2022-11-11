<template>
    <v-container class="presentation-carousel" :style="`height: ${setHeight}px`">
        <v-card
          class="elevation-24 rounded-xl presentation-carousel__wrapper"
          :height="setHeight"
          :style="`width: ${setWidth}px;`"
        >
          <v-carousel
              cycle
              continuous
              hide-delimiter-background
              delimiter-icon="mdi-guitar-pick"
              show-arrows-on-hover
              class="rounded-xl presentation-carousel__slider"
              :height="setHeight"
          >
            <v-carousel-item
                class="rounded-xl"
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
  mounted() {
    this.$emit("mounted", this.setHeight);
  },
  created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    getPicturesGroupByNames(this.pageName, "carousel", this.componentName)
        .then((data) => {
          console.log(this.pageName);
          this.presentationCarouselSlides = data
        });
  },
  computed: {
    setHeight() {
      const w = this.$vuetify.breakpoint.width;
      let h = this.$vuetify.breakpoint.height;
      if (h > w) {
        if (w * (100 / h) < 58.7) {
          this.carouselHeight = w * 0.5;
          return this.carouselHeight;
        }
        else {
          this.carouselHeight = w * 0.4;
          return this.carouselHeight;
        }
      }
      else {
        this.carouselHeight = h * 0.55;
        return this.carouselHeight;
      }
    },
    setWidth() {
      const w = this.$vuetify.breakpoint.width;
      let h = this.$vuetify.breakpoint.height;
      if (h > w) {
        switch(this.$vuetify.breakpoint.name) {
          case "xs":
            this.carouselWidth = w * 0.9;
            break;
          case "md":
            this.carouselWidth = w * 0.7;
            break;
        }
        return this.carouselWidth;
      }
      else {
        this.carouselWidth = w * 0.5;
        return this.carouselWidth;
      }
    }
  }
}
</script>

<style scoped>

</style>
