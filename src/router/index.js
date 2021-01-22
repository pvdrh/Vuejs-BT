import Vue from 'vue'
import VueRouter from 'vue-router'
import Content2 from '../views/Content2.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/About.vue')
    // }
    {

        path: '/main',
        name: 'Main',
        component: Main
    },
    {

        path: '/content2',
        name: 'Content2',
        component: Content2
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router