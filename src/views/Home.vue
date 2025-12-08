<template>
  <div class="home w-full">
    <Top />
    <Nav />
    <Slider />
    <Strip />


    <About />
    <Activities />
    <Contact />
    <Partners />

    <Footer />
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Shared/Footer.vue";
import Slider from "@/components/Shared/Slider.vue";
import Strip from "@/components/Shared/Strip.vue";
import About from "@/components/Shared/About.vue";
import Activities from "../components/shared/Activities.vue";
import Contact from "../components/shared/Contact.vue";
import Partners from "../components/shared/Partners.vue";

export default {
  name: "Home",
  components: {
    Top,
    Nav,
    Footer,
    Slider,
    Strip,
    About,
    Activities,
    Contact,
    Partners
  },
};
</script>
