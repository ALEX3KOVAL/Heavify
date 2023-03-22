<template>
  <div class="main-title">
    <div class="main-title-word" style="grid-row: 2 / 3 !important;">
      <h1 class="main-title-letter" :style="`animation-delay: 0s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInRight' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">G</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.2s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInDown' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">E</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.8s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">T</h1><br />
    </div>
    <div class="main-title-word" style="grid-row: 5 !important;">
      <h1 class="main-title-letter" :style="`animation-delay: 0s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInRight' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">R</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.5s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInDown' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">E</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.2s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInUp' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">A</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.1s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInUp' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">D</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.9s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">Y</h1><br />
    </div>
    <div class="main-title-word" style="grid-row: 6 !important;">
      <h1 class="main-title-letter" :style="`animation-delay: 0s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInRight' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">T</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.1s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInUp' : 'none'};margin-right: 43% !important;opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">O</h1>
      <h1 class="main-title-letter" :style="`animation-delay: 0.2s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInDown' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">H</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInDown' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">E</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.5s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInUp' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">A</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 0.7s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInDown' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">V</h1><br />
      <h1 class="main-title-letter" :style="`animation-delay: 1s; animation-name: ${!this.$route.meta.pageIsLoadedOnce ? 'fadeInLeft' : 'none'};opacity: ${this.$route.meta.pageIsLoadedOnce ? '1' : '0'};`">Y</h1><br />
    </div>
  </div>
</template>

<script>

export default {
  name: "PromoTitle",
  data: () => ({
    count: 0
  }),
  mounted() {
    if (!this.$route.meta.pageIsLoadedOnce) {
      this.$route.meta.pageIsLoadedOnce = true;
    }
  },
}
</script>
