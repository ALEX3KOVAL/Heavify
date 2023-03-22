<template>
    <div id="genres">
      <Lazy
          :unrender="false"
          style="display:flex; flex-direction:column; align-items: center;text-align: center;width: 100%;">
        <h2
          v-genres-title-mounted
          class="genres__title genres__title__animation"
        >
          GENRES
        </h2>
        <the-slide-group />
      </Lazy>
    </div>
</template>

<script>
import TheSlideGroup from "./carousels/TheSlideGroup.vue";
import Lazy from "./lazy/Lazy.vue";

export default {
  name: "Genres",
  components: {TheSlideGroup, Lazy},
  directives: {
    genresTitleMounted(el) {
      setTimeout(() => el.classList.remove("genres__title__animation"), 2000);
    }
  },
}
</script>

<style scoped>

</style>
