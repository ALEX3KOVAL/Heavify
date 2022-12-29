<template>
  <section class="auth__layout">
    <content
        :page-name="'index'"
    >
      <router-view />
    </content>
  </section>
</template>

<script>
import Content from "../components/content/TheContent.vue";
export default {
  name: "AuthLayout",
  components: {
    Content,
  }
}
</script>

<style scoped>

</style>
