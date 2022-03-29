<template>
  <div class="child-item">
    <div class="child-item__content">
      <Heading class="child-item__text">
        {{ child.name }}, {{ child.age }} лет
      </Heading>
    </div>
  </div>
</template>

<script>
import User from "@/models/User";
import Heading from "./dumbs/Heading.vue";
export default {
  components: { Heading },
  name: "ChildItem",
  props: {
    child: User,
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/exports.scss";
@import "~vuetify/src/styles/styles.sass";

.child-item {
  &__content {
    display: inline-block;
    padding: 0.625rem 1.25rem;
    background-color: $gray-l;
    border-radius: $border-radius-root;
  }

  &__text {
    margin: 0;
  }

  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
}
</style>
