<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <SafariBanner title="Okavango Moremi Makgadikgadi Safari Adventure" />
        <SafariExpectations title="WHAT TO EXPECT" duration="9 DAYS - 8 NIGHTS" :items="[
            'Canoe ride',
            'Spectacular views of the delta',
            'Makgadikgadi Pans',
            'Nxai Pan',
            'Baines Baobab',
            'Kubu Island',
            'Big Five in Moremi game reserve'
        ]" />
        <SafariItinerary title="SAFARI DETAILS" :days="[
            {
                title: 'Day 1',
                description: 'You will be welcomed by one of our guides on your arrival then you will be transferred to our camp in Boro. The camp is about 20 km from Maun Airport. At camp, you will find awaiting an oasis of rest among the tall and unique riverine trees. Our camp is located on the banks of the Boro River with expansive views of the horizon and its breath-taking sunsets. You will be welcomed to camp by a traditional performance in dance and song before settling to dinner.'
            },
            {
                title: 'Day 2',
                description: 'Following an early breakfast at camp, you will head to the Mokoro boat station. You will be transferred to the Mokoro (dugout canoe) and a Poler/professional guide will take over from the local guide. You will course through the intertwining streams and the riverine vegetation encountering a variety of birds and animals. Following a light lunch at the camp, you will embark on a walking safari after an afternoon siesta. After a wholesome supper enjoy stories and folklore tales around the crackling fire and the clear skies.'
            },
            {
                title: 'Day 3',
                description: 'Enjoy the magical early morning walking safari followed by lunch. Thereafter relax a little before returning to Boro Camp where a wholesome dinner will be served.'
            },
            {
                title: 'Day 4',
                description: 'An early start to Moremi game reserve south gate, the journey is about 2.5 hours. Spend the day exploring and tracking the animals. After a light packed lunch from a suitable rest place continue with the game drive before returning to camp in the late afternoon. Enjoy a wholesome dinner and enjoy folklore tales and stories of the day around the open fire.'
            },
            {
                title: 'Day 5 - 6',
                description: 'From Moremi game reserve continue to Makgadikgadi and Nxai pain. Spend the day enjoying the spectacular landscapes, in the rainy season, this is a birding paradise. You will spend 2 nights in Nxai Pan national park. Enjoy the unparalleled beauty of watching the animal activity at the water holes. On day 6 you will head to Baines’ baobabs where you will enjoy a scrumptious lunch under the open skies.'
            }
            ,
            {
                title: 'Day 7 - 8',
                description: 'After early morning breakfast, you will head to Lekhubu (Kubu) island in Makgadikgadi National Park, an area of untainted and natural beauty. Lekhubu island is considered a national monument and is sacred to the indigenous people. On day 8 enjoy a game drive with plenty of opportunities to photograph zebra and birds of prey.'
            },
            {
                title: 'Day 9',

                description: 'Back to Maun Airport, end of tour'
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
