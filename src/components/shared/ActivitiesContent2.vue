<template>
    <section class="py-16  font-lusitana">
        <div class="container mx-auto px-4">
            <div class="grid gap-8 md:grid-cols-3">
                <div v-for="(item, index) in activities" :key="index"
                    class="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between">
                    <div>
                        <h3 class="text-xl text-gray-900 mb-2">{{ item.title }}</h3>
                        <p class="text-gray-600">{{ item.description }}</p>
                    </div>

                    <a :href="item.link"
                        class="mt-6 inline-block text-center border border-amber-700 text-amber-700 py-2 px-4 rounded-lg font-medium hover:bg-amber-700 hover:text-white transition">
                        BOOK ACTIVITY NOW
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ActivitiesSection",
    data() {
        return {
            activities: [
                {
                    title: "BOAT CRUISE",
                    description: "Exciting motorboat cruises offered as day trips or part of a mobile safari. Explore Thamalakane River, Boro Channel, Xakanaxa, and Chobe River for scenic water adventures.",
                    link: "https://borocamp.com/contact-1",
                },
                {
                    title: "CULTURAL TOURS",
                    description: "Engage with local communities through song, dance, arts, and crafts. Day trips to the Okavango Delta or Tsodilo Hills to experience the culture of the San, Bayei, and Hambukushu.",
                    link: "https://borocamp.com/contact-1",
                },
                {
                    title: "MOKORO EXCURSIONS",
                    description: "Experience mokoro rides combined with walking safaris near camp. Great for spotting birds and wildlife. Offered as a day trip or part of mobile safari activities.",
                    link: "https://borocamp.com/contact-1",
                }
            ]
        };
    },
};
</script>
