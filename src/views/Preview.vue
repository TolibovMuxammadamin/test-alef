<template>
  <div>
    <Heading class="mb-5">Персональные данные</Heading>

    <Heading class="mb-15" bold>{{ user.name }}, {{ user.age }} лет</Heading>

    <Heading class="mb-5">Дети</Heading>

    <ChildItem v-for="child in children" :key="child.id" :child="child" />
  </div>
</template>

<script>
import Heading from "@/components/dumbs/Heading.vue";
import ChildItem from "@/components/ChildItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "Preview",
  components: { Heading, ChildItem },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      children: "getChildren",
      validData: "validData",
    }),
  },
  mounted() {
    if (!this.validData) {
      this.$router.push({ name: "form" });
    }
  },
};
</script>

<style></style>
