import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import FaqPage from "../views/FaqPage.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/faq",
    name: "Frequently Asked Questions",
    component: FaqPage
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
