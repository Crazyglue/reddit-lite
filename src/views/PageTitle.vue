<template>
    <v-toolbar app>
        <v-toolbar-title>{{ name }}</v-toolbar-title>
        <v-flex md4>
            <v-form @submit="goToSubreddit">
                <v-text-field
                    v-model="subredditName"
                    label="Regular"
                ></v-text-field>
            </v-form>
        </v-flex>
    </v-toolbar>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import router from '../plugins/router';

export default {
    name: 'PageTitle',
    data() {
        return {
            subredditName: ''
        }
    },
    computed: {
        ...mapGetters(['name']),
        ...mapState(['subredditSearchResults'])
    },
    methods: {
        goToSubreddit() {
            console.log('pushing...', { path: `/${this.subredditName}` })
            router.push({ path: `/${this.subredditName}` });
        }
    }
}
</script>

<style>

</style>
