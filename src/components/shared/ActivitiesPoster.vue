<template>
    <section class="w-full bg-amber-600/20 py-16 font-lusitana">
        <div class="container mx-auto px-4">

            <div class="flex flex-col md:flex-row items-center gap-8">

                <!-- PDF Thumbnail -->
                <div class="w-full md:w-1/2 flex justify-center">
                    <a :href="pdfUrl" target="_blank" rel="noopener">
                        <img :src="poster" alt="Download Rates PDF"
                            class="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition duration-300" />
                    </a>
                </div>

                <!-- Text + Button -->
                <div class="w-full md:w-1/2 text-center md:text-left">
                    <h2 class="text-3xl font-bold text-amber-800 mb-4">
                        Download Safari Rates
                    </h2>

                    <p class="text-gray-600 mb-6">
                        Access our full rate card and activity details in PDF format.
                    </p>

                    <a :href="pdfUrl" target="_blank" rel="noopener"
                        class="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-md shadow-md transition">
                        Download PDF
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
const poster = new URL('@/assets/activities_document.jpg', import.meta.url).href
const pdfUrl = "https://img1.wsimg.com/blobby/go/95215f36-0a5c-4daa-8ef2-19949b99c01c/Boro-Safari-Local-Rates-2020-1.pdf"
</script>