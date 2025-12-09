<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <SafariBanner title="Tsodilo Hills Okavango Panhandle Discovery Trail" />
        <SafariExpectations title="WHAT TO EXPECT" duration="7 DAYS - 6 NIGHTS" :items="[
            ' Visit Tsodilo Hills – the “mountains of the gods”',
            'Okavango Riverboat cruise – panhandle',
            'Local Handicrafts/souvenir market',
            'Cultural dance around the fire – can be arranged at an extra cost',
        ]" />
        <SafariItinerary title="SAFARI DETAILS" :days="[
            {
                title: 'Day 1 - MAUN',
                description: 'You will be welcomed by one of our staff members on your arrival then you will be transferred to our camp in Boro. The camp is about 20 km from Maun Airport. At camp, you will find awaiting an oasis of rest among the tall and unique riverine trees. Our camp is located on the banks of the Boro River with expansive views of the horizon and its breath-taking sunsets.'
            },
            {
                title: 'Day 2 - BORO CAMP → TSODILO HILLS',
                description: 'After an early breakfast, you will head north-westerly to Tsodilo hills... Journey takes about four hours with a lunch stopover before arriving for supper under the open sky.'
            },
            {
                title: 'Day 3 - TSODILO HILLS',
                description: 'Spend the day hiking the different trails. Return to camp for a light lunch then a siesta. Evening storytelling around the open fire.'
            },
            {
                title: 'Day 4 - TSODILO HILLS',
                description: 'Explore the hills in the morning before returning to camp for a light lunch. Enjoy a relaxing afternoon or visit the local craft market. Dinner served at camp.'
            },
            {
                title: 'Day 5 - OKAVANGO BOAT CRUISE',
                description: 'Early morning transfer to a riverside camp. Spend the afternoon cruising the pristine Okavango panhandle waterways. Excellent birding opportunities.'
            },
            {
                title: 'Day 6 - BORO CAMP',
                description: 'Return back to Boro Camp.'
            },
            {
                title: 'Day 6: TRANSFER TO AIRPORT AFTER BREAKFAST',
                description: 'Transfer to Airport after breakfast.'
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
