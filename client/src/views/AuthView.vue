<template>
  <the-authorization-form
    @onDataIsLoaded="test"
  />
</template>

<script lang="ts">
import TheAuthorizationForm from "@/components/authorizationForm/TheAuthorizationForm.vue";

export default {
  name: "AuthorizationView",
  components: {
    TheAuthorizationForm,
  },
  methods: {
    test(eventName: string) {
      //@ts-ignore
      this.$parent.$parent.$emit(eventName);
    }
  }
};
</script>
