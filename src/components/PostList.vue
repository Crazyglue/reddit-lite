<template>
    <v-container
        fluid
        grid-list-lg
    >
        <PostListItem
            v-for="post in subredditPosts"
            :key="post.title"
            v-bind="post"
            />
    </v-container>
</template>

<script>
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
            return this.posts.map(({ data: { title, selftext, thumbnail, thumbnail_height } }) => {
                return {
                    title,
                    body: selftext,
                    thumbnail,
                    thumbnail_height
                    // thumbnail: smallResolution.url
                }
            })
        }
    }
}
</script>

<style>

</style>
