<template>
    <div class="about w-full">
        <Top />
        <Nav />

        <Destinations />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/nav/Nav.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import Destinations from '../components/shared/Destinations.vue';
export default {
    name: 'Home',
    components: {
        Top,
        Nav,
        Destinations,
        Partners,
        FooterSubPage
    }
}


</script>
