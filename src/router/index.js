import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Destinations from "../views/Destinations.vue";
import Activities from "@/views/Activities.vue";
import Safari from "../views/Safari.vue";
import MobileSafari from "../views/MobileSafari.vue";
import Camping from "../views/Camping.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Main Routes
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/contacts", name: "Contacts", component: Contacts },
    { path: "/destinations", name: "Destination", component: Destinations },
    { path: "/activities", name: "Activities", component: Activities },
    { path: "/safaris", name: "Safari", component: Safari },
    { path: "/activities/mobile", name: "Mobile", component: MobileSafari },
    { path: "/activities/camping", name: "Camping", component: Camping },
    // { path: "/activities/boat", name: "Boat", component: BoatSafari },
    // { path: "/activities/cultural", name: "Cultural", component: Cultural },
    // { path: "/activities/mokoro", name: "Mokoro", component: Mokoro },

    // Safaries
  ],
});

export default router;
