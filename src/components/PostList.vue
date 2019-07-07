<template>
    <div>
        <PostListItem
            v-for="post in subredditPosts"
            :key="post.title"
            v-bind="post"
            />
    </div>
</template>

<script>
import get from 'lodash/get';
import { mapGetters } from 'vuex';
import PostListItem from './PostListItem.vue';

export default {
    name: 'PostList',
    components: {
        PostListItem
    },
    computed: {
        ...mapGetters([ 'posts' ]),
        subredditPosts() {
            return this.posts.map(({ data: { author, created, title, selftext, thumbnail, thumbnail_height, preview, permalink } }) => {
                const sourceUrl = get(preview, 'images.0.source.url', thumbnail)
                return {
                    author,
                    created,
                    title,
                    body: selftext,
                    thumbnail: sourceUrl,
                    thumbnail_height,
                    permalink
                }
            })
        }
    }
}
</script>

<style>

</style>
