<template>
    <div
        class="w-full bg-white mx-auto grid grid-cols-6 font-lusitana justify-between h-25 px-10 py-3 mb-2 md:mb-0 border-b border-amber-800 relative z-50 transition-all duration-300">

        <!-- MOBILE BURGER BUTTON -->
        <button @click="mobileOpen = !mobileOpen" class="sm:hidden flex items-center text-amber-800 text-3xl font-bold">
            ☰
        </button>

        <!-- LOGO -->
        <router-link to="/" class="flex col-span-2 items-center h-full w-50">
            <div class="h-full w-50 bg-center bg-no-repeat" :style="{ backgroundImage: `url(${logo})` }"></div>
        </router-link>

        <!-- DESKTOP NAV -->
        <div class="md:container w-full col-span-4 justify-end mx-auto hidden sm:block">
            <nav id="menu-main" class="py-4 w-full flex justify-end h-20 font-lusitana">
                <ul id="nav-main" class="flex justify-end h-20 w-5/6 text-black text-base font-medium font-sans">
                    <li class="py-4 h-20">
                        <router-link
                            class="hover:text-org-100 text-center px-3 font-light font-lusitana block hover:font-bold"
                            to="/">HOME</router-link>
                    </li>
                    <li v-for="(menu, key) in menus" :key="key" class="py-4 h-20 relative"
                        @mouseenter="activeMenu = key">
                        <router-link
                            class="text-center hover:text-org-100 font-lusitana font-light px-4 block hover:font-bold"
                            :to="menu.url">{{ menu.title }}</router-link>
                    </li>
                    <li class="py-4 h-20">
                        <router-link
                            class="hover:text-org-100 text-center font-light font-lusitana px-3 block hover:font-bold"
                            to="/contacts">CONTACT</router-link>
                    </li>
                </ul>
            </nav>

            <!-- DROPDOWN PANELS -->
            <div v-for="(menu, key) in menus" :key="key" class="w-full absolute top-28 -mt-2 left-0 right-0"
                @mouseenter="activeMenu = key" @mouseleave="closeMenus">
                <div v-if="activeMenu === key"
                    class="grid grid-cols-3 h-72 w-full drop-shadow-md z-30 overflow-hidden animate__animated animate__fadeIn">
                    <div class="menu-title flex items-center justify-center bg-amber-900/90 text-white">
                        <div class="text-center relative">
                            <h1 class="text-4xl drop-shadow-md">{{ menu.title }}</h1>
                            <span class="bg-org-200 w-10 h-1 block absolute left-1/2 -translate-x-1/2 mt-2"></span>
                        </div>
                    </div>

                    <div class="bg-white/80 px-8 py-5 text-gray-700">
                        <ul class="animate__animated animate__fadeInDown">
                            <li v-for="item in menu.items" :key="item.key" class="mb-2 cursor-pointer block w-full">
                                <router-link
                                    class="py-1 pl-4 block hover:text-org-100 transition hover:border-l-4 border-transparent"
                                    :to="item.url" @mouseover="activeTab = item.key">{{ item.label }}</router-link>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white/80 px-8 py-5 text-left text-gray-700">
                        <div v-for="item in menu.items" :key="item.key" v-show="activeTab === item.key"
                            class="h-full p-3 pointer-events-none animate__animated animate__fadeInDown">{{
                                item.description }}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MOBILE MENU SLIDE-IN -->
        <transition name="slide">
            <div v-if="mobileOpen"
                class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 p-6 sm:hidden overflow-y-auto">
                <button @click="mobileOpen = false" class="text-2xl font-bold mb-4">×</button>
                <ul class="space-y-4">
                    <li>
                        <router-link @click="mobileOpen = false" to="/" class="block py-2 font-bold">HOME</router-link>
                    </li>

                    <!-- MOBILE ACCORDION MENUS -->
                    <li v-for="(menu, key) in menus" :key="key" class="border-b pb-2">
                        <button @click="toggleMobileDropdown(key)" class="w-full text-left font-bold py-2">{{ menu.title
                            }}</button>
                        <ul v-show="mobileDropdown === key" class="pl-4 space-y-2">
                            <li v-for="item in menu.items" :key="item.key">
                                <router-link @click="mobileOpen = false" :to="item.url" class="block py-1 text-sm">{{
                                    item.label }}</router-link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <router-link @click="mobileOpen = false" to="/contacts"
                            class="block py-2 font-bold">CONTACT</router-link>
                    </li>
                </ul>
            </div>
        </transition>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const activeMenu = ref(null)
const activeTab = ref(null)
const mobileOpen = ref(false)
const mobileDropdown = ref(null)
const closeMenus = () => { activeMenu.value = null; activeTab.value = null }
const toggleMobileDropdown = (key) => mobileDropdown.value = mobileDropdown.value === key ? null : key
const logo = new URL('@/assets/logo.png', import.meta.url).href

const menus = {
    about: { title: 'ABOUT', url: '/about', items: [{ label: 'Mission', key: 'mission', description: 'Our mission', url: '/about' }, { label: 'Vision', key: 'vision', description: 'Our vision', url: '/about' }, { label: 'Values', key: 'values', description: 'Our values', url: '/about' }] },
    services: { title: 'DESTINATIONS', url: '/', items: [{ label: 'Destination 1', key: '1', description: 'Description', url: '#' }, { label: 'Destination 2', key: '2', description: 'Description', url: '/' }, { label: 'Destination 3', key: '3', description: 'Description', url: '#' }] },
    activities: { title: 'ACTIVITIES', url: '/', items: [{ label: 'Activity 1', key: '1', description: 'Description', url: '#' }, { label: 'Activity 2', key: '2', description: 'Description', url: '/' }, { label: 'Activity 3', key: '3', description: 'Description', url: '#' }] },
    safari: { title: 'SAFARI', url: '/', items: [{ label: 'Safari 1', key: '1', description: 'Description', url: '#' }, { label: 'Safari 2', key: '2', description: 'Description', url: '/' }, { label: 'Safari 3', key: '3', description: 'Description', url: '#' }] }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: transform .3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>