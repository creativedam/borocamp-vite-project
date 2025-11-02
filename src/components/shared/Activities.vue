<template>
    <section class="py-16 bg-white  font-lusitana">
        <div class="container xl:w-full 2xl:w-2/3   mx-auto px-10 sm:px-4 ">
            <h2 class="text-3xl text-center mb-10 a text-gray-800 tracking-wide">
                SAFARI ACTIVITIES
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(item, index) in items" :key="index" class=" overflow-hidden flex flex-col">
                    <img :src="item.image" :alt="item.label" class="w-full aspect-square object-cover " />
                    <div class="p-6 flex flex-col flex-1">
                        <h3 class="text-xl  mb-5 text-center">{{ item.label }}</h3>
                        <p class="text-gray-500  text-lg font-light  leading-relaxed flex-1 text-center">
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    {
        label: 'Mobile Safari'.toUpperCase(),
        image: new URL("@/assets/service_image_1.jpg", import.meta.url).href,
        description:
            'Ideal for a fun-filled and relaxed holiday. Non-participatory safaris focused on nature interaction, with our trained staff handling all your needs. Suitable for groups and families.'
    },
    {
        label: 'Camping'.toUpperCase(),
        image: new URL("@/assets/service_image_2.jpg", import.meta.url).href,
        description:
            'Spacious campsite with seven open grounds surrounded by lush woodlands. High flood season creates lagoons rich with resident bird species — a serene escape into nature.'
    },
    {
        label: 'Mokoro Rides'.toUpperCase(),
        image: new URL("@/assets/service_image_3.jpg", import.meta.url).href,
        description:
            'Experience mokoro rides combined with walking safaris near camp. Great for spotting birds and wildlife. Offered as a day trip or part of mobile safari activities.'
    },
    {
        label: 'Cultural Experience'.toUpperCase(),
        image: new URL("@/assets/service_image_4.jpg", import.meta.url).href,
        description:
            'Engage with local communities through song, dance, arts, and crafts. Day trips to the Okavango Delta or Tsodilo Hills to experience the culture of the San, Bayei, and Hambukushu.'
    },
    {
        label: 'Boat Cruise'.toUpperCase(),
        image: new URL("@/assets/service_image_5.jpg", import.meta.url).href,
        description:
            'Exciting motorboat cruises offered as day trips or part of a mobile safari. Explore Thamalakane River, Boro Channel, Xakanaxa, and Chobe River for scenic water adventures.'
    },
    {
        label: 'Scenic Flights'.toUpperCase(),
        image: new URL("@/assets/service_image_6.jpg", import.meta.url).href,
        description:
            'Get a breathtaking bird’s-eye view of the Okavango Delta from above. Scenic flights are available on request for an unforgettable aerial experience.'
    }
];
</script>

<style scoped></style>
