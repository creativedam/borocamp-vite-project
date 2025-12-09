import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contacts from "@/views/Contacts.vue";
import Destinations from "../views/Destinations.vue";
import Activities from "@/views/Activities.vue";
import Safari from "../views/Safari.vue";
import MobileSafari from "../views/MobileSafari.vue";
import Camping from "../views/Camping.vue";
import NotFound from "../views/NotFound.vue";

// Safaris
import OkavangoDeltaMokoroMoremiScenicSafari from "../views/Safaris/OkavangoDeltaMokoroMoremiScenicSafari.vue";
import MoremiKhwaiSafariExperience from "../views/Safaris/MoremiKhwaiSafariExperience.vue";
import TsodiloHillsOkavangoPanhandleDiscoveryTrail from "../views/Safaris/TsodiloHillsOkavangoPanhandleDiscoveryTrail.vue";

import MoremiKhwaiSavuteExpedition from "../views/Safaris/MoremiKhwaiSavuteExpedition.vue";
import OkavangoMoremiMakgadikgadiSafariAdventure from "../views/Safaris/OkavangoMoremiMakgadikgadiSafariAdventure.vue";
import OkavangoMoremiKhwaiSavuteChobeVictoriaFallsGrandSafari from "../views/Safaris/OkavangoMoremiKhwaiSavuteChobeVictoriaFallsGrandSafari.vue";
const routes = [
  // Main Routes
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/contacts", name: "Contacts", component: Contacts },
  { path: "/destinations", name: "Destination", component: Destinations },
  { path: "/activities", name: "Activities", component: Activities },
  { path: "/safaris", name: "Safari", component: Safari },
  {
    path: "/safari/moremi-khwai-safari-experience",
    name: "MoremiKhwaiSafariExperience",
    component: MoremiKhwaiSafariExperience,
  },

  {
    path: "/safari/moremi-khwai-savute-expedition",
    name: "MoremiKhwaiSavuteExpedition",
    component: MoremiKhwaiSavuteExpedition,
  },

  {
    path: "/safari/okavango-delta-mokoro-moremi-scenic-safari",
    name: "OkavangoDeltaMokoroMoremiScenicSafari",
    component: OkavangoDeltaMokoroMoremiScenicSafari,
  },

  {
    path: "/safari/okavango-moremi-khwai-savute-chobe-victoria-falls-grand-safari",
    name: "OkavangoMoremiKhwaiSavuteChobeVictoriaFallsGrandSafari",
    component: OkavangoMoremiKhwaiSavuteChobeVictoriaFallsGrandSafari,
  },

  {
    path: "/safari/okavango-moremi-makgadikgadi-safari-adventure",
    name: "OkavangoMoremiMakgadikgadiSafariAdventure",
    component: OkavangoMoremiMakgadikgadiSafariAdventure,
  },

  {
    path: "/safari/tsodilo-hills-okavango-panhandle-discovery-trail",
    name: "TsodiloHillsOkavangoPanhandleDiscoveryTrail",
    component: TsodiloHillsOkavangoPanhandleDiscoveryTrail,
  },

  { path: "/activities/mobile", name: "Mobile", component: MobileSafari },
  { path: "/activities/camping", name: "Camping", component: Camping },

  // { path: "/activities/boat", name: "Boat", component: BoatSafari },
  // { path: "/activities/cultural", name: "Cultural", component: Cultural },
  // { path: "/activities/mokoro", name: "Mokoro", component: Mokoro },

  // Safaries

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
