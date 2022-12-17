<template>
  <section :style="`background-image: url(${this.API_URL}/home_page/background/${backgroundImagePath})`">
    <slot />
    <img :src="`${this.API_URL}/home_page/background/${this.$vuetify.breakpoint.name}/${backgroundImagePath}`" alt=""
           style="width: 100vw; height: 100vh"/>
  </section>
</template>

<script>
import {getPicturesGroupByNames} from "../services/picture";

export default {
  name: "HomeLayout",
  data: () => ({
    backgroundImagePath: ""
  }),
  async created() {
    this.API_URL = process.env.VUE_APP_API_URL;
    await getPicturesGroupByNames("home", "background", this.$vuetify.breakpoint.name)
        .then(fileName => {
            this.backgroundImagePath = fileName.data;
          console.log(`${this.API_URL}/home_page/background/${this.$vuetify.breakpoint.name}/${this.backgroundImagePath}`);
          }
        )
  }
}
</script>
