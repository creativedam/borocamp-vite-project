<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <Safaris />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/nav/Nav.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import Safaris from '../components/shared/Safaris.vue';
export default {
    name: 'Safari',
    components: {
        Top,
        Nav,
        Safaris,
        Partners,
        FooterSubPage
    }
}


</script>
