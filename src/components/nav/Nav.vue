<template>
  <div
    class="w-full bg-white mx-auto grid grid-cols-6 font-lusitana justify-between  min-h-32 sm:h-25 px-4 md:px-10 py-3  border-b border-amber-800 relative z-50 transition-all duration-300">
    <!-- MOBILE BURGER BUTTON -->
    <button @click="mobileOpen = !mobileOpen"
      class="sm:hidden flex items-center h-25 text-amber-800 text-3xl font-bold">
      ☰
    </button>

    <!-- LOGO -->
    <router-link to="/" class="flex col-span-2 items-center h-full w-50">
      <div class="h-full w-50 bg-center bg-no-repeat" :style="{ backgroundImage: `url(${logo})` }"></div>
    </router-link>

    <!-- DESKTOP NAV -->
    <div class="md:container w-full col-span-4 justify-end mx-auto hidden sm:block">
      <nav id="menu-main" class="py-4 w-full flex justify-end h-20 font-lusitana">
        <ul id="nav-main" class="flex justify-end h-20 w-5/6 text-black font-medium font-sans">
          <li class="py-4 h-20">
            <router-link
              class="hover:text-org-100 text-center text-xs hidden  lg:text-base px-3 font-light font-lusitana lg:block hover:font-bold"
              to="/">HOME</router-link>
          </li>
          <li v-for="(menu, key) in menus" :key="key" class="py-4 h-20 relative" @mouseenter="activeMenu = key">
            <router-link
              class="text-center hover:text-org-100 text-xs lg:text-base font-lusitana font-light px-2 lg:px-4 block hover:font-bold"
              :to="menu.url">{{ menu.title }}</router-link>
          </li>
          <li class="py-4 h-20">
            <router-link
              class="hover:text-org-100 text-center text-xs lg:text-base font-light font-lusitana px-3 block hover:font-bold"
              to="/contacts">CONTACT</router-link>
          </li>
        </ul>
      </nav>

      <!-- DROPDOWN PANELS -->
      <div v-for="(menu, key) in menus" :key="key" class="w-full absolute top-28 -mt-2 left-0 right-0"
        @mouseenter="activeMenu = key" @mouseleave="closeMenus">
        <div v-if="activeMenu === key"
          class="grid grid-cols-3 min-h-75 w-full drop-shadow-md z-30 overflow-hidden animate__animated animate__fadeIn">
          <div class="menu-title flex items-center justify-center bg-amber-900/90 text-white">
            <div class="text-center relative">
              <h1 class="text-4xl drop-shadow-md">{{ menu.title }}</h1>
              <span class="bg-org-200 w-10 h-1 block absolute left-1/2 -translate-x-1/2 mt-2"></span>
            </div>
          </div>
          <div class="bg-white/80 px-8 py-5 text-gray-700 flex flex-col justify-center">
            <ul class="animate__animated animate__fadeInDown">
              <li v-for="item in menu.items" :key="item.key" class="mb-2 cursor-pointer block w-full">
                <router-link class="py-1 pl-4 block hover:text-org-100 transition hover:font-bold border-transparent"
                  :to="item.url" @mouseover="activeTab = item.key">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="bg-white/80 px-8 py-5 text-left text-gray-700 flex flex-col justify-center">
            <div v-for="item in menu.items" :key="item.key" v-show="activeTab === item.key"
              class="p-3 pointer-events-none animate__animated animate__fadeInDown">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MOBILE MENU SLIDE-IN -->
    <transition name="slide">
      <div v-if="mobileOpen"
        class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-6 sm:hidden overflow-y-auto animate__animated animate__fadeInLeft">
        <button @click="mobileOpen = false"
          class="text-2xl rounded-full border border-amber-800 py-2 px-4 hover:text-white text-black bg-white hover:bg-amber-800 font-bold mb-4">
          ×
        </button>
        <ul class="space-y-4">
          <li>
            <router-link @click="mobileOpen = false" to="/" class="block py-2 ">HOME</router-link>
          </li>

          <!-- MOBILE ACCORDION MENUS -->
          <li v-for="(menu, key) in menus" :key="key" class="border-b pb-2">
            <button @click="toggleMobileDropdown(key)" class="w-full text-amber-900 text-left  py-2">
              {{ menu.title }} <span class="px-2">⌄</span>
            </button>
            <ul v-show="mobileDropdown === key" class="pl-4 space-y-2">
              <li v-for="item in menu.items" :key="item.key">
                <router-link @click="mobileOpen = false" :to="item.url" class="block py-1 text-amber-600 text-sm">{{
                  item.label
                  }}</router-link>
              </li>
            </ul>
          </li>

          <li>
            <router-link @click="mobileOpen = false" to="/contacts" class="block py-2 ">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
