<template>
  <div class="relative w-full h-120 overflow-hidden">
    <!-- Slides -->
    <div v-for="(slide, index) in slides" :key="index" class="absolute inset-0 transition-opacity duration-700"
      :class="currentSlide === index ? 'opacity-100' : 'opacity-0'">
      <!-- Background image -->
      <div class="w-full h-120 relative bg-center bg-cover" :style="{ backgroundImage: `url(${slide.image})` }">
        <!-- Overlay content -->
        <div
          class="bg-transparent  w-full h-full flex flex-col justify-center items-center px-20 animate__animated animate__fadeInDown">
          <h1 class="text-white text-5xl font-medium mb-2 font-lusitana">
            {{ slide.title }}
          </h1>
          <p class="text-white text-xl">{{ slide.subtitle }}</p>
        </div>
      </div>
    </div>

    <!-- Prev Button -->
    <!-- <button
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 px-4 py-2"
    >
      ‹
    </button> -->

    <!-- Next Button -->
    <!-- <button
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-80 px-4 py-2"
    >
      ›
    </button> -->
  </div>
</template>

<script>
import image1 from "@/assets/image_1.jpg";
import image2 from "@/assets/image_2.jpg";
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: new URL("@/assets/image_1.jpg", import.meta.url).href, // replace with your image
          title: "WELCOME  TO  BORO OKAVANGO SAFARI",
          subtitle: "Boro Okavango Safari",
        },
        {
          image: new URL("@/assets/image_2.jpg", import.meta.url).href, // replace with your image
          title: "WELCOME  TO  BORO OKAVANGO SAFARI",
          subtitle: "Boro Okavango Safari",
        },
      ],
    };
  },
  mounted() {
    this.startAutoSlide();
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    startAutoSlide() {
      setInterval(() => {
        this.nextSlide();
      }, 4000); // 4 seconds
    },
  },
};
</script>
