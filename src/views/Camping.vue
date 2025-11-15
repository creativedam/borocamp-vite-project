<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <CampingContentSection2 />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/nav/Nav.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import CampingContentSection2 from '../components/shared/CampingContentSection2.vue';
export default {
    name: 'Camping',
    components: {
        Top,
        Nav,
        CampingContentSection2,
        Partners,
        FooterSubPage
    }
}

const imageUrl = new URL('@/assets/activities_image_2.jpg', import.meta.url).href;

</script>
