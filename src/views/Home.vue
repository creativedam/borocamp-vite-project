    <template>
        <div class="home w-full">
            <Top />
            <Nav />
            <h1 class=" text-blue-500 text-center">Home</h1>
            <h2 class="w-full text-center p-4 text-black text-bold text-2xl">Our website is under maintanace </h2>
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

export default {
    name: 'Home',
    components: {
        Top,
        Nav,
        Footer
    }
}


</script>