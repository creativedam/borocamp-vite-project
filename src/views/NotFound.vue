<template>
    <div class="min-h-screen flex flex-col items-center justify-center text-gray-700">

        <Logo />
        <h1 class="text-6xl font-bold font-lusitana">404</h1>
        <p class="text-xl mb-12 font-lusitana">Page Not Found</p>
        <Strip />
        <router-link to="/" class="px-6 text-2xl my-10 py-4
         block border border-amber-900 rounded hover:bg-gray-100">
            Go Home
        </router-link>
        <Partners />
        <FooterSubPage />

    </div>
</template>

<script>
import Logo from '../components/Logo.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';
import Strip from '../components/shared/Strip.vue';

export default {
    name: 'NotFound',
    components: {
        Logo,
        Strip,
        FooterSubPage
    }
}
</script>
