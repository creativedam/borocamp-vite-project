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
        default: new URL("@/assets/activities_image_1.jpg", import.meta.url).href,
    },
    title: {
        type: String,
        default: "MOBILE SAFARIS",
    },
    description: {
        type: String,
        default:
            "These are ideal for a fun-filled and relaxed holiday.<br/></br/> Our safari is non-participatory and allows you time to focus on interacting with nature while our highly trained staff caters to all the daily needs of your luxury mobile camp. Two types of tents are available: the budget tent and the spacious luxury safari tent. Both include a private bush shower and toilet, comfortable bedding, and warm water bottles during winter. You will enjoy outdoor dining with freshly prepared meals by our professional chef, along with snacks throughout the day."
    }
});
</script>

<style scoped></style>
