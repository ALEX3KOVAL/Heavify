<template>
  <span>
    <slot v-bind="{isAuth}"/>
  </span>
</template>

<script>
import UserStore from "../store/userStore";

export default {
  name: "Provider",
  props: {
    propUserStore: UserStore
  },
  data() {
    return {
      dataUserStore: this.propUserStore
    }
  },
  computed: {
    userStore() {
      return this.dataUserStore;
    },
    handleChangeIsAuth(isAuth) {
      this.dataUserStore.setIsAuth(isAuth);
    }
  },
  provide() {
    return {
      getUserStore: () => this.userStore,
      handleChangeIsAuth: this.handleChangeIsAuth,
    }
  }
}
</script>

<style scoped>

</style>
