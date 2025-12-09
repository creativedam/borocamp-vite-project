<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <SafariBanner title="Okavango Moremi Khwai Savute Chobe Victoria Falls Grand Safari" />
        <SafariExpectations title="WHAT TO EXPECT" duration="11 DAYS - 10 NIGHTS" :items="[
            'Experience the unparalleled beauty of Moremi/Chobe National Park',
            'A vast expanse of the pristine wilderness',
            'Track the big five',
            'Boat cruise on the mighty Chobe River',
            'Victoria Falls day trip',
            'Cultural exchange',
            'Camp within the game reserve'
        ]" />
        <SafariItinerary title="SAFARI DETAILS" :days="[
            {
                day: 'Day 1: MAUN',
                content: `You will be welcomed by one of our friendly staff on your arrival then you will be transferred to our camp in Boro. The camp is about 20 km from Maun Airport. At camp you will find awaiting you an oasis of rest among the tall and unique riverine trees. The camp is located on the banks of the Boro River with expansive views of the horizon and its breath-taking sunsets. You will be welcomed to camp by a traditional performance in dance and song before settling to dinner.`
            },
            {
                day: 'Day 2: OKAVANGO DELTA',
                content: `Following an early breakfast at camp, you will head to the Mokoro boat station. You will be transferred to the Mokoro (dugout canoe) and a Poler/professional guide will take over from the local guide. You will course through the intertwining streams and the riverine vegetation encountering a variety of birds. Following a light lunch at the camp, you will continue with the walking safari. Head back to camp in time for dinner.`
            },
            {
                day: 'Day 3-4 : MOREMI',
                content: `Following breakfast enjoy an early morning game drive while slowly heading to Khwai via the Moremi north gate. Arrive at camp by lunch. Enjoy a late afternoon game drive along the Khwai River and return to camp in time for a wholesome dinner. Nestle away in your comfortable bed as you drift off to the night sounds. On day 6 wake up to an early morning game drive as you slowly make your way to Savute where you will spend the night.`
            },
            {
                day: 'Day 5-6 : MOREMI - KHWAI',
                content: `An early start to Moremi game reserve south gate. Spend the day exploring and tracking the animals. After a light packed lunch from a suitable rest place continue with the game drive before returning to camp in the late afternoon. Enjoy a wholesome dinner and enjoy folklore tales and stories of the day around the open fire. On day 4 continue with the game drives before settling for dinner and a good night’s rest at the camp.`
            },
            {
                day: 'Day 7 : SAVUTE',
                content: `Enjoy a day of tracking after the game in the pristine Savute marsh. This is home to the largest lion pride and other predators. An early morning drive or late afternoon drive almost certainly guarantees a sighting.`
            },
            {
                day: 'Day 8 : CHOBE NATIONAL PARK',
                content: `After an early breakfast enjoy a game drive through Chobe National Park while on your way to Kasane. Stopover at an appropriate spot for a light lunch before continuing to camp. On arrival at camp, relax a bit before heading for a boat cruise on the mighty Chobe River. Return for a hearty dinner before retiring to bed.`
            },
            {
                day: 'Day 9 : CHOBE NATIONAL PARK',
                content: `Spend the day on extended Chobe national park safari. Returning to camp only for lunch and a siesta before heading back to track the wild animals.`
            },
            {
                day: 'Day 10 : VICTORIA FALLS',
                content: `After breakfast, we embark on a day trip to Victoria Falls, Zimbabwe, the largest waterfalls in the world! Also known as “Mosi – oa – tunya” or the smoke that thunders”. The journey should take 1hr – 1.5 hours depending on how long it takes to go through passport control. Spend the day enjoying the walks along the falls and the rainforest with your guide. Return to camp in time for supper.`
            },
            {
                day: 'Day 11 : END OF ITINERARY',
                content: `After breakfast, your transport will be ready to take you to the airport for your flight.`
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
