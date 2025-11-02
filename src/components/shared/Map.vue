<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 font-lusitana mb-12">

        <!-- Left Content -->
        <div class="w-full bg-white text-slate-800 py-12 flex items-center">
            <div class="w-full max-w-xl mx-auto px-6 md:px-10">

                <!-- Heading -->
                <div class="text-left mb-8">
                    <h2 class="text-3xl md:text-4xl text-amber-600">CONTACT ME</h2>
                    <div class="w-24 h-0.5 bg-amber-600 mt-2"></div>
                </div>

                <!-- Intro -->
                <div class="text-left mx-auto mb-10">
                    <h4 class="text-xl md:text-2xl mb-4">Start up a Conversation</h4>
                    <p class="text-slate-600 leading-relaxed">
                        I love to hear from fellow travelers! Have a question about some of my recent trips?
                        Want to share travel tips or ask something? Drop me a line!
                    </p>
                </div>

                <!-- Business Info -->
                <div class="text-left">
                    <h4 class="text-xl md:text-2xl ">Boro Okavango River Safari</h4>
                    <p class="text-slate-600">Boro Okavango River Safari, Maun, Botswana</p>
                </div>

            </div>
        </div>

        <!-- Map -->
        <div :style="{ backgroundImage: `url(${map})` }"
            class="h-72 sm:h-96 lg:h-auto bg-center bg-contain bg-yellow-900/10 bg-no-repeat">
        </div>

    </div>
</template>

<script setup>
const map = new URL('@/assets/map.png', import.meta.url).href
</script>
