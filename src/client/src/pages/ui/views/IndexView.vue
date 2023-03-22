<template>
  <KeepAlive>
    <swiper
        cssMode
        style="overflow: hidden !important; height: 90vh;position: relative;"
        :slides-per-view="1"
        :mousewheel="true"
        :direction="'horizontal'"
        pagination
    >
      <swiper-slide><promo /></swiper-slide>
      <swiper-slide><genres /></swiper-slide>
      <swiper-slide><artists /></swiper-slide>
      <div id="modal__overlay" :class="activeState">
        <modal v-if="this.modalPropsObject.value !== undefined" :guitar-image-file-name="modalPropsObject.value.fileName" :title="modalPropsObject.value.title"/>
      </div>
    </swiper>
  </KeepAlive>
</template>

<script>
import TheSlideGroup from "../../../components/carousels/TheSlideGroup.vue";
import Artists from "../../../components/songs/Artists.vue";
import Lazy from "../../../components/lazy/Lazy.vue";
import {Swiper, SwiperSlide, SwiperCore} from "swiper-vue2";
import {Mousewheel, Keyboard, Pagination} from 'swiper';
import 'swiper/swiper-bundle.css';
import Promo from "../../../components/promo/ThePromo.vue";
import Genres from "../../../components/Genres.vue";
import Modal from "../../../components/Modal.vue";
SwiperCore.use([Mousewheel, Keyboard, Pagination]);

export default {
  name: "IndexView",
  components: {Genres, Promo, Lazy, TheSlideGroup, Swiper, SwiperSlide, Artists, Modal},
  data: () => ({
    pageName: "",
    height: 0,
    activeState: "",
    overlay: false,
    modalPropsObject: {}
  }),
  mounted() {
    this.$on("onModalActivated", (eventData) => {
      this.modalPropsObject.value = eventData;
    })
    this.$on(["onModalActivated", "onModalDeactivated"], () => {
      this.overlay = !this.overlay;
      this.activeState = !this.overlay ? "unactive" : "active";
    });
  }
}
</script>
