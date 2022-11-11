<template>
  <span>
    <slot/>
  </span>
</template>

<script>
import UserStore from "../store/userStore";
export default {
  name: "provider",
  provide() {
    return {
      userStore: UserStore
    }
  }
}
</script>
