<template>
  <v-app>
    <provider>
      <transition
        name="fade"
        appear
        mode="out-in"
      >
        <component :is="layout" />
      </transition>
    </provider>
  </v-app>
</template>

<script lang="ts">
import "@fontsource/montserrat";
import "@fontsource/alkalami"
import Provider from "@/context/Provider.vue";
import Content from "@/components/content/TheContent.vue";

export default {
  name: 'App',
  components: {
    Provider,
    Content
  },
  computed: {
    layout() {
      //@ts-ignore
      const layoutName = this.$route.meta.layout || "DefaultLayout";
      console.log(layoutName);
      //@ts-ignore
      return () => import(`@/layouts/${layoutName}.vue`);
    },
  },
  data: () => ({
    //
  }),
};
</script>
