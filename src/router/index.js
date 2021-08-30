import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Shop from '@/views/Shop'
import Lol from '@/views/Lol'

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/LOL',
        component: Lol
    }
]

const router = new Router({ 
    routes,
    mode: 'history'
})

export default router