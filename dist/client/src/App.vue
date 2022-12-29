<template>
  <v-app>
    <provider>
      <transition
        name="fade"
        appear
        mode="out-in"
      >
        <component :is="layout">
          <the-content
            :page-name="'index'"
          >
            <router-view />
          </the-content>
        </component>
      </transition>
    </provider>
  </v-app>
</template>

<script lang="ts">
import "@fontsource/montserrat";
import "@fontsource/alkalami"
import Provider from "@/context/Provider.vue";
import TheContent from "@/components/content/TheContent.vue";

export default {
  name: 'App',
  components: {
    Provider,
    TheContent
  },
  computed: {
    layout() {
      //@ts-ignore
      const layoutName = this.$route.meta.layout || "DefaultLayout";
      console.log(layoutName);
      //@ts-ignore
      return () => import(`@/layouts/${layoutName}.vue`);
    },
      //@ts-ignore
      headerHeight() {
        //@ts-ignore
        switch (this.$vuetify.breakpoint.name) {
          case "lg":
          case "xl":
            //@ts-ignore
            return this.$vuetify.breakpoint.height * 0.4084;
          default:
            //@ts-ignore
            var height = this.$vuetify.breakpoint.height * 0.1884;
            return height;
        }
      },
  },
  data: () => ({
    //
  }),
};
</script>
