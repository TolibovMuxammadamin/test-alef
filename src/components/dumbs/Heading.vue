<template>
  <h1 class="heading" :class="{ bold }">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: "Heading",
  props: {
    bold: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.heading {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1.25rem;

  &.bold {
    font-weight: 700;
  }
}
</style>
