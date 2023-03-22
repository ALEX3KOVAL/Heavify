<template>
  <div @mouseleave="leave" @mouseover="hover" class="slide__item" @click="click">
    <h2 class="slide__item__title" :style="`color: ${elementColor} !important;`">{{title}}</h2>
    <div class="slide__item__img"
      :style="`background-image: url('${require(`../../../../../assets/images/${fileName}`)}');filter: ${filterValue}`"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    title: {
      type: String,
      required: true
    },
    fileName: String,
    color: {
      type: String,
      required: true,
      default: 'purple'
    }
  },
  data: () => ({
    elementColor: "purple",
    filterValue: "none"
  }),
  methods: {
    hover() {
      this.elementColor = this.$props.color;
      this.filterValue = `drop-shadow(2px 2px 2px ${this.elementColor}) !important;`;
    },
    leave() {
      this.$data.elementColor = 'purple';
      this.filterValue = "none";
    },
    click() {
      this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$emit("onModalActivated", {fileName: this.fileName, title: this.title});
      console.log(this.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$parent.$el);
      console.log("aaaaaaaaaaaa");
    }
  },
}
</script>

<style scoped>

</style>
