import { createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Shop from '../pages/Shop.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    }
]

const router = {
    history: createWebHistory(process.env.BASE_URL),
    routes
}

export default router