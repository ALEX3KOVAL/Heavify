<template>
  <section style="width: 100vw !important; height: 100vh !important; overflow: hidden !important;"
  >
<!--    <v-skeleton-loader
      v-if="!isLoaded"
      type="image"
    />-->
      <the-content
        @onDataIsLoaded="setIsLoaded"
        v-show="isLoaded"
        :page-name="'index'"
        style="width: 100vw !important; height: 100vh !important;overflow: hidden !important;"
      >
        <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
            appear
        >
          <router-view />
        </transition>
      </the-content>
  </section>
</template>

<script>
import TheContent from "../../../components/content/TheContent.vue";
export default {
  name: "AuthLayout",
  data: () =>({
    backgroundImage: null,
    isLoaded: false
  }),
  components: {
    TheContent,
  },
  methods: {
    setIsLoaded() {
      this.isLoaded = true;
    }
  }
}
</script>

<style>
</style>
