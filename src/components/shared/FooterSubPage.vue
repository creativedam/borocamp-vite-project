<template>
    <div class="w-full">

        <!-- SOCIAL ICONS SECTION -->
        <section class="w-full bg-white text-slate-800 pt-8">
            <div class="container mx-auto px-5 flex justify-center sm:justify-start">
                <div class="w-12 h-12 mx-auto">
                    <social name="facebook" class="w-full h-full fill-gray-200 hover:fill-aky-800" />
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="w-full bg-white text-white py-10">
            <div class="container mx-auto px-5">


                <!-- COPYRIGHT TEXT -->
                <div class="text-center  block ">
                    <span class="font-sans font-normal text-gray-500 block">
                        Copyright © 2023 Boro Okavango River Safari - All Rights Reserved.
                    </span>
                </div>
                <div class="border-b w-20 border-gray-200 h-5 mx-auto mb-5">

                </div>

                <!-- DESIGNER CREDIT -->
                <div class="text-center block ">
                    <a href="creativedam" alt
                        class="font-sans font-normal text-gray-500 hover:text-fuchsia-500 block md:inline">
                        Sedie Ward, Maun, Botswana
                    </a>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
import Social from '@/components/shared/Social.vue'

export default {
    components: {
        Social
    },
}
</script>

<style scoped lang="scss"></style>
