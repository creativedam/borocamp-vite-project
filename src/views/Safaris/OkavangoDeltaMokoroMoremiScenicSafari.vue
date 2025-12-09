<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <SafariBanner title="Okavango Delta Mokoro Moremi Scenic Safari" />
        <SafariExpectations title="WHAT TO EXPECT" duration="5 DAYS - 5 NIGHTS" :items="[
            'Exhilarating canoe rides',
            'Spectacular views of the delta',
            'Close encounters with nature',
            'Walking safari',
            'Moremi day trip'
        ]" />
        <SafariItinerary title="SAFARI DETAILS" :days="[
            {
                title: 'Day 1',
                description: 'You will be welcomed by one of our staff on your arrival and then you will be transferred to our camp in Boro. The camp is about 20 km from Maun Airport. At camp, you will find awaiting an oasis of rest among the tall and unique riverine vegetation. Our camp is located on the banks of the Boro River with expansive views of the horizon and its breath-taking sunsets. You will be welcomed to camp by a traditional performance in dance and song before settling to dinner.'
            },
            {
                title: 'Day 2',
                description: 'Following an early breakfast at Boro camp, you will head to the Mokoro boat station. You will be transferred to the Mokoro (dugout canoe) and a Poler /professional guide will take over from the local guide. You will course through the intertwining streams and the riverine vegetation encountering a variety of birds and animals. Following a light lunch at your next camp, you will embark on a walking safari after an afternoon siesta. After a wholesome dinner enjoy stories and folklore tales around the crackling fire and the clear skies.'
            },
            {
                title: 'Day 3',
                description: 'Enjoy the magical early morning walking safari followed by lunch. Thereafter relax a little before returning to Boro Camp where a wholesome dinner will be served.'
            },
            {
                title: 'Day 4',
                description: ' An early start to Moremi game reserve via the Moremi south gate. Spend the day exploring and tracking the animals. After a light packed lunch at a suitable rest place continue with the game drive before returning to camp in the late afternoon. Enjoy a wholesome dinner and enjoy folklore tales and stories of the day around the Boma.'
            },
            {
                title: 'Day 5',
                description: 'Wake up to breakfast. Your transfer to the airport will be ready to take you at check out.'
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
