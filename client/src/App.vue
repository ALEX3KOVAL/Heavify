<template>
  <v-app>
    <div v-if="!isLoaded">
      <the-loader />
    </div>
    <provider>
      <transition
        name="fade"
        appear
        mode="out-in"
      >
        <div>
          <component
            :is="setLayout" />
        </div>
      </transition>
    </provider>
  </v-app>
</template>

<script>
import "@fontsource/montserrat";
import "@fontsource/alkalami"
import Provider from "@/context/Provider.vue";
import TheLoader from "@/components/TheLoader.vue";

export default {
  name: 'App',
  components: {
    Provider,
    TheLoader
  },
  async created() {
    setTimeout(_ => this.isLoaded = true, 3400);
  },
  computed: {
    setLayout() {
      const layoutName = this.$route.meta.layout || "DefaultPageLayout.vue";
      console.log("--------------------",layoutName);
      return () => ({
        component: import(`@/layouts/page/${layoutName}`),
        loading: TheLoader,
        delay: 3400
      });
    },
  },
  data: () => ({
    isLoaded: false,
  }),
};
</script>
