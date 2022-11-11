<template>
  <v-sheet
      color="background"
      id="scrolling-techniques-2"
      :class="`overflow-y-auto overflow-x-hidden`"
      :height="pageHeight"
  >
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${headerHeight}px`" slot-scope="">
    </div>
      <CarouselsList
        :page-name="this.pageName"
      />
    <div :style="`background: #601a8f;color: white;width: 100%;height: ${1500}px`">
    </div>
  </v-sheet>
</template>

<script>
import velocityMixin from "@/mixins/velocityMixin";
import CarouselsList from "@/components/carousels/CarouselsList.vue";

export default {
  name: "TheContent",
  components: {
    CarouselsList,
  },
  data: () => ({
    presentationCarouselDrawer: true,
  }),
  props: {
    headerHeight: {
      type: Number,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
  },
  computed: {
    pageHeight() {
      return this.$vuetify.breakpoint.height
    }
  }
}
</script>
