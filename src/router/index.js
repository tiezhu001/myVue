import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router);


export const constantRouter = [{
        path: '/',
        redirect: 'login',
        hidden: true
    },
    {
        path: '/login',
        component: () => import('@/views/login'),
        hidden: true
    }
]


export default new Router({
    mode: 'history',
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouter
})