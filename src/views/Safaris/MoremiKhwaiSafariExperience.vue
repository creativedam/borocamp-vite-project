<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <SafariBanner title="Moremi Khwai Safari Experience" />
        <SafariExpectations title="WHAT TO EXPECT" :items="[
            'Exhilarating canoe rides',
            'Spectacular views of the delta',
            'Close encounters with nature',
            'Walking safari',
            'Moremi day trip'
        ]" />
        <SafariItinerary title="SAFARI DETAILS" :days="[
            {
                title: 'Day 1',
                description: 'You will be welcomed by one of our staff...'
            },
            {
                title: 'Day 2',
                description: 'Following an early breakfast at Boro camp...'
            },
            {
                title: 'Day 3',
                description: 'Enjoy the magical early morning walking safari...'
            },
            {
                title: 'Day 4',
                description: 'An early start to Moremi Game Reserve...'
            },
            {
                title: 'Day 5',
                description: 'Wake up to breakfast. Transfer to the airport...'
            }
        ]" />

        <Contact />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Nav from '../../components/Nav/Nav.vue';
import Partners from '../../components/Shared/Partners.vue';
import FooterSubPage from '../../components/Shared/FooterSubPage.vue';
import SafariBanner from '../../components/shared/SafariBanner.vue';
import SafariExpectations from '../../components/shared/SafariExpectations.vue';
import SafariItinerary from '../../components/shared/SafariItinerary.vue';
import Contact from '../../components/shared/Contact.vue';
export default {
    name: 'OkavangoDeltaMokoroMoremiScenicSafari',
    components: {
        Top,
        Nav,
        SafariBanner,
        SafariExpectations,
        SafariItinerary,
        Contact,
        Partners,
        FooterSubPage
    }
}


</script>
