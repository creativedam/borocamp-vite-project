<template>
    <section class="py-16 bg-white font-lusitana">
        <div class="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-3 gap-12 items-center">
            <img :src="image" :alt="title"
                class="w-full rounded-2xl object-cover aspect-square col-span-2 lg:col-span-1" />
            <div class="col-span-2 lg:col-span-2">
                <h1 class="text-2xl md:text-3xl mb-6 tracking-wide">
                    {{ title }}
                </h1>
                <div class="text-gray-700 leading-relaxed space-y-4 text-lg">
                    <p v-html="description"></p>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: new URL("@/assets/activities_image_2.jpg", import.meta.url).href,
    },
    title: {
        type: String,
        default: "Camping",
    },
    description: {
        type: String,
        default:
            "]Camping in the heart of the safari offers an authentic and immersive wilderness experience, allowing guests to connect closely with nature while enjoying the peace and beauty of the outdoors.Our spacious tents provide a comfortable retreat, complete with cozy bedding, private bush shower facilities, and essential amenities to ensure a relaxing stay in the wild.Meals are freshly prepared on-site, and evenings are spent around the campfire, creating a warm atmosphere perfect for storytelling, stargazing, and appreciating the serenity of the bush."
    }
});
</script>

<style scoped></style>
