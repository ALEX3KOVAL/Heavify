<template>
  <consumer
    v-slot="{headerHeight}"
  >
    <div
      class="content__wrapper"
      :style="`margin-top: ${headerHeight}px !important;`"
    >
      <CarouselsList
        v-if="pageName !== ''"
        :page-name="pageName"
      />
    </div>
  </consumer>
</template>

<script>
import TheHeading from "@/components/heading/TheHeading.vue";
import TheContent from "@/components/content/TheContent.vue";
import CarouselsList from "@/components/carousels/CarouselsList.vue";
import Consumer from "../context/Consumer.vue";

export default {
  name: "IndexView",
  components: {Consumer, TheContent, TheHeading, CarouselsList},
  data: () => ({
    pageName: ""
  }),
  created() {
    this.pageName = this.$route.name;
  },
  computed: {
    //@ts-ignore
    height() {
      //@ts-ignore
      return this.$vuetify.breakpoint.height;
    }
  },
}
</script>

<style scoped>

</style>
