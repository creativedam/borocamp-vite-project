<template>
    <section class="py-16 bg-white font-lusitana">
        <div class="container mx-auto px-4">
            <p class="text-sm  font-normal w-full text-center  text-amber-500 ">
                TRIPS IN OKAVANGO, MOREMI, CHOBE, VICTORIA FALLS
            </p>
            <h2 class="text-2xl md:text-4xl font-normal text-center mb-12 tracking-wide">
                TAILOR MADE SAFARIS
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in items" :key="index" class="bg-gray-50   overflow-hidden flex flex-col">

                    <!-- Image -->
                    <img :src="item.image" :alt="item.label" class="w-full aspect-square object-cover" />

                    <!-- Content -->
                    <div class="p-6 flex flex-col flex-1">
                        <h3 class="text-xl mb-5 text-center">{{ item.label }}</h3>
                        <p class="text-gray-600 text-sm font-light text-center mb-4">{{ item.stay.toUpperCase() }}</p>
                        <p class="text-gray-500 text-lg font-light leading-relaxed flex-1 text-center">
                            {{ item.description }}
                        </p>
                        <p class="text-gray-700 text-base font font-medium text-center mt-4">{{ item.price }}
                        </p>
                        <p class="text-gray-600 text-sm font-light text-center mb-4">{{ item.pax.toUpperCase() }}</p>

                        <!-- Button -->
                        <router-link :to="item.url"
                            class="bg-white px-6  py-3 w-full md:w-auto text-center font-lusitana text-amber-600 shadow-sm border border-amber-600 hover:bg-gray-100 transition">
                            EXPLORE
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    {
        label: "OKAVANGO DELTA BY MOKORO + MOREMI TRIP",
        stay: "7days/6nights",
        image: new URL("@/assets/safari_image_1.jpg", import.meta.url).href,
        description: "Exhilarating canoe rides, Spectacular views of the delta, Close encounter with nature, Variety of bird species, Walking safari, Moremi day trip",
        price: "FROM USD$ 990/pp",
        pax: "Minimum 2pax",
        url: "/safari/okavango-delta-mokoro-moremi",
    },
    {
        label: "MOREMI + KHWAI SAFARI",
        stay: "7days/6nights",
        image: new URL("@/assets/safari_image_2.jpg", import.meta.url).href,
        description: "Experience the unparalleled beauty of Moremi, Vast expanse of the pristine wilderness, Track the big five, Camp within the game reserve",
        price: "FROM USD$ 1,335/pp",
        pax: "Minimum 2pax",
        url: "/safari/moremi-khwai",
    },
    {
        label: "MOREMI + KHWAI + SAVUTE",
        stay: "7days/6nights",
        image: new URL("@/assets/safari_image_3.jpg", import.meta.url).href,
        description: "Experience the unparalleled beauty of Moremi, Vast expanse of the pristine wilderness, Track the big five in Savute. This is the home of the predators, Camp within the game reserve",
        price: "FROM USD$ 1600/pp",
        pax: "Minimum 2pax",
        url: "/safari/moremi-khwai-savute",
    },
    {
        label: "TSODILO HILLS + OKAVANGO PAN HANDLE TRAIL",
        stay: "7days/6nights",
        image: new URL("@/assets/safari_image_4.jpg", import.meta.url).href,
        description: "Visit Tsodilo Hills – the 'mountains of the gods', Okavango River boat cruise – pan handle, Local Handicrafts/souvenir market, Cultural dance around the fire (extra cost)",
        price: "FROM USD$ 1956/pp",
        pax: "Minimum 2pax",
        url: "/safari/tsodilo-hills-okavango-trail",
    },
    {
        label: "OKAVANGO + MOREMI + MAKGADIKGADI SAFARI",
        stay: "9days/8nights",
        image: new URL("@/assets/safari_image_5.jpg", import.meta.url).href,
        description: "Canoe ride, Spectacular views of the delta, Makgadikgadi pans, Nxai Pan, Baines Baobab, Kubu Island, Big Five in Moremi game reserve",
        price: "FROM USD$ 2344/pp",
        pax: "Minimum 2pax",
        url: "/safari/okavango-moremi-makgadikgadi",
    },
    {
        label: "OKAVANGO + MOREMI + KHWAI + SAVUTE + CHOBE",
        stay: "10days/9nights",
        image: new URL("@/assets/safari_image_6.jpg", import.meta.url).href,
        description: "Experience the unparalleled beauty of the Okavango, Moremi and Chobe National Park, Vast expanse of pristine wilderness, Track the big five, Boat cruise on the mighty Chobe River, Camp within the game reserve",
        price: "FROM USD$ 2500/pp",
        pax: "Minimum 2pax",
        url: "/safari/okavango-moremi-khwai-savute-chobe",
    }
];
</script>

<style scoped>
/* Optional styling for smoother hover transitions */
</style>
