import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/users',
        name: 'table.index',
        component: () => import('@/components/Table/Index')
    },
    {
        path: '/users/login',
        name: 'user.login',
        component: () => import('@/components/User/Login')
    },
    {
        path: '/users/registartion',
        name: 'user.registartion',
        component: () => import('@/components/User/Registartion')
    },
    {
        path: '/users/personal',
        name: 'user.personal',
        component: () => import('@/components/User/Personal')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
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
        if (to.name === 'user.login' || to.name === 'user.registartion') {
            return next()
        } else {
            name: 'user.login'
        }
    }

    if (to.name === 'user.login' || to.name === 'user.registartion' && token) {
        return next({
            name: 'user.personal'
        })
    }

    next()
})

export default router;