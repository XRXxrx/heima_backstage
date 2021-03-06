import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
        name: 'login',
        path: '/login',
        component: () =>
            import ('@/view/login.vue')
    }]
})

export default router