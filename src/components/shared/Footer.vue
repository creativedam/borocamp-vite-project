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
            <div class=" container lg:w-full mx-auto px-5">
                <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                    <!-- COPYRIGHT TEXT -->
                    <div class="text-center md:text-left text-sm">
                        <span class="font-sans font-normal block">
                            All Rights Reserved. Borocamp Okavango Safari © 2023 | Disclaimer
                        </span>
                    </div>

                    <!-- DESIGNER CREDIT -->
                    <div class="text-center md:text-right text-sm">
                        <a href="https://creativedam.co.bw" target="_blank"
                            class="font-sans font-normal text-white hover:text-fuchsia-500 block md:inline">
                            Designer and Developer
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
