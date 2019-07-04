<template>
    <v-toolbar app>
        <v-toolbar-title>{{ name }}</v-toolbar-title>
    </v-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'PageTitle',
    computed: {
        ...mapGetters(['name'])
    }
}
</script>

<style>

</style>
