import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'
import Shop from '@/views/Shop/Shop'
import Login from '@/views/Account/Login'
import SignUp from '@/views/Account/SignUp'
import Lol from '@/views/Lol'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: SignUp
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