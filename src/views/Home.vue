    <template>
        <div class="home w-full">
            <Top />
            <Nav />
            <SlideShow/>
                 <div class="logo my-5 relative h-10 w-40
            center mx-auto
             block"></div>
            <h1 class=" text-amber-800 text-4xl py-5 text-center font-bold">Our website is under maintanace </h1>
            <h2 class="w-full text-center p-4 text-black text-bold text-2xl">For Booking and Information</h2>
            <p class="w-full text-center p-4 text-amber-950">
                Reach us on +26773 807 099
            </p>
       
            <p class="w-full text-center p-4 text-amber-950">
                Welcome to Borocamp Okavango Safari
            </p>
            <Footer />
        </div>
    </template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/nav/Nav.vue';
import Footer from '../components/Shared/Footer.vue';
import SlideShow from '../components/Shared/SlideShow.vue';

export default {
    name: 'Home',
    components: {
        Top,
        Nav,
        Footer,
        SlideShow
    }
}


</script>