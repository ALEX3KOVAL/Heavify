<template>
  <main>
    <v-sheet
      id="scrolling-techniques-2"
      :height="screenHeight"
    >
      <slot />
    </v-sheet>
  </main>
</template>

<script>
export default {
  name: "content",
  data: () => ({
    presentationCarouselDrawer: true,
  }),
  props: {
    pageName: {
      type: String,
      required: true
    },
  },
  computed: {
    screenHeight: () => screen.height
  }
}
</script>
