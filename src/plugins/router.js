import Vue from 'vue';
import VueRouter from 'vue-router';

import Subreddit from '../views/Subreddit.vue';
import Post from '../views/Post.vue';
import PageTitle from '../views/PageTitle.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            components: {
                default: Subreddit,
                title: PageTitle
            },
            path: '/'
        },
        {
            components: {
                default: Subreddit,
                title: PageTitle
            },
            path: '/:subreddit'
        },
        {
            component: Post,
            path: '/:subreddit/:postid'
        }
    ]
})

export default router
