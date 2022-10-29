<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script lang="ts">
import "@fontsource/montserrat";
import "@fontsource/alkalami"

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  html::-webkit-scrollbar {
    display: none;
  }
  * {
    margin: 0 !important;
    padding: 0 !important;
    box-sizing: border-box !important;
  }
</style>
