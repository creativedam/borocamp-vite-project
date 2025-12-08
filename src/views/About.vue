<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <h1 class=" text-amber-800 text-4xl py-5 text-center font-bold">About</h1>
        <h2 class="w-full text-center p-4 text-red-500">Our website is under maintanace </h2>
        <p class="w-full text-center p-4 text-black">
            We are Borocamp Okavango Safari, your destination for tours, activities and more
        </p>
        <p class="w-full text-center p-4 text-amber-950">
            Reach us on +26773 807 099
        </p>
        <Footer />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/Nav/Nav.vue';
import Footer from '../components/Shared/Footer.vue';

export default {
    name: 'Home',
    components: {
        Top,
        Nav,
        Footer
    }
}


</script>