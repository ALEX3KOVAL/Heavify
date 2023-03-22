<template>
  <v-btn
    icon
    @click="onClick"
    :ripple="false"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: "btn",
  methods: {
    onClick(event) {
        return this.$emit("onClick", event);
    }
  }
}
</script>
