<template>
  <v-app-bar app color="white" elevation="1" height="76">
    <v-container>
      <v-row no-gutters justify="space-between" align="center">
        <v-app-bar-nav-icon>
          <Logo />
        </v-app-bar-nav-icon>
        <div>
          <v-btn @click="$router.push({ name: 'form' })" color="gray" text>
            Форма
          </v-btn>
          <v-btn @click="$router.push({ name: 'preview' })" color="gray" text>
            Превью
          </v-btn>
        </div>
        <div></div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "AppBar",
  components: { Logo },
};
</script>

<style scoped></style>
