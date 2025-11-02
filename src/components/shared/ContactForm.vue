<template>
    <section class="w-full bg-white py-16 font-lusitana">
        <div class="container mx-auto px-4">

            <!-- Heading -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-amber-700">
                    CONTACT US FOR A BOOKING
                </h2>
                <div class="w-20 h-1 bg-amber-700 mx-auto mt-2"></div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <!-- Contact Info -->
                <div class="space-y-8">
                    <div>
                        <h3 class="text-xl font-semibold text-amber-700">Feel Free</h3>
                    </div>

                    <div>
                        <h4 class="text-lg font-bold">OUR OFFICE</h4>
                        <p class="text-slate-700 mt-1 leading-relaxed">
                            Plot 24365 Sedie Ward, Maun, Botswana<br>
                            Mobile: +267 73 807 099 | 72 610 304<br>
                            Email:
                            <a href="mailto:res@borocamp.com" class="font-semibold text-amber-700 underline">
                                res@borocamp.com
                            </a>
                        </p>
                    </div>

                    <div>
                        <h4 class="text-lg font-bold">BORO CAMP GROUNDS</h4>
                        <p class="text-slate-700 mt-1 leading-relaxed">
                            <strong>Boro Camp with GPS coordinates:</strong><br>
                            S 19° 51′ 04.48″ E 23° 26′ 00.55″<br>
                            Elevation 941 m along Boro main channel.
                        </p>
                    </div>

                </div>

                <!-- Contact Form -->
                <div class="bg-white rounded-lg shadow-lg p-8">
                    <h3 class="text-xl font-bold text-amber-700 mb-6">REACH US TODAY</h3>

                    <form @submit.prevent="submitForm" class="space-y-4">

                        <div>
                            <label class="block font-semibold mb-1">Name</label>
                            <input v-model="form.name" type="text"
                                class="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600 focus:outline-none">
                        </div>

                        <div>
                            <label class="block font-semibold mb-1">Phone</label>
                            <input v-model="form.phone" type="text"
                                class="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600 focus:outline-none">
                        </div>

                        <div>
                            <label class="block font-semibold mb-1">Email *</label>
                            <input v-model="form.email" type="email"
                                class="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600 focus:outline-none"
                                required>
                        </div>

                        <div>
                            <label class="block font-semibold mb-1">Message</label>
                            <textarea v-model="form.message" rows="5"
                                class="w-full border rounded-md p-3 focus:ring-2 focus:ring-amber-600 focus:outline-none"></textarea>
                        </div>

                        <button type="submit"
                            class="w-full bg-amber-700 text-white py-3 rounded-md font-semibold hover:bg-amber-800 transition">
                            Send
                        </button>

                        <p class="text-xs text-slate-500 mt-2">
                            This form is protected by Google reCAPTCHA.
                        </p>

                    </form>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from "vue"

const form = reactive({
    name: "",
    phone: "",
    email: "",
    message: ""
})

const submitForm = () => {
    console.log("Form submitted:", form)
    alert("Thank you! We will contact you soon.")
}
</script>
