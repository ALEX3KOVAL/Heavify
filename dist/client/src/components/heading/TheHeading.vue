<template>
  <div>
    <v-app-bar
        :width="width"
        dense
        shrink-on-scroll
        :height=height
        :src=this.headerPath
        scroll-target="#scrolling-techniques-2"
        scroll-threshold="200"
        fade-img-on-scroll
        app
        class="rounded-b-lg header"
    >
      <v-row class="d-flex py-1 ">
        <the-heading-button
            :icons-size="iconsSize"
            :icon-name="`mdi-menu`"
            class="ml-4"
            @onClick="toggleSideBarVisible"
        />
        <v-spacer></v-spacer>
        <div v-if="isHeaderTitleVisible" class="d-flex align-center header__title">
          Heavify
        </div>
        <v-spacer></v-spacer>
          <the-heading-button
              class="mr-4"
              :icons-size="iconsSize"
              :icon-name="`mdi-login-variant`"
              @authorizationFormNoNeeded="hideAuthorizationForm"
              @onClick="auth"
          />
      </v-row>
    </v-app-bar>
    <the-side-bar ref="theSideBar"/>
  </div>
</template>

<script>
import VueRouter from "vue-router";
const {isNavigationFailure, NavigationFailureType} = VueRouter;
import {getPicturesGroupByNames} from "@/http/api/picture";
import TheHeadingButton from "@/components/heading/HeadingButton.vue";
import TheAuthorizationForm from "@/components/authorizationForm/TheAuthorizationForm.vue";
import TheSideBar from "@/components/sidebar/TheSideBar.vue";
import {AUTH_ROUTE, HOME_ROUTE} from "@/utils/consts";

export default {
  components: {
    TheSideBar,
    TheHeadingButton,
    TheAuthorizationForm
  },
  props: {
    height: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
  },
  data: () => ({
    headerPath: "",
    isHeaderTitleVisible: false
  }),
  async created() {
    this.maxHeight = this.$vuetify.breakpoint.height * 0.52;
    this.minHeight = this.$vuetify.breakpoint.height * 0.12;
    await getPicturesGroupByNames(this.pageName, "header").then((fileName) => {
      this.headerPath = `${process.env.VUE_APP_API_URL}/index_page/header/${fileName}`;
    });
  },
  mounted() {
    this.headerResizeObserver = new ResizeObserver(this.reactToHeaderResize);
    this.headerResizeObserver.observe(this.$el.firstChild.lastChild);
  },
  computed: {
    iconsSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 14;
        case 'sm':
          return 20;
        case 'md':
          return 22;
        case 'lg':
          return 25;
        case 'xl':
          return 30;
      }
    }
  },
  methods: {
    hideAuthorizationForm() {
      // this.$refs.theAuthorizationForm.hide();
    },
    toggleSideBarVisible() {
      this.$refs.theSideBar.toggleVisible();
    },
    auth() {
      this.$router.push({path: AUTH_ROUTE, query: {redirect: HOME_ROUTE}}).catch((e) => {
            if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
              Promise.reject(e)
            }
      });
    },
    reactToHeaderResize() {
      this.isHeaderTitleVisible = this.$el.firstChild.offsetHeight === 36;
    },
  }
}
</script>
