import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Faq from "../components/Faq.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
