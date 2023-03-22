<template>
    <div
        v-once
        id="promo"
    >
      <the-promo-title />
      <div class="promo__img" />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(0.9, 0.2,1,1);
             -webkit-animation-duration: 1s;
             -webkit-animation-delay: 0.9s;
             grid-column: 2 / 4;
             grid-row: 1 / 3;
             top:17%;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(1, 0.7,0.8,1);
             -webkit-animation-duration: 2.5s;
             -webkit-animation-delay: 0.9s;
             grid-column: 5 / 7;
             grid-row: 4 / 6;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(0.9, 0.1,0.2,0.9);
             -webkit-animation-duration: 2.2s;
             -webkit-animation-delay: 0.8s;
             grid-column: 9 / 11;
             grid-row: 3 / 5;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(0.6, 0.1,0.5,0.8);
             animation-delay:0.9s;
             -webkit-animation-duration: 2.1s;
             grid-column: 11 / 13;
             grid-row: 6 / 8;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(0.9, 0.4,0.6,0.2);
             animation-delay:1.2s;
             -webkit-animation-duration: 2s;
             top: 30%;
             grid-column: 14 / 16;
             grid-row: 1 / 3;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(1, 0.5,0.5,0.7);
             -webkit-animation-duration: 2.3s;
             animation-delay:0.6s;
             top: 30%;
             grid-column: 10 / 12;
             grid-row: 10 / 12;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(1, 1,0.5,1);
             -webkit-animation-duration: 2.4s;
             animation-delay:0.76s;
             top: 30%;
             grid-column: 7 / 9;
             grid-row: 7 / 9;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(0.6, 0.9,0.4,0.4);
             -webkit-animation-duration: 2.05s;
             animation-delay:0.7s;
             top: 30%;
             grid-column: 12 / 14;
             grid-row: 14 / 16;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(0.1, 0.6,0.8,1);
             -webkit-animation-duration: 2.1s;
             animation-delay:0.7s;
             top: 30%;
             right: 20%;
             grid-column: 14 / 16;
             grid-row: 8 / 10;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(0.5, 0.1,0.5,1);
             -webkit-animation-duration: 2.7s;
             -webkit-animation-delay: 1.2s;
             top: 30%;
             grid-column: 2 / 4;
             left: 20%;
             grid-row: 13 / 15;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(1, 0.5,0.2,1);
             -webkit-animation-duration: 1.9s;
             -webkit-animation-delay: 1.2s;
             grid-column: 7 / 9;
             grid-row: 14 / 16;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />
      <div class="figure"
           :style="`
             animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};
             transition: cubic-bezier(1, 0.4,0.7,0.6);
             -webkit-animation-duration: 2s;
             -webkit-animation-delay: 1.2s;
             grid-column: 5 / 7;
             grid-row: 11 / 13;
             opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`"
      />

    </div>
</template>

<script>
import ThePromoTitle from "./ThePromoTitle.vue";

export default {
  name: "Promo",
  components: {ThePromoTitle},
  data: () => ({
      count: 0
  }),
  mounted() {
    console.log(this.$route.meta.pageIsLoadedOnce);
    if (!this.$route.meta.pageIsLoadedOnce) {
      this.$route.meta.pageIsLoadedOnce = true;
    }
    console.log(this.$route.meta.pageIsLoadedOnce);
  },
}
</script>

<style scoped>

</style>
