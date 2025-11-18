<template>
    <section class="w-full py-10 bg-gray-100">
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">

            <!-- INCLUDED -->
            <div class="bg-white shadow-md rounded-xl p-6">
                <h4 class="text-xl font-semibold mb-4 text-gray-800 font-lusitana">INCLUDED</h4>

                <ul class="space-y-2 text-gray-600 font-lusitana">
                    <li v-for="(item, index) in includedItems" :key="index">
                        • {{ item }}
                    </li>
                </ul>
            </div>

            <!-- EXCLUDED -->
            <div class="bg-white shadow-md rounded-xl p-6">
                <h4 class="text-xl font-semibold mb-4 text-gray-800 font-lusitana">EXCLUDED</h4>

                <ul class="space-y-2 text-gray-600 font-lusitana">
                    <li v-for="(item, index) in excludedItems" :key="index">
                        • {{ item }}
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script setup>
const includedItems = [
    "All accommodation",
    "Professional guide/driver",
    "Transport – open safari 4×4 vehicle",
    "Park fees",
    "All taxes / VAT",
    "All meals",
    "Drinking water",
    "Local soft drinks",
    "All activities while on the mobile safari"
];

const excludedItems = [
    "International flights (from/to your home)",
    "Travel insurance",
    "Medical insurance",
    "Transfer to and from the airport",
    "Accommodation before and at the end of the safari",
    "Items of personal use i.e. sunscreen, souvenirs"
];
</script>
