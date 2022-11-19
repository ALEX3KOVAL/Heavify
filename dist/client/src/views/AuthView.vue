<template>
  <the-authorization-form>
  <!-- @onButtonClick="userStore.actions.test(`It's working`)" -->
  </the-authorization-form>
</template>

<script lang="ts">
import TheAuthorizationForm from "@/components/authorizationForm/TheAuthorizationForm.vue";

export default {
  name: "AuthorizationView",
  components: {
    TheAuthorizationForm,
  },
};
</script>

<style scoped>

</style>
