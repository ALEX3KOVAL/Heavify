<template>
  <section class="default__layout">
    <v-col>
      <consumer
          v-slot="{headerHeight}"
      >
        <the-heading :height="headerHeight" :width="width" :page-name="'index'"/>
        <the-content
          v-if="pageName !== ''"
          :page-name="pageName"
        >
          <div
            class="content__wrapper"
            :style="`margin-top: ${headerHeight}px !important;height:${height - headerHeight - height * 0.01}px`"
          >
            <router-view />
          </div>
        </the-content>
      </consumer>
    </v-col>
  </section>
</template>

<script>
import TheHeading from "../../components/heading/TheHeading.vue";
import TheContent from "../../components/content/TheContent.vue";
import Consumer from "../../context/Consumer.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeading,
    TheContent,
    Consumer,
  },
  data: () => ({
    pageName: ""
  }),
  created() {
    if (this.$route.name) {
      this.pageName = this.$route.name;
    }
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
        case "xl":
          return this.$vuetify.breakpoint.width - (this.$route.name !== "index" ? 17 : 0);
        default:
          return this.$vuetify.breakpoint.width;
      }
    },
    height() {
      return screen.height
    }
  }
}
</script>

<style>
</style>
