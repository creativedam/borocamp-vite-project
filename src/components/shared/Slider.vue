<template>
  <div class="relative w-full h-180 overflow-hidden">
    <!-- Slides -->
    <div v-for="(slide, index) in slides" :key="index" class="absolute inset-0 transition-opacity duration-700"
      :class="currentSlide === index ? 'opacity-100' : 'opacity-0'">
      <!-- Background image -->
      <div class="w-full h-180 relative bg-center bg-cover" :style="{ backgroundImage: `url(${slide.image})` }">
        <!-- Overlay content -->
        <div
          class="bg-transparent h-full flex flex-col justify-center  mx-auto items-center px-20 animate__animated animate__fadeInDown">
          <h1 class="text-white text-4xl w-1/2 text-center mx-auto  font-medium font-lusitana mb-10"
            v-html="slide.title">
          </h1>
          <span class="text-white text-xl">{{ slide.subtitle }}</span>
          <!-- Button -->
          <div class="flex justify-center md:justify-end">
            <router-link to="/safaris"
              class="bg-white px-6 py-3 w-full md:w-auto text-center font-lusitana text-gray-800 shadow-sm  hover:bg-gray-100 transition">
              CHECK OUR TOURS
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: new URL("@/assets/image_1.jpg", import.meta.url).href, // replace with your image
          title: "WELCOME<br>TO<br>BORO OKAVANGO SAFARI",
          subtitle: "",
        },
        {
          image: new URL("@/assets/image_2.jpg", import.meta.url).href, // replace with your image
          title: "WELCOME<br>TO<br>BORO OKAVANGO SAFARI",
          subtitle: "",
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
