<template>
    <v-app>
      <provider>
        <component is=""/>
        <transition name="fade">
          <router-view/>
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
  data: () => ({
    //
  }),
};
</script>
