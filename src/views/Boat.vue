<template>
    <div class="about w-full">
        <Top />
        <Nav />

        <ContentSection2 image="@/assets/activities_image_boat_3.jpg" title="Boat Cruise" :content="[
            'Relax and enjoy breathtaking river views while cruising along pristine waterways.',
            'Spot hippos, elephants, crocodiles, and diverse birdlife up close from the comfort of your boat.',
            'Ideal for photography, sunset leisure trips, and peaceful wildlife observation.'
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
    name: 'BoatCruise',
    components: {
        Top,
        Nav,
        ContentSection2,
        Partners,
        FooterSubPage
    }
}
</script>
