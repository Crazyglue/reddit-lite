<template>
    <PostList />
</template>

<script>
import { mapActions } from 'vuex';
import PostList from '../components/PostList.vue';

const POST_REFRESH_INTERVAL = 60 * 1000; // 60 seconds

export default {
    name: 'Subreddit',
    components: {
        PostList
    },
    data() {
        return {
            postTimer: null
        }
    },
    async mounted() {
        this.resetFetchSubreddit()
    },
    methods: {
        ...mapActions(['fetchSubreddit']),
        resetFetchSubreddit() {
            // Resets the interval
            if (this.postTimer) {
                clearInterval(this.postTimer);
            }
            this.fetchSubreddit()
            this.postTimer = setInterval(this.fetchSubreddit, POST_REFRESH_INTERVAL);
        }
    },
    watch: {
        '$route': 'resetFetchSubreddit'
    },
}
</script>

<style>

</style>
