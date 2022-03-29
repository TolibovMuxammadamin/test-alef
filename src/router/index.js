import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/form",
  },
  {
    path: "/form",
    name: "form",
    component: () => import("@/views/Form"),
  },
  {
    path: "/preview",
    name: "preview",
    component: () => import("@/views/Preview"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
