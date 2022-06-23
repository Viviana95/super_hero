import { createRouter, createWebHistory } from "vue-router";
import Favorites from "../components/Favorites.vue";
import Races from "../components/Races.vue";
import Stats from "../components/Stats.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats,
    },
    {
      path: "/races",
      name: "races",
      component: Races,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorites,
    },
  ],
});

export default router;
