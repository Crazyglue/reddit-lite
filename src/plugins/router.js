import Vue from 'vue';
import VueRouter from 'vue-router';

import Subreddit from '../views/Subreddit.vue';
import PageTitle from '../views/PageTitle.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            components: {
                default: Subreddit,
                title: PageTitle
            },
            path: '/',
            name: 'home'
        },
        {
            components: {
                default: Subreddit,
                title: PageTitle
            },
            path: '/:subreddit',
            name: 'subreddit'
        }
    ]
})

export default router
