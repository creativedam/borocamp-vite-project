<template>
    <section class="py-16 bg-white font-lusitana">
        <div class="container mx-auto px-4 grid md:grid-cols-3 gap-10">

            <!-- Title -->
            <div>
                <h2 class="text-xl md:text-2xl font-medium tracking-wide">
                    {{ title }}
                </h2>
                <p class=" font-normal"> {{ duration }} </p>
            </div>

            <!-- List -->
            <div class="md:col-span-2">
                <ul class="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed">
                    <li v-for="(item, index) in items" :key="index">
                        {{ item }}
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "WHAT TO EXPECT",
    },
    duration: {
        type: String,
        default: "7 DAYS - 6 NIGHTS",
    },
    items: {
        type: Array,
        default: () => [
            "Activity 1 ",
            "Activity 2",
            "Activity 3",
            "Activity 4",
            "Activity 5",
            "Activity 6",
        ]
    }
});
</script>

<style scoped></style>
