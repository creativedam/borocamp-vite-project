<template>
    <div class="about w-full">
        <Top />
        <Nav />

        <ContactContent />
        <Map />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../components/Nav/Nav.vue';
import Map from '../components/Shared/Map.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import ContactContent from '../components/shared/ContactContent.vue';

export default {
    name: 'Home',
    components: {
        Top,
        Nav,
        Map,
        ContactContent,
        FooterSubPage
    }
}


</script>
