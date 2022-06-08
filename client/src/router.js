import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/components/Route')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/Auth/Login')
    },
    {
        path: '/registration',
        name: 'registration',
        component: () => import('@/components/Auth/Registration')
    },
    {
        path: '/personal',
        name: 'personal',
        component: () => import('@/components/Home/Personal')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('@/components/Home/List')
    },
    {
        path: '/:catchAll(.*)',
        name: 'error',
        component: () => import('@/components/404')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('token')

    if (!token) {
        if (to.name === 'login' || to.name === 'registration') {
            return next()
        } else {
            name: 'login'
        }
    }

    if (to.name === 'login' || to.name === 'registration' && token) {
        return next({
            name: 'personal'
        })
    }

    next()
})

export default router;