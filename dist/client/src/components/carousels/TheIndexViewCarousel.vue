<template>
    <v-container v-waypoint="{active: true, callback: presentationCallback}" class="presentation-carousel">
      <transition
          appear
          name="bounce"
          css>
        <v-card v-if="drawer"
          class="elevation-24 rounded-xl presentation-carousel__wrapper"
        >
          <v-carousel
              continuous
              cycle
              interval="5000"
              hide-delimiter-background
              delimiter-icon="mdi-guitar-pick"
              show-arrows-on-hover
              class="rounded-xl presentation-carousel__slider"
              :height="appbarHeight"
          >
            <v-carousel-item
                class="rounded-xl"
                v-for="(slide, i) in presentationCarouselSlides"
                :key="i"
                :src="`${API_URL}/images/${page}/${component}/${slide}`"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </transition>
    </v-container>
</template>

<script>
import velocityMixin from "@/mixins/velocityMixin";
import getPicturesGroupByNames from "@/http/api/picture";
import "../waypoint/vue-waypoint.js";

export default {
  name: "TheIndexViewCarousel",
  inject: ["presentationCarouselDrawer"],
  data() {
    return {
      drawer: true,
      presentationCarouselSlides: [],
      page: "index_page",
      component: "presentation_carousel",
    }
  },
  created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    getPicturesGroupByNames(this.page, this.component).then((data) => this.presentationCarouselSlides = data);
  },
  methods: {
    toggleDrawer: function () { this.drawer = !this.drawer },
    presentationCallback: function(waypointState) {
      if (waypointState.going === "out") {
        this.toggleDrawer();
      }
    }
  },
  computed: {
    appbarHeight: function () {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return String(this.$vuetify.breakpoint.width * 0.3473) + "px";
        case "sm":
          return String(this.$vuetify.breakpoint.width * 0.3773) + "px";
        case "lg":
          return String(this.$vuetify.breakpoint.width * 0.2973) + "px";
        default:
          return String(this.$vuetify.breakpoint.width * 0.3173) + "px";
      }
    }
  },
  mixins: [velocityMixin]
}
</script>

<style scoped>

</style>
