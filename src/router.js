import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/p_home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/programme',
        name: 'Programme',
        component: () =>
            import('@/pages/p_programme.vue'),
    },
    {
        path: '/equipe',
        name: 'Equipe',
        component: () =>
            import('@/pages/p_equipe.vue'),    
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import('@/pages/p_contact.vue'),    
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    },
    {
        path: '/404',
        name: 'NotFound',
        component: () =>
            import('@/pages/p_notFound.vue')
    },
    ]
})

export default router