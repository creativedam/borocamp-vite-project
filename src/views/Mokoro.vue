<template>
    <div class="about w-full">
        <Top />
        <Nav />

        <ContentSection2 image="@/assets/activities_image_mokoro_1.jpg" title="Mokoro Excursions" :content="[
            'Explore the tranquil waterways of the Okavango Delta in a traditional canoe known as a mokoro.',
            'Glide silently through crystal-clear channels as you encounter aquatic wildlife, birds, and stunning lotus flowers.',
            'Enjoy a peaceful and immersive experience guided by expert polers who share traditional knowledge and bush lore of the Delta.'
        ]" />

        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/Nav/Nav.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import ContentSection2 from '../components/shared/ContentSection2.vue';

export default {
    name: 'MokoroExcursions',
    components: {
        Top,
        Nav,
        ContentSection2,
        Partners,
        FooterSubPage
    }
}
</script>
