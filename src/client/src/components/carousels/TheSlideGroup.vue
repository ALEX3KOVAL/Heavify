<template>
  <span class="slider__wrapper">
    <swiper
        :slides-per-view="slidesCount"
        cssMode
        mousewheel
        direction="horizontal"
        class="genres__slider"
    >
      <swiper-slide v-for="{title, fileName, color} in list">
        <slide :title="title" :file-name="fileName" :color="color" />
      </swiper-slide>
    </swiper>

  </span>
</template>

<script>
import Slide from "./Slide.vue";
import Modal from "../Modal.vue";
import {Swiper, SwiperSlide, SwiperCore} from "swiper-vue2";
import 'swiper/swiper-bundle.css';
import { Mousewheel, Keyboard } from 'swiper';
SwiperCore.use([Mousewheel, Keyboard]);

export default {
  name: "TheSlideGroup",
  components: {
    Slide,
    Swiper,
    SwiperSlide,
    Modal
  },
  data: () => ({
    list: [
      {
        title: "Groove metal",
        fileName: "dimebag_guitar_pc.png",
        color: "blue"
      },
      {
        title: "Nu metal" ,
        fileName: "mick_thompson_guitar.png" ,
        color: "white"
      },
      {
        title: "Metalcore" ,
        fileName: "dimebag_guitar_pc.png" ,
        color: "blue"
      },
      {
        title: "Rapcore" ,
        fileName: "dimebag_guitar_pc.png" ,
        color: "blue"
      },
      {
        title: "Groove Metal" ,
        fileName: "dimebag_guitar_pc.png" ,
        color: "blue"
      },
      {
        title: "Orchestral metal" ,
        fileName: "dimebag_guitar_pc.png" ,
        color: "blue"
      }
    ]
  }),
  computed: {
    slidesCount() {
      switch(this.$vuetify.breakpoint.name) {
        case "xs":
          return 1;
        case "sm":
          return 2;
        default:
          return 3;
      }
    }
  }
    /*setTimeout(() => {
      this.swiper.autoplay.start();
      setTimeout(() => this.swiper.autoplay.stop(), 1000);
    },
        3000);*/
}
</script>

<style scoped>

</style>
