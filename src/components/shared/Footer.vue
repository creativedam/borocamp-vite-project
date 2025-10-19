<template>
    <div>
        <sub class="w-full bg-white text-slate-800 py-8">
            <div class="container mx-auto px-5">
                <div class="sm:w-1/4 md:1/5 lg:w-full py-5 block">
                        <social name="facebook" class="w-12 h-12 mx-auto  fill-amber-800 my-auto hover:fill-amber-500" />
                </div>
            </div>
        </sub>
        <footer class="w-full bg-amber-800 text-white py-4">
            <div class="container mx-auto px-5">
                <div class="grid grid-cols-7 gap-1 place-content-center place-items-center ">
                    <div class="place-self-start text-sm sm:text-center col-span-5"> 
                        <span class="font-sans font-normal sm:text-center">Copyright © 2023 Borocamp Okavango Safari | All rights reserved
                            | Borocamp Okavango Safari</span></div>
                    <div class="place-self-end sm:justify-center col-span-2"><a
                            class="font-sans font-normal text-sm text-white hover:text-fuchsia-500 xs:text-center"
                            href="creativedam">Designed and Developed by <span>Creative Dam</span></a></div>
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

<style lang="scss" scoped></style>