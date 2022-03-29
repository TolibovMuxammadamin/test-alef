<template>
  <form @submit.prevent="onSubmit">
    <Heading>Персональные данные</Heading>

    <TextInput v-model="user.name" label="Имя" />
    <TextInput v-model.number="user.age" type="number" label="Возраст" />

    <div class="add-block">
      <Heading>Дети (макс. {{ maxChild }})</Heading>
      <v-btn
        @click="addChild"
        v-if="showAdd"
        color="primary"
        outlined
        rounded
        large
      >
        <v-icon>add</v-icon>
        Добавить ребенка
      </v-btn>
    </div>

    <ChildFormItem
      v-for="child in children"
      :key="child.id"
      :child="child"
      @remove="removeChild"
    />

    <v-btn
      :disabled="!validData"
      type="submit"
      class="mt-7"
      color="primary"
      rounded
      depressed
      large
    >
      Сохранить
    </v-btn>
  </form>
</template>

<script>
import TextInput from "@/components/dumbs/TextInput.vue";
import Heading from "@/components/dumbs/Heading.vue";
import ChildFormItem from "@/components/ChildFormItem.vue";
import { mapGetters } from "vuex";
import User from "@/models/User";
export default {
  name: "Form",
  components: { TextInput, Heading, ChildFormItem },
  data() {
    return {
      maxChild: 5,
    };
  },
  methods: {
    onSubmit() {
      if (this.validData) {
        this.$router.push({ name: "preview" });
      }
    },
    addChild() {
      this.children.push(new User());
    },
    removeChild(id) {
      const index = this.children.findIndex((ch) => ch.id === id);
      this.children.splice(index, 1);
    },
  },
  computed: {
    ...mapGetters({
      user: "getUser",
      children: "getChildren",
      validData: "validData",
    }),
    showAdd() {
      return this.children.length < this.maxChild;
    },
  },
};
</script>

<style></style>
