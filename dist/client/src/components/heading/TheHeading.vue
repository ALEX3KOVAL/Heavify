<template>
  <header>
    <v-app-bar
        fixed
        dark
        :width="width"
        dense
        style="background: linear-gradient(to right, rgba(44, 4, 106), rgb(196,26,143))"
        shrink-on-scroll
        :height=height
        :src=this.headerPath
        scroll-target="#scrolling-techniques-2"
        scroll-threshold="90"
        fade-img-on-scroll
        app
        class="rounded-b-lg"
    >
      <v-row class="d-flex justify-center mt-1" style="height: 1vh !important;">
        <the-heading-button
            :icons-size="iconsSize"
            :icon-name="`mdi-menu`"
            class="ml-4"
            @onClick="toggleSideBarVisible"
        />
        <v-toolbar-title class="header__title">
          Heavify
        </v-toolbar-title>
        <v-spacer></v-spacer>
          <the-heading-button
              class="mr-4"
              :icons-size="iconsSize"
              :icon-name="`mdi-login-variant`"
              @authorizationFormNoNeeded="hideAuthorizationForm"
              @onClick="showAuthorizationForm"
          />
      </v-row>
    </v-app-bar>
    <the-side-bar ref="theSideBar"/>
  </header>
</template>

<script>
import {getPicturesGroupByNames} from "@/http/api/picture";
import TheHeadingButton from "@/components/heading/HeadingButton.vue";
import Consumer from "@/context/Consumer.vue";
import Provider from "@/context/Provider.vue";
import TheAuthorizationForm from "@/components/authorizationForm/TheAuthorizationForm.vue";
import TheSideBar from "@/components/sidebar/TheSideBar.vue";

export default {
  components: {
    TheSideBar,
    Provider,
    Consumer,
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
  }),
  async created() {
    this.maxHeight = this.$vuetify.breakpoint.height * 0.52;
    this.minHeight = this.$vuetify.breakpoint.height * 0.12;
    await getPicturesGroupByNames(this.pageName, "header").then((data) => {
      this.headerPath = `${process.env.VUE_APP_API_URL}/index_page/header/${data[0]}`;
    });

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
    showAuthorizationForm() {
      this.$router.push('/auth');
    }
  },
}
</script>
