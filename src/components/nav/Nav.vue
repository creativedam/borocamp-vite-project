<template>
  <div
    class="w-full bg-white  mx-auto  grid grid-cols-6 font-lusitana justify-between h-25 px-10 py-3 mb-2 md:mb-0 border-b border-amber-800 relative z-50  transition-all duration-300">
    <!-- Book Button (Mobile) -->
    <router-link
      class="block px-4 py-2 my-2 font-semibold text-base visible sm:hidden text-white shadow-sm absolute pt-2 md:pt-0 top-1 right-4"
      to="/">
      <span class="px-2">+</span> Book Appointment
    </router-link>


    <!-- LOGO LEFT -->
    <router-link to="/" class="flex col-span-2 items-center h-full w-50">
      <div alt="Logo" class="h-full w-50 bg-center bg-no-repeat" :style="{ backgroundImage: `url(${logo})` }"></div>
    </router-link>

    <!-- Main Nav -->
    <div class="md:container w-full col-span-4 justify-end mx-auto block">
      <nav id="menu-main" class="xs:hidden py-4  w-full block md:flex justify-end h-20 font-lusitana">
        <ul id="nav-main"
          class="xs:hidden md:flex  justify-end  h-20 w-3/5 md:w-5/6 text-black text-base md font-light lg:text-base font-medium font-sans">
          <!-- Static Contact Link -->
          <li class="py-4 h-20">
            <router-link class="hover:text-org-100 text-center px-3 font-light font-lusitana block hover:font-bold"
              to="/">
              HOME
            </router-link>
          </li>

          <!-- Dynamic Mega Menus -->
          <li v-for="(menu, key) in menus" :key="key" class="py-4 h-20 relative" @mouseenter="activeMenu = key">
            <router-link class="text-center hover:text-org-100 font-lusitana font-light px-4 block hover:font-bold"
              :to="menu.url">
              {{ menu.title }}
            </router-link>
          </li>

          <!-- Static Contact Link -->
          <li class="py-4 h-20">
            <router-link class="hover:text-org-100 text-center font-light font-lusitana px-3 block hover:font-bold"
              to="/contacts">
              CONTACT
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- Dropdown Panels -->
      <div v-for="(menu, key) in menus" :key="key" class="w-full absolute top-28 -mt-2  left-0  right-0"
        @mouseenter="activeMenu = key" @mouseleave="closeMenus">
        <div v-if="activeMenu === key"
          class="grid grid-cols-3 grid-rows-1 h-72 w-full drop-shadow-md z-30 overflow-hidden animate__animated animate__fadeIn">
          <!-- Menu Title -->
          <div class="menu-title h-full py-5 px-8 bg-amber-900/90 text-white flex items-center justify-center">
            <div class="text-center relative">
              <h1 class="text-4xl  drop-shadow-md">
                {{ menu.title }}
              </h1>
              <span class="bg-org-200 w-10 h-1 block absolute left-1/2 -translate-x-1/2 mt-2"></span>
            </div>
          </div>


          <!-- Menu Items -->
          <div class="level-one bg-white/80 px-8 py-5 text-gray-700">
            <ul class="animate__animated animate__fadeInDown">
              <li v-for="item in menu.items" :key="item.key" class="mb-2 cursor-pointer block w-full">
                <router-link class="py-1 pl-4 block hover:text-org-100 transition hover:border-l-4 border-transparent"
                  :to="item.url" @mouseover="activeTab = item.key">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Tab Content -->
          <div class="level-two bg-white/80 px-8 py-5 text-left text-gray-700">
            <div v-for="item in menu.items" :key="item.key" v-show="activeTab === item.key"
              class="h-full p-3 pointer-events-none animate__animated animate__fadeInDown">
              {{ item.description }}
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// state
const activeMenu = ref(null)
const activeTab = ref(null)
const showMenu = ref(true)
let lastScrollY = 0

// close all menus
const closeMenus = () => {
  activeMenu.value = null
  activeTab.value = null
}

const logo = new URL('@/assets/logo.png', import.meta.url).href
// menu structure
const menus = {
  about: {
    title: 'ABOUT',
    url: '/about',
    items: [
      { label: 'Mission', key: 'mission', description: 'This will be our mission', url: '/about' },
      { label: 'Vision', key: 'vision', description: 'This will be our vision', url: '/about' },
      { label: 'Values', key: 'values', description: 'This will be our values', url: '/about' }
    ]
  },
  services: {
    title: 'DESTINATIONS',
    url: '/',
    items: [
      {
        label: 'Destination 1',
        key: '1',
        description: 'Destination description',
        url: '#',
      },
      {
        label: 'Destination 2',
        key: '2',
        description: 'Distination description',
        url: '/',
      },
      {
        label: 'Destination 3',
        key: '3',
        description: 'Distination description',
        url: '#',
      },
    ],
  },
  activities: {
    title: 'ACTIVITIES',
    url: '/',
    items: [
      {
        label: 'Activity 1',
        key: '1',
        description: 'Activity description',
        url: '#',
      },
      {
        label: 'Activity 2',
        key: '2',
        description: 'Activity description',
        url: '/',
      },
      {
        label: 'Activity 3',
        key: '3',
        description: 'Activity description',
        url: '#',
      },
    ],
  },
  Gallerys: {
    title: 'SAFARI',
    url: '/',
    items: [
      {
        label: 'Safari 1',
        key: '1',
        description: 'Safari description',
        url: '#',
      },
      {
        label: 'Safari 2',
        key: '2',
        description: 'Safari description',
        url: '/',
      },
      {
        label: 'Safari 3',
        key: '3',
        description: 'Safari description',
        url: '#',
      },
    ]
  }

}
</script>

<style>
.translate-y-full {
  transform: translateY(-100%);
}
</style>
