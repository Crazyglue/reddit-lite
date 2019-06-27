import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            component: Home,
            path: '/'
        }
    ]
})

export default router
