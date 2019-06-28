import Vue from 'vue';
import VueRouter from 'vue-router';

import Subreddit from '../views/Subreddit.vue';
import Post from '../views/Post.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            component: Subreddit,
            path: '/'
        },
        {
            component: Subreddit,
            path: '/:subreddit'
        },
        {
            component: Post,
            path: '/:subreddit/:postid'
        }
    ]
})

export default router
