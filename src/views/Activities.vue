<template>
    <div class="about w-full">
        <Top />
        <Nav />
        <ActivitiesContent />
        <ActivitiesPoster />
        <ActivitiesContent2 />
        <Partners />
        <FooterSubPage />
    </div>
</template>

<script>

import Top from '@/components/Top.vue';
import Nav from '../components/Nav/Nav.vue';
import ActivitiesContent from '../components/shared/ActivitiesContent.vue';
import ActivitiesPoster from '../components/shared/ActivitiesPoster.vue';
import ActivitiesContent2 from '../components/shared/ActivitiesContent2.vue';
import Partners from '../components/Shared/Partners.vue';
import FooterSubPage from '../components/Shared/FooterSubPage.vue';

export default {
    components: {
        Top,
        Nav,
        ActivitiesContent,
        ActivitiesPoster,
        ActivitiesContent2,
        Partners,
        FooterSubPage
    }
}

</script>