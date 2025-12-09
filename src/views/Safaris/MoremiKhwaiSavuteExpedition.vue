<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <SafariBanner title="Moremi Khwai Savute Expedition" />
        <SafariExpectations title="WHAT TO EXPECT" duration="7 DAYS - 6 NIGHTS" :items="[
            'Experience the unparalleled beauty of Moremi',
            'The vast expanse of the pristine wilderness',
            'Track the big five in Savute',
            'This is the home of the predators',
            'Camp within the game reserve'
        ]" />
        <SafariItinerary title="SAFARI DETAILS" :days="[
            {
                title: 'Day 1 – MAUN',
                description: 'You will be welcomed by one of our friendly staff on your arrival. Your first night in the African wilderness will be spent at Boro camp. The camp is about 20 km from Maun Airport. At camp, you will find awaiting an oasis of rest among the tall and unique riverine vegetation. Our camp is located on the banks of the Boro River with expansive views of the horizon with its breath-taking sunsets.'
            },
            {
                title: 'Day 2 – MOREMI GAME RESERVE',
                description: 'Your trip will start early morning heading directly to the Moremi game reserve. Start your game drive upon your arrival stopping at a suitable spot for a light lunch. Arrive at camp late afternoon for a siesta. Following a wholesome dinner enjoy the evening under clear African skies and the unique night sounds of the game reserve.'
            },
            {
                title: 'Day 3 – MOREMI GAME RESERVE',
                description: 'Spend the day exploring and tracking the animals. After lunch continue with the game drive before returning to camp in the late afternoon. Enjoy a wholesome dinner and folklore tales and stories of the day around the open fire.'
            },
            {
                title: 'Day 4 – EARLY MORNING DRIVE • PREDATOR SEARCH • SAVUTE MARCH',
                description: 'Following breakfast enjoy an early morning game drive while slowly heading to the Moremi North gate and Savute via Khwai. Arrive at camp by lunch. Enjoy a late afternoon game drive along the Khwai River and return to camp in time for a wholesome dinner. Nestle away in your comfortable bed as you drift off to sleep to the night sounds.'
            },
            {
                title: 'Day 5 – THE SAVUTE MARSH',
                description: 'Wake up early morning and embark on the drive. You are highly likely to spot predators here. Return to camp just in time for lunch. Relax in camp for a while before heading back for the afternoon game drive.'
            },
            {
                title: 'Day 6 – BORO CAMP',
                description: 'After an early breakfast embark on a game drive on your way to Boro Camp. You will stopover for lunch at an appropriate spot on the way. Arrive at Boro camp late afternoon and rest before a wholesome Boro camp dinner. Retire to bed and rest.'
            },
            {
                title: 'Day 6 - END ITINERARY',
                description: 'Enjoy breakfast before transfer to the airport via your pre-arranged transport.'
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
