<template>
    <PostList />
</template>

<script>
import { mapActions } from 'vuex';
import PostList from '../components/PostList.vue';

export default {
    name: 'Subreddit',
    components: {
        PostList
    },
    async mounted() {
        this.fetchSubreddit()
    },
    methods: {
        ...mapActions(['fetchSubreddit'])
    }
}
</script>

<style>

</style>
