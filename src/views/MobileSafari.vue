<template>
    <div class="about w-full">
        <Top />
        <Nav />

        <ContentSection2 />
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
    name: 'Mobile',
    components: {
        Top,
        Nav,
        ContentSection2,
        Partners,
        FooterSubPage
    }
}


</script>
