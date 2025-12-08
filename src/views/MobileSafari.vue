<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <ContentSection1 />
        <ContentSection2 />
        <Strip title="TRAVEL SEASON" />
        <ContentSection3 />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/Nav/Nav.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import ContentSection1 from '../components/MobileSafari/ContentSection1.vue';
import ContentSection2 from '../components/MobileSafari/ContentSection2.vue';
import ContentSection3 from '../components/MobileSafari/ContentSection3.vue';
import Strip from '../components/shared/Strip.vue';
export default {
    name: 'Mobile',
    components: {
        Top,
        Nav,
        ContentSection1,
        ContentSection2,
        ContentSection3,
        Strip,
        Partners,
        FooterSubPage
    }
}

</script>
