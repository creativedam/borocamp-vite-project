<template>
    <div class="w-full max-w-2xl mx-auto py-12 font-lusitana text-gray-600">
        <div v-for="(item, index) in seasons" :key="index" class="border-b border-gray-300">

            <!-- Accordion Header -->
            <button @click="toggle(index)" class="w-full flex items-center justify-between py-4 text-left">
                <span class="text-lg font-semibold">{{ item.title }}</span>

                <svg :class="openIndex === index ? 'rotate-180' : ''" class="w-4 h-4 transition-transform"
                    viewBox="0 0 24 24" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M19.774 7.86c.294-.335.04-.839-.423-.84L4.538 7c-.447-.001-.698.48-.425.81l7.204 8.693a.56.56 0 0 0 .836.011l7.621-8.654z" />
                </svg>
            </button>

            <!-- Accordion Content -->
            <div v-if="openIndex === index" class="pb-4 text-gray-700">
                {{ item.period }}
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

/* Store your values in an array */
const seasons = ref([
    { title: "Peak Season", period: "July to October" },
    { title: "Shoulder Season", period: "March to June" },
    { title: "Low Season", period: "November to February" }
]);

/* Track which accordion is open */
const openIndex = ref(null);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>
