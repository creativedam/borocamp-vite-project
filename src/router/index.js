import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contacts from '@/views/Contacts.vue'


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        { path : '/', name : 'Home', component: Home},
      { path : '/about', name : 'About', component: About},
      { path : '/contacts', name : 'Contact', component: Contacts}
    ]
})

export default router
