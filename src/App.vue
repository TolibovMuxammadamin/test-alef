<template>
  <v-app>
    <AppBar />

    <v-main>
      <v-row class="pt-7">
        <v-col offset-md="3" md="6">
          <router-view />
        </v-col>
      </v-row>
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import AppBar from "@/components/Layout/AppBar.vue";
import Footer from "@/components/Layout/Footer.vue";

export default {
  name: "App",
  components: { AppBar, Footer },
  data: () => ({
    //
  }),
  mounted() {},
};
</script>
