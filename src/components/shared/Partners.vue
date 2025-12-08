<template>
    <section id="get" class="font-lusitana bg-repeat bg-white text-gray-500 text-lg  py-10 w-full">
        <div class=" w-1/2 mx-auto py-2 text-center">
            <h4 class="text-3xl pb-10 text-amber-600">Our Partners</h4>
            <div class="py-5">

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <div alt="Partner 1" class=" h-20 bg-contain bg-center bg-no-repeat"
                        :style="{ backgroundImage: `url(${partner1})` }"></div>
                    <div alt="Partner 2" class="h-20 bg-contain bg-center bg-no-repeat"
                        :style="{ backgroundImage: `url(${partner2})` }"></div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const partner1 = new URL('@/assets/partner1.png', import.meta.url).href
const partner2 = new URL('@/assets/partner2.png', import.meta.url).href
</script>