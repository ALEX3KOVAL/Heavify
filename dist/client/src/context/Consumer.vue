<template>
  <span>
    <slot v-bind="{userStore, headerHeight}" />
  </span>
</template>

<script>
export default {
  name: "consumer",
  inject: ["userStore", "headerHeight"]
}
</script>

