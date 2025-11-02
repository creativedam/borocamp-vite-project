<template>
    <div class="w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 font-lusitana mb-12">

            <!-- Left Content -->
            <div class="w-full bg-white text-slate-800 py-12 flex items-center">
                <div class="w-full max-w-xl mx-auto px-6 md:px-10">

                    <!-- Heading -->
                    <div class="text-left mb-8">
                        <h2 class="text-3xl  text-amber-600">CONTACT ME</h2>
                        <div class="w-24 h-0.5 bg-amber-600 mt-2"></div>
                    </div>

                    <!-- Intro -->
                    <div class="text-left mx-auto mb-10">
                        <h4 class="text-xl md:text-2xl mb-4">Start up a Conversation</h4>
                        <p class="text-slate-600 leading-relaxed">
                            I love to hear from fellow travelers! Have a question <br />about some of my recent trips?
                            Want to share travel<br /> tips or ask something? Drop me a line!
                        </p>
                    </div>

                    <!-- Business Info -->
                    <div class="text-left">
                        <h4 class="text-xl md:text-2xl ">Boro Okavango River Safari</h4>
                        <p class="text-slate-500">Boro Okavango River Safari, Maun, Botswana</p>
                    </div>
                    <div class="text-left">
                        <h4 class="text-xl text-whitewd md:text-2xl ">Boro Okavango River Safari</h4>
                        \
                    </div>

                </div>
            </div>


            <!-- Left Content -->
            <div class="w-full bg-white text-slate-800 py-12 flex items-center">
                <div class="w-full max-w-xl mx-auto px-6 md:px-10">


                    <!-- Section Title -->
                    <div class="text-left mb-8">
                        <h2 class="text-3xl  text-white">CONTACT ME</h2>
                        <div class="w-24 h-0.5 bg-ehite mt-2"></div>
                    </div>

                    <!-- Office Info -->
                    <div class="mb-10">
                        <h4 class="text-xl md:text-2xl mb-4">Our Office</h4>
                        <p class="mt-2 leading-relaxed text-slate-500">
                            Plot 24365 Sedie Ward, Maun, Botswana<br>
                            Mobile: +267 73 807 099 | 72 610 304<br>
                            Email:
                            <a href="mailto:res@borocamp.com"
                                class="font-semibold text-amber-700 underline hover:text-amber-600">
                                res@borocamp.com
                            </a>
                        </p>
                    </div>

                    <!-- Camp Info -->
                    <div>
                        <h4 class="text-lg font-bold">BORO CAMP GROUNDS</h4>
                        <p class="mt-2 leading-relaxed text-slate-500">
                            <strong>Boro Camp with GPS coordinates:</strong><br>
                            S 19° 51′ 04.48″ E 23° 26′ 00.55″<br>
                            Elevation 941 m along Boro main channel.
                        </p>
                    </div>

                </div>
            </div>

        </div>

        <div class="w-full h-96 py-16 block tex-center relative">
            <!-- Map -->
            <div :style="{ backgroundImage: `url(${map})` }"
                class="h-72 sm:h-100 w-full  bg-center bg-contain bg-yellow-900/10 bg-no-repeat">
            </div>
        </div>

    </div>


</template>

<script setup>
const map = new URL('@/assets/map.png', import.meta.url).href
</script>
