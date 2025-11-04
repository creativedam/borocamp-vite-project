<template>
    <div class="about w-full">
        <Top />
        <Nav />

        <ContentSection2 image="@/assets/activities_image_culture_3.jpg" title="Cultural Tours" :content="[
            'Immerse yourself in authentic cultural experiences with local communities and tribes.',
            'Learn traditional practices, storytelling, music, dance, and daily ways of life passed down through generations.',
            'Engage with village hosts, visit community projects, and enjoy warm hospitality and local cuisine.'
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
    name: 'CulturalExperienceSafari',
    components: {
        Top,
        Nav,
        ContentSection2,
        Partners,
        FooterSubPage
    }
}
</script>