const activeMenu = ref(null);
const activeTab = ref(null);
const mobileOpen = ref(false);
const mobileDropdown = ref(null);
const closeMenus = () => {
  activeMenu.value = null;
  activeTab.value = null;
};
const toggleMobileDropdown = (key) =>
  (mobileDropdown.value = mobileDropdown.value === key ? null : key);
const logo = new URL("@/assets/logo.png", import.meta.url).href;

const menus = {
  destinations: {
    title: "DESTINATIONS",
    url: "/destinations",
    items: [
      {
        label: "WHERE ADVENTURE BEGINS",
        key: "1",
        description: "Discover Botswana’s most breathtaking safari destinations — from the crystal waters of the Okavango Delta to the vast savannas of Chobe and the ancient magic of Tsodilo Hills. Each location offers a unique blend of wildlife, culture, and scenic beauty for unforgettable experiences.",
        url: "/destinations",
      }
    ],
  },
  activities: {
    title: "ACTIVITIES",
    url: "/activities",
    items: [
      { label: "MOBILE SAFARI", key: "1", description: "These are ideal for a fun-filled and relaxed holiday.", url: "/activities/mobile" },
      { label: "CAMPING", key: "2", description: "Our campsite is spacious with seven open campgrounds", url: "/activities/camping" },
      { label: "BOAT CRUISE", key: "3", description: "Exciting motorboat cruises offered as day trips or part of a mobile safari. Explore Thamalakane River, Boro Channel, Xakanaxa, and Chobe River for scenic water adventures.", url: "/activities" },
      { label: "CULTURAL TOURS", key: "4", description: "Engage with local communities through song, dance, arts, and crafts. Day trips to the Okavango Delta or Tsodilo Hills to experience the culture of the San, Bayei, and Hambukushu.", url: "/activities" },
      { label: "MOKORO EXCURDSIONS", key: "5", description: "Experience mokoro rides combined with walking safaris near camp. Great for spotting birds and wildlife. Offered as a day trip or part of mobile safari activities.", url: "/activities" },
    ],
  },
  safaris: {
    title: "SAFARIS",
    url: "/safaris",
    items: [
      {
        label: "Moremi–Khwai Safari Experience",
        key: "2",
        description: "Experience the unparalleled beauty of Moremi, vast expanse of the pristine wilderness, track the big five, camp within the game reserve.",
        url: "/safari/moremi-khwai-safari-experience"
      },

      {
        label: "Moremi–Khwai–Savute Expedition",
        key: "3",
        description: "Experience the unparalleled beauty of Moremi, vast expanse of pristine wilderness, track the big five in Savute. This is the home of the predators. Camp within the game reserve.",
        url: "/safari/moremi-khwai-savute-expedition"
      },

      {
        label: "Okavango Delta Mokoro + Moremi Scenic Safari",
        key: "1",
        description: "Exhilarating canoe rides, spectacular views of the delta, close encounter with nature, variety of bird species, walking safari, Moremi day trip.",
        url: "/safari/okavango-delta-mokoro-moremi-scenic-safari"
      },

      {
        label: "Okavango–Moremi–Khwai–Savute–Chobe–Victoria Falls Grand Safari",
        key: "7",
        description: "Experience the unparalleled beauty of Victoria Falls, Okavango, Moremi, Khwai, Savute, and Chobe National Parks. Vast expanse of pristine wilderness, track the big five, boat cruise on the mighty Chobe River, camp within the game reserves.",
        url: "/safari/okavango-moremi-khwai-savute-chobe-victoria-falls-grand-safari"
      },

      {
        label: "Okavango–Moremi–Makgadikgadi Safari Adventure",
        key: "5",
        description: "Canoe ride, spectacular views of the delta, Makgadikgadi pans, Nxai Pan, Baines Baobab, Kubu Island, Big Five in Moremi game reserve.",
        url: "/safari/okavango-moremi-makgadikgadi-safari-adventure"
      },

      {
        label: "Tsodilo Hills & Okavango Panhandle Discovery Trail",
        key: "4",
        description: "Visit Tsodilo Hills – the 'mountains of the gods', Okavango River boat cruise – pan handle, local handicrafts/souvenir market, cultural dance around the fire (extra cost).",
        url: "/safari/tsodilo-hills-okavango-panhandle-discovery-trail"
      },
    ],
  }

};
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
