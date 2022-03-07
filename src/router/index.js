import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/customers',
        name: 'Customers',
        component: () =>
            import ( /* webpackChunkName: "customers" */ '../views/Customers.vue')
    },
    {
        path: '/customer/:id',
        name: 'Customer',
        component: () =>
            import ( /* webpackChunkName: "customer" */ '../views/Customer.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router