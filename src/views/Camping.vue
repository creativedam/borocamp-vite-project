<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <ContentSection2 title="Luxury Mobile Safari" :content="[
            'Experience the untouched wilderness with comfort and style.',
            'Luxury tents with en-suite bush bathrooms, dining under the stars, and personalized service.',
            'Perfect for couples, exclusive groups, and private curated adventures.'
        ]" />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/nav/Nav.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import ContentSection2 from '../components/shared/ContentSection2.vue';
export default {
    name: 'Camping',
    components: {
        Top,
        Nav,
        ContentSection2,
        Partners,
        FooterSubPage
    }
}

const imageUrl = new URL('@/assets/activities_image_2.jpg', import.meta.url).href;

</script>
