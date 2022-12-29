<template>
  <section class="default__layout">
    <v-col>
      <consumer
        v-slot="{headerHeight}"
      >
        <the-heading :height="headerHeight" :width="width" :page-name="'index'"/>
        <the-content
            :page-name="'index'"
        >
          <router-view />
        </the-content>
      </consumer>
    </v-col>
  </section>
</template>

<script>
import TheHeading from "../components/heading/TheHeading.vue";
import TheContent from "../components/content/TheContent.vue";
import Consumer from "../context/Consumer.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeading,
    TheContent,
    Consumer
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
        case "xl":
          return this.$vuetify.breakpoint.width - 17;
        default:
          return this.$vuetify.breakpoint.width;
      }
    }
  }
}
</script>

<style scoped>

</style>
