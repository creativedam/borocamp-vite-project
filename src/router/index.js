import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Destinations from "../views/Destinations.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contacts", name: "Destination", component: Contacts },
    { path: "/destinations", name: "Destination", component: Destinations },
  ],
});

export default router;
