<template>
  <div @scroll="onScrollContent" class="default__layout">
      <the-header ref="heading" :width="width" :page-name="'index'"/>
      <the-content
        v-if="pageName !== ''"
        :page-name="pageName"
      >
        <transition
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animated bounceOutRight"
            appear
        >
          <router-view />
        </transition>
      </the-content>
  </div>
</template>

<script>
import {TheHeader} from "../../../widgets/header";
import TheContent from "../../../components/content/TheContent.vue";
import {Consumer} from "../../../shared/context/index";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
    TheContent,
    Consumer,
  },
  data: () => ({
    pageName: ""
  }),
  created() {
    if (this.$route.name) {
      this.pageName = this.$route.name;
    }
  },
  methods: {
    onScrollContent(event) {
      this.$refs.heading.checkScrollState(event.target.scrollTop);
    }
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "lg":
        case "xl":
          return this.$vuetify.breakpoint.width - (this.$route.name !== "index" ? 17 : 0);
        default:
          return this.$vuetify.breakpoint.width;
      }
    },
    height() {
      return screen.height
    }
  }
}
</script>

