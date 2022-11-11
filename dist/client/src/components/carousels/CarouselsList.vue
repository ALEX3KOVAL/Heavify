<template>
  <Lazy v-for="componentName in carouselsComponentsNames">
    <transition
      appear
      name="bounce">
        <carousel
          :page-name="this.pageName"
          :component-name="componentName"
        />
    </transition>
  </Lazy>
</template>

<script>
import Carousel from "./Carousel.vue";
import {getComponentsNamesBy} from "@/http/api/picture";
import Lazy from "../lazy/Lazy.vue";

export default {
  name: "CarouselsList",
  components: {
    Carousel,
    Lazy
  },
  props: {
    pageName: {
      type: String,
      required: true
    }
  },
  data: () => ({
    carouselsComponentsNames: []
  }),
  created() {
    getComponentsNamesBy(this.pageName, "carousel")
        .then((data) => this.carouselsComponentsNames = data);
  }
}
</script>
