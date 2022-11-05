<template>
  <header>
    <v-app-bar
        fixed
        dark
        :width="$vuetify.breakpoint.width - 17"
        dense
        style="background: linear-gradient(to right, rgba(44, 4, 106), rgb(196,26,143))"
        shrink-on-scroll
        :height="height"
        :src=this.headerPath
        scroll-target="#scrolling-techniques-2"
        scroll-threshold="90"
        fade-img-on-scroll
        app
        class="rounded-b-lg"
    >
      <v-row class="d-flex justify-center mt-1">
      <the-heading-button
        :icons-size="iconsSize"
        :icon-name="`mdi-menu`"
        class="ml-4"
        @onButtonClick="onMenuButtonClick"
        @menuButtonWasClicked="onMenuButtonClick"
      />
      <v-toolbar-title class="header__title">
        Heavify
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <transition
            name="slide-fade">
      <the-authorization-button-menu v-if="authorizationButtonMenuVisible" :icons-size="iconsSize"/>
        </transition>
      <the-heading-button
          class="mr-4"
          :icons-size="iconsSize"
          :icon-name="`mdi-login-variant`"
          @onButtonClick="toggleAuthorizationButton"
          @authorizationButtonNoNeeded="hideAuthorizationButton"
      />
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
        v-model="navigationPanelVisible"
        absolute
        temporary
        color="rgba(0,0,0,.8)"
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
import TheAuthorizationButtonMenu from "@/components/authrozationButtonMenu/TheAuthorizationButtonMenu.vue";
import TheHeadingButton from "@/components/heading/TheHeadingButton.vue";
import getPicturesGroupByNames from "@/http/api/picture";
export default {
  components: {TheHeadingButton, TheAuthorizationButtonMenu},
  props: {
    height: {
      type: Number,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  data: () => ({
    navigationPanelVisible: false,
    authorizationButtonMenuVisible: false,
    headerPath: ""
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
      console.log(this.$vuetify.breakpoint);
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
      hideAuthorizationButton() {
        this.authorizationButtonMenuVisible = false;
      },
      toggleAuthorizationButton() {
        this.authorizationButtonMenuVisible = !this.authorizationButtonMenuVisible
      },
      onMenuButtonClick() {
        this.navigationPanelVisible = !this.navigationPanelVisible;
      },
    },
}
</script>

<style scoped>
</style>
