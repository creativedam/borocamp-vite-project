<template>
  <div class="w-full bg-white  h-16 mb-2 md:mb-0 border-b-1 border-amber-800 relative z-50 block">
    <!-- Book Button (Mobile) -->
    <router-link
      class="block px-4 py-2 my-2 font-semibold text-base visible sm:hidden text-white shadow-sm absolute pt-2 md:pt-0 top-1 right-4"
      to="/">
      <span class="px-2">+</span> Book Appointment
    </router-link>

    <!-- Main Nav -->
    <div class="md:container md:relative w-full mx-auto block">
      <nav id="menu-main" class="xs:hidden w-full block md:flex justify-center">
        <ul id="nav-main"
          class="xs:hidden md:grid grid-cols-6 w-3/5 md:w-5/6 text-amber-800 text-base md:text-sm lg:text-base font-medium font-sans">
          <li class="py-4">
            <router-link class="hover:text-org-100 text-center px-3 border-r border-dashed border-amber-800 block"
              to="/">Home</router-link>

          </li>

          <!-- Dynamic Mega Menus -->
          <li v-for="(menu, key) in menus" :key="key" class="py-4 relative" @mouseenter="activeMenu = key"
            @mouseleave="activeMenu = null">

            <router-link class="text-center hover:text-org-100 px-4 border-r border-dashed border-amber-800e block"
              :to="`${menu.url}`">{{ menu.title }}
            </router-link>
          </li>

          <!-- Static Contact Link -->
          <li class="py-4">
            <router-link class="hover:text-org-100 text-center px-3 border-dashed border-amber-800 block"
              to="/contacts">Contact Us
            </router-link>
          </li>
        </ul>
      </nav>

      <div v-for="(menu, key) in menus" :key="key" class="relative" @mouseenter="activeMenu = key"
        @mouseleave="activeMenu = null">
        <div v-if="activeMenu === key"
          class="mt-2 grid grid-cols-3 grid-rows-1 h-72 w-full drop-shadow-md border-t-4 border-org-200 z-30 overflow-hidden animate__animated animate__fadeIn">
          <!-- Menu Title -->
          <div class="menu-title h-full py-5 px-8 bg-amber-900 text-white bg-opacity-50">
            <div class="overflow-hidden h-full ml-16">
              <h1 class="text-4xl block text-left font-bold my-6 drop-shadow-md animate__animated animate__fadeInLeft">
                {{ menu.title }}
              </h1>
              <span class="bg-org-200 w-10 h-1 block absolute top-28 left-8"></span>
            </div>
          </div>

          <!-- Menu Items (Tabs) -->
          <div class="level-one bg-gray-500 px-8 py-5 text-left text-white bg-opacity-90">
            <ul class="animate__animated animate__fadeInDown">
              <li v-for="item in menu.items" :key="item.key" class="mb-2 cursor-pointer">
                <router-link class="py-1 pl-4 block hover:text-org-100 transition hover:border-l-4 border-transparent"
                  :to="`${item.url}`" @mouseover="activeTab = item.key">
                  {{ item.label }}
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Tab Content -->
          <div class="level-two bg-gray-500 px-8 py-5 text-left text-white bg-opacity-90">
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


// Track which main menu and tab are active
const activeMenu = ref(null)
const activeTab = ref(null)


const menus = {
  about: {
    title: 'About Us',
    url: '/about',
    items: [
      {
        label: 'Mission',
        key: 'mission',
        description: 'To help employers promote health and safety.',
        url: '/about',
      },
      {
        label: 'Vision',
        key: 'vision',
        description: 'To create safe and productive workplaces.',
        url: '/about',
      },
      {
        label: 'Values',
        key: 'values',
        description: 'Professionalism, Trust, Innovation...',
        url: '/about',
      },
    ],
  },
  services: {
    title: 'Services',
    url: '/',
    items: [
      {
        label: 'Occupational Health',
        key: 'occ',
        description: 'Medicals, Surveillance, etc.',
        url: '#',
      },
      {
        label: 'Safety Systems',
        key: 'sms',
        description: 'Audits, Ergonomics, etc.',
        url: '/',
      },
      {
        label: 'Wellness',
        key: 'wellness',
        description: 'EAP, Counselling...',
        url: '#',
      },
      {
        label: 'Pandemic Response',
        key: 'pandemic',
        description: 'Support for outbreak control.',
        url: '#',
      },
    ],
  },
  // Add connect, join, etc.
}

</script>
