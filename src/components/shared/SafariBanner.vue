<template>
    <section :id="id" class="w-full bg-gray-200 py-14" role="region" :aria-label="ariaLabel">
        <div class="container mx-auto px-4">
            <div class="bg-white/0 rounded-lg p-6 md:p-12 flex items-center justify-center">
                <div class="text-center">
                    <h1 v-if="title" class="text-xl md:text-2xl font-medium font-lusitana leading-tight text-gray-800">
                        {{ title }}
                    </h1>
                    <p v-if="subtitle" class="mt-3 text-sm md:text-base text-gray-700">
                        {{ subtitle }}
                    </p>
                    <!-- optional slot for extra content (buttons, breadcrumbs etc.) -->
                    <div v-if="$slots.default" class="mt-5">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        default: null,
    },
    title: {
        type: String,
        default: "SECTION TITLE",
    },
    subtitle: {
        type: String,
        default: "",
    },
    ariaLabel: {
        type: String,
        default: "Section banner",
    },
});
</script>

<style scoped>
/* optional: subtle underline for large headings (uncomment if you want) */
/* h1 {
  text-decoration: underline dotted rgba(0,0,0,0.06);
  text-underline-offset: 8px;
} */
</style>
