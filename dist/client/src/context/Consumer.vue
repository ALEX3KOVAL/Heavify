<template>
  <span>
    <slot v-bind="{userStore}" />
  </span>
</template>

<script>
export default {
  name: "consumer",
  inject: ["userStore"]
}
</script>

