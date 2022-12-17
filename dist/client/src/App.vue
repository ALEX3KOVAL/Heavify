<template>
  <v-app>
    <provider>
      <transition name="fade">
        <component :is="layout">
          <router-view />
        </component>
      </transition>
    </provider>
  </v-app>
</template>

<script lang="ts">
import "@fontsource/montserrat";
import "@fontsource/alkalami"
import Provider from "@/context/Provider.vue";

export default {
  name: 'App',
  components: {
    Provider,
  },
  computed: {
    layout() {
      //@ts-ignore
      const layoutName = this.$route.meta.layout || "DefaultLayout";
      console.log(layoutName);
      //@ts-ignore
      return () => import(`@/layouts/${layoutName}.vue`);
    }
  },
  data: () => ({
    //
  }),
};
</script>
