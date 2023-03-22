<template>
  <v-app>
<!--    <div v-if="!isLoaded">
      <the-loader />
    </div>-->
    <provider>
        <div>
          <component
            :is="setLayout"
          />
        </div>
    </provider>
  </v-app>
</template>

<script>
import Provider from "../shared/context/ui/Provider.vue";
import TheLoader from "../components/TheLoader.vue";
import "animate.css";

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
      return () => ({
        component: import(`../pages/ui/layouts/${layoutName}`),
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
