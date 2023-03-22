<template>
  <header :class="`header ${headerClassVisibility}`">
    <btn
        class="header__btn"
        @onClick="toggleSideBarVisible"
    >
      <v-icon>
        {{"mdi-menu"}}
      </v-icon>
    </btn>
    <h1 class="header__title">
      Heavify
    </h1>
      <btn
          class="header__btn"
          @authorizationFormNoNeeded="hideAuthorizationForm"
          @onClick="auth"
      >
        <svg
          @mouseover="buttonColor='#61de2a'"
          @mouseout="buttonColor='rgba(255,255,255,0.6)'"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 50 50"
          preserveAspectRatio="xMidYMid meet"
          xml:space="preserve"
        >
          <path :fill="buttonColor" d="M25.9,16.5c-0.9-0.8-1.9-1.4-3.1-1.9c-0.5-0.2-1.1,0-1.3,0.5s0,1.1,0.5,1.3c1,0.4,1.9,1,2.6,1.6
            c0.9,0.8,1.4,1.9,1.4,3V23c0,0.6-0.5,1-1,1H5c-0.6,0-1-0.5-1-1v-1.9c0-1.2,0.5-2.3,1.4-3c1-0.9,4-3,9.6-3c4.1,0,7.5-3.4,7.5-7.5
            S19.1,0,15,0S7.5,3.4,7.5,7.5c0,2.4,1.2,4.6,2.9,6c-3.3,0.7-5.3,2.1-6.4,3C2.8,17.7,2,19.3,2,21.1V23c0,1.7,1.4,3,3,3H25
            c1.7,0,3-1.4,3-3v-1.9C28,19.3,27.2,17.7,25.9,16.5z M9.5,7.5C9.5,4.5,12,2,15,2s5.5,2.5,5.5,5.5S18,13,15,13S9.5,10.5,9.5,7.5z" />
</svg>
      </btn>
    <the-side-bar :callback="toggleContentBlur.bind(this)" ref="theSideBar"/>
  </header>
</template>

<script>
import VueRouter from "vue-router";
const {isNavigationFailure, NavigationFailureType} = VueRouter;
import {Btn} from "../../../shared/button";
import TheAuthorizationForm from "@/components/authorizationForm/TheAuthorizationForm.vue";
import TheSideBar from "@/components/sidebar/TheSideBar.vue";
import {AUTH_PATH, HOME_PATH} from "../../../pages/consts/router/paths";
import "./heading.scss";

export default {
  components: {
    TheSideBar,
    Btn,
    TheAuthorizationForm
  },
  props: {
    width: {
      type: Number,
      required: true
    },
  },
  data: () => ({
    headerPath: "",
    isHeaderTitleVisible: false,
    buttonColor: "rgba(255,255,255,0.6)",
    headerClassVisibility: "",
    tmpOffset: 0
  }),
  methods: {
    hideAuthorizationForm() {
      // this.$refs.theAuthorizationForm.hide();
    },
    toggleSideBarVisible() {
      this.$refs.theSideBar.toggleVisible();
      this.$root.$emit("onSideBarToggle");
      this.headerClassVisibility = this.$refs.theSideBar.checkIsVisible() ? "header--transparent" : "header--active";
    },
    toggleContentBlur() {
      this.$root.$emit("onContentBlurToggle");
    },
    auth() {
      this.$router.push({path: AUTH_PATH, query: {redirect: HOME_PATH}}).catch((e) => {
            if (!isNavigationFailure(e, NavigationFailureType.redirected)) {
              Promise.reject(e)
            }
      });
    },
    checkScrollState(topOffset) {
      const res = topOffset - this.tmpOffset;
      this.tmpOffset = topOffset;
      if (topOffset === 0) {
        this.headerClassVisibility = topOffset === 0 ? "" : this.headerClassVisibility;
      }
      else {
        if (res > 0) {
          if (!this.$refs.theSideBar.checkIsVisible()) {
            this.headerClassVisibility = "header--hidden";
            return;
          }
            this.headerClassVisibility = "header--transparent";
            return;
        }
        if (!this.$refs.theSideBar.checkIsVisible()) {
          this.headerClassVisibility = "header--active";
          return;
        }
        this.headerClassVisibility = "header--transparent";
      }
    }
  }
}
</script>
