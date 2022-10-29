<template>
    <v-list class="auth-btn__menu-list d-flex rounded-lg">
      <v-list-item
          class="auth-btn__menu-list__item d-flex align-center mx-1"
          v-for="(item, i) in items"
          :key="i"
      >
      <the-authorization-button-menu-item>
        {{item.title}}
      </the-authorization-button-menu-item>
      </v-list-item>
    </v-list>
</template>

<script>
import TheAuthorizationButtonMenuItem
  from "@/components/authrozationButtonMenu/TheAuthorizationButtonMenuItem.vue";

export default {
  name: "the-authorization-button-menu",
  components: {TheAuthorizationButtonMenuItem},
  props: ["iconsSize"],
  data: () => ({
    items: [
      {
        title: 'register',
      },
      {
        title: 'login',
      }
    ]
  }),
}
</script>

<style scoped>

</style>
