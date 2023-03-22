<template>
  <KeepAlive>
    <div class="home__wrapper">
      <div
        class="home__background__img"
        :style="`background-image: url('${require(`../../../../../../assets/images/surreal_guitar.png`)}');`"
      >
      </div>
    </div>
  </KeepAlive>
</template>

<script lang="ts">
import SelectionList from "../../../components/selection/SelectionList.vue";

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
