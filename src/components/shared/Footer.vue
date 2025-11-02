<template>
    <div class="w-full">

        <!-- SOCIAL ICONS SECTION -->
        <section class="w-full bg-white text-slate-800 py-8">
            <div class="container mx-auto px-5 flex justify-center sm:justify-start">
                <div class="w-12 h-12 mx-auto">
                    <social name="facebook" class="w-full h-full fill-amber-800 hover:fill-amber-500" />
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <footer class="w-full bg-amber-800 text-white py-4">
            <div class="container mx-auto px-5">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                    <!-- COPYRIGHT TEXT -->
                    <div class="text-center md:text-left text-sm">
                        <span class="font-sans font-normal block">
                            Copyright © 2023 Borocamp Okavango Safari | All rights reserved | Borocamp Okavango Safari
                        </span>
                    </div>

                    <!-- DESIGNER CREDIT -->
                    <div class="text-center md:text-right text-sm">
                        <a href="creativedam"
                            class="font-sans font-normal text-white hover:text-fuchsia-500 block md:inline">
                            Designed and Developed by <span>Creative Dam</span>
                        </a>
                    </div>

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
