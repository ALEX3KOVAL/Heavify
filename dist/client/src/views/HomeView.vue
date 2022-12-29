<template>
  <div class="content__wrapper">
  </div>
</template>

<script lang="ts">
import SelectionList from "@/components/selection/SelectionList.vue";

export default {
  name: 'HomeView',
  components: {
    SelectionList
  },
  computed: {
    //@ts-ignore
    height() {
      //@ts-ignore
      return this.$vuetify.breakpoint.height;
    }
  },
};
</script>
