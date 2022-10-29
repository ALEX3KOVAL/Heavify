<template>
  <span>
    <slot v-bind="{userStore: getUserStore(), handleChangeIsAuth}"/>
  </span>
</template>

<script>
export default {
  name: "Consumer",
  inject: ["getUserStore", "handleChangeIsAuth"]
}
</script>

<style scoped>

</style>
