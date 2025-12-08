<template>
    <section class="py-16 bg-amber-600/30 font-lusitana">
        <div class="container mx-auto px-4">

            <div class="grid md:grid-cols-3 gap-10">

                <!-- Title -->
                <div>
                    <h2 class="text-xl md:text-2xl font-medium">
                        {{ title }}
                    </h2>
                </div>

                <!-- Days Accordion -->
                <div class="md:col-span-2 space-y-6">
                    <div v-for="(day, index) in days" :key="index" class="border-b pb-4">
                        <button class="w-full flex justify-between items-center text-left py-3 focus:outline-none"
                            @click="toggle(index)">
                            <span class="text-xl font-medium">
                                {{ day.title }}
                            </span>

                            <svg class="w-5 h-5 transform transition-transform duration-300"
                                :class="{ 'rotate-180': openIndex === index }" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M19.774 7.86c.294-.335.04-.839-.423-.84L4.538 7c-.447-.001-.698.48-.425.81l7.204 8.693a.56.56 0 0 0 .836.011l7.621-8.654z" />
                            </svg>
                        </button>

                        <div v-show="openIndex === index" class="mt-2 text-gray-700 leading-relaxed">
                            {{ day.description }}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: "Safari Itinerary"
    },
    days: {
        type: Array,
        default: () => ([
            {
                title: "Day 1",
                description: "Welcome to camp… (default sample)"
            }
        ])
    }
})

const openIndex = ref(null)

function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped></style>
