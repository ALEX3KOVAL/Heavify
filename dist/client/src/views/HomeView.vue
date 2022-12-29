<template>
  <v-sheet
      id="scrolling-techniques-2"
      :height="height"
  >
    <div class="content__wrapper">
    </div>
  </v-sheet>
</template>

<script lang="ts">
import CarouselsList from "@/components/carousels/CarouselsList.vue";

export default {
  name: 'HomeView',
  components: {
    CarouselsList
  },
  computed: {
    //@ts-ignore
    height() {
      //@ts-ignore
      return this.$vuetify.breakpoint.height;
    }
  },
};
</script>
