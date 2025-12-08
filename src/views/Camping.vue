<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <CampingContentSection1 />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/Nav/Nav.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import CampingContentSection1 from '../components/Camping/ContentSection1.vue';
export default {
    name: 'Camping',
    components: {
        Top,
        Nav,
        CampingContentSection1,
        Partners,
        FooterSubPage
    }
}

const imageUrl = new URL('@/assets/activities_image_2.jpg', import.meta.url).href;
</script>
