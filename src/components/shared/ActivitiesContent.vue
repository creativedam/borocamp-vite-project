<template>
    <section class="w-full py-16 bg-white font-lusitana">
        <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

            <!-- Loop cards -->
            <div v-for="(item, i) in activities" :key="i" class="bg-white shadow-md rounded-xl overflow-hidden">
                <!-- Image -->
                <div class="aspect-square w-full bg-cover bg-center" :style="{ backgroundImage: `url(${item.image})` }">
                </div>

                <!-- Content -->
                <div class="p-6">
                    <h2 class="text-2xl mb-4">{{ item.title }}</h2>
                    <p class="text-gray-700 mb-4">{{ item.description }}</p>

                    <router-link :to="item.link"
                        class="px-4 py-2 inline-block border border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white  transition">
                        {{ item.buttonText }}
                    </router-link>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
const activities = [
    {
        title: "MOBILE SAFARI",
        image: new URL('@/assets/activities_image_1.jpg', import.meta.url).href,
        description: `These are ideal for a fun-filled and relaxed holiday... 
Our safari is non-participatory and allows you time to focus on interacting with nature.`,
        link: "/mobile-safari",
        buttonText: "EXPLORE"
    },
    {
        title: "CAMPING",
        image: new URL('@/assets/activities_image_2.jpg', import.meta.url).href,
        description: `Our campsite is spacious with seven open campgrounds... 
Ablution block with hot showers and lights along walkways.`,
        link: "/activities",
        buttonText: "BOOK ACTIVITY NOW"
    }
];
</script>
