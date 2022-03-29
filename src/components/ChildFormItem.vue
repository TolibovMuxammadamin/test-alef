<template>
  <v-row align="center">
    <v-col>
      <TextInput v-model="child.name" label="Имя" />
    </v-col>
    <v-col>
      <TextInput v-model.number="child.age" type="number" label="Возраст" />
    </v-col>
    <v-btn color="primary" text @click.prevent="$emit('remove', child.id)">
      Удалить
    </v-btn>
  </v-row>
</template>

<script>
import User from "@/models/User";
import TextInput from "./dumbs/TextInput.vue";
export default {
  components: { TextInput },
  name: "ChildFormItem",
  props: {
    child: User,
  },
};
</script>

<style></style>
