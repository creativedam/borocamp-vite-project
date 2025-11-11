<template>
    <section class="py-16 bg-white font-lusitana">
        <div class="container xl:w-full 2xl:w-2/3 mx-auto px-10 sm:px-4">
            <h2 class="text-3xl text-center mb-10 py-10 text-amber-800 tracking-wide">
                DESTINATIONS
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in items" :key="index" class="overflow-hidden flex flex-col">
                    <img :src="item.image" :alt="item.label" class="w-full aspect-square object-cover" />
                    <div class="p-6 flex flex-col flex-1">
                        <h3 class="text-xl mb-5 text-center">{{ item.label }}</h3>
                        <p class="text-gray-500 text-lg font-light leading-relaxed flex-1 text-center">
                            {{ item.description }}
                        </p>
                    </div>
                    <!-- Button -->

                    <router-link to="#"
                        class="bg-white px-6 py-3 w-full md:w-auto text-center font-lusitana text-amber-600 shadow-sm border border-amber-600 hover:bg-gray-100 transition">
                        EXPLORE
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    {
        label: "OKAVANGO DELTA".toUpperCase(),
        image: new URL("@/assets/destinations_image_6.jpg", import.meta.url).href,
        description: "Explore the fascinating eco system of the Okavango delta via the dugout canoe. A unique mode transportation for a close encounter with this pristine and rich wilderness. You will glide effortlessly through the water ways at the stroke of the pole from your experienced guide as they unravel the mysteries of the delta."
    },
    {
        label: "MOREMI GAME RESERVE".toUpperCase(),
        image: new URL("@/assets/destinations_image_5.png", import.meta.url).href,
        description: "Moremi Game Reserve is one of the world’s most pristine habitats with countless opportunities to encounter a wide variety of animals including the big five, more than 400 bird species and a rich variety of plants.   Moremi occupies the central and eastern parts of the Okavango."
    },
    {
        label: "CHOBE NATIONAL PARK".toUpperCase(),
        image: new URL("@/assets/destinations_image_4.png", import.meta.url).href,
        description: "Chobe National park is renowned for its large population of elephants and cape buffaloes. Early morning and late afternoon game drives almost certainly warrant a sighting. Savute is located within Chobe National Park and it is known for its large population of lion prides and other predators."
    },
    {
        label: "MAKGADIKGADI SALT PANS".toUpperCase(),
        image: new URL("@/assets/destinations_image_3.jpg", import.meta.url).href,
        description: "Makgadikgadi salt pan is one of the world’s largest salt pans, the remains of a dried up Makgadikgadi lake. The Nxai pan is part of the Makgadikgadi and is said to be the remains of a pre – historic lake bed and lies 30 kilometres away from Baine’s Baobabs. These are a must see."
    },
    {
        label: "TSODILO HILLS".toUpperCase(),
        image: new URL("@/assets/destinations_image_2.jpg", import.meta.url).href,
        description: "Tsodilo Hills are a National Monument and a designated UNESCO World Heritage Site. Tsodilo is made up of spectacular hills and rock formations rich with archaeological and spiritual heritage of the San and Hambukushu people that have inhabited the area for years."
    },
    {
        label: "VICTORIA FALLS".toUpperCase(),
        image: new URL("@/assets/destinations_image_1.jpg", import.meta.url).href,
        description: "The majestic Victoria Falls (Mosi- oa -tunya) is located in the Zambezi river on the Zimbabwe/Zambia border. Victoria Falls is the largest water fall in the world and can be accessed through Kasane in northern Botswana. The giant waterfalls provide one of the most breathtaking and scenic views."
    },
];
</script>

<style scoped></style>
