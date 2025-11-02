<template>
    <section class="w-full bg-white py-16 font-lusitana">
        <div class="container mx-auto px-4">

            <div class="flex justify-center">
                <div class="bg-white shadow-lg rounded-lg overflow-hidden text-center 
                 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">

                    <!-- Image -->
                    <div class="w-full h-64 sm:h-72 md:h-96 bg-contain bg-center bg-no-repeat"
                        :style="{ backgroundImage: `url(${drone_image})` }"></div>

                    <!-- Title -->
                    <h1 class="text-2xl md:text-3xl text-amber-800 font-semibold mt-4">
                        Boro Okavango River Safari
                    </h1>

                    <!-- Description -->
                    <p class="text-gray-600 px-6 pt-6 pb-10 text-sm md:text-base leading-relaxed">
                        At Boro Okavango River Safari, we strive to provide our customers with
                        the best travel experiences possible. Our mission is to make travel
                        easy, affordable and enjoyable for everyone.
                    </p>

                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
const drone_image = new URL('@/assets/drone_image.png', import.meta.url).href
</script>
