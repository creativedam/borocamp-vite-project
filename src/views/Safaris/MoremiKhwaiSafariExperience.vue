<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <SafariBanner title="Moremi Khwai Safari Experience" />
        <SafariExpectations title="WHAT TO EXPECT" duration="6 DAYS - 5 NIGHTS" :items="[
            'Experience the unparalleled beauty of Moremi',
            'The vast expanse of the pristine wilderness',
            'Track the big five',
            'Camp within the game reserve'
        ]" />
        <SafariItinerary title="SAFARI DETAILS" :days="[
            {
                title: 'Day 1',
                description: 'Upon arrival at Maun Airport clients will be welcomed by our friendly staff and transported to BORS campsite where they will spend the night. The camp is about 20 km from Maun Airport. At camp you will find awaiting an oasis of rest among the tall and unique riverine vegetation. Our camp is located on the banks of the Boro River with expansive views of the horizon and its breath-taking sunsets.'
            },
            {
                title: 'Day 2',
                description: ' After an early breakfast, you will start your trip to Moremi game reserve arriving in camp late afternoon. Following a late afternoon game drive, you return to camp for a rest and dinner then enjoy the evening under clear African skies and the night sounds'
            },
            {
                title: 'Day 3',
                description: 'Spend the day exploring and tracking the animals. After lunch continue with the game drive before returning to camp in the late afternoon. Enjoy a wholesome dinner and folklore tales and stories of the day around the open fire.'
            },
            {
                title: 'Day 4',
                description: 'Following breakfast enjoy an early morning game drive while slowly heading to the Moremi Northgate and Khwai. Arrive at camp by lunch. Enjoy a late afternoon game drive along the Khwai River and return to camp in time for a wholesome dinner. Nestle away in your comfortable bed as you drift off to the night sounds.'
            },
            {
                title: 'Day 5',
                description: 'Continue with the early morning drive through Khwai on your way out. Enjoy a packed lunch at a suitable spot. Arrive at Boro camp late afternoon. Look out for the spectacular sunset at Boro camp. Relax a little before the dinner and stories around the open fire and the starry skies.'
            },
            {
                title: 'Day 6',
                description: 'Wake up to breakfast. Your transfer to the airport will be ready to take you at check out.'
            },
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
