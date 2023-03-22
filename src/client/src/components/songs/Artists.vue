<template>
  <div id="genres">
    <Lazy
        :unrender="false"
        style="display:flex; flex-direction:column; align-items: center;text-align: center;">
      <h2
          v-genres-title-mounted
          class="genres__title genres__title__animation"
      >
        ARTISTS
      </h2>
      <the-slide-group />
    </Lazy>
  </div>
</template>

<script>
import Lazy from "../lazy/Lazy.vue";
import TheSlideGroup from "../carousels/TheSlideGroup.vue";

export default {
  name: "Artists",
  components: {
    Lazy,
    TheSlideGroup
  },
  directives: {
    genresTitleMounted(el) {
      setTimeout(() => el.classList.remove("genres__title__animation"), 2000);
    }
  },
}
</script>

<style scoped>

</style>
