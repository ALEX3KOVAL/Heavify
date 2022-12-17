<template>
  <section
    :style="`background-image: url('${this.API_URL}/home_page/background/${this.backgroundImagePath}')`"
  >
    <slot />
  </section>
</template>

<script>
import {getPicturesGroupByNames} from "../services/picture.js";

export default {
  name: "HomeLayout",
  async created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    await getPicturesGroupByNames("home", "background")
        .then(fileName => this.backgroundImagePath = fileName);
  }
}
</script>
