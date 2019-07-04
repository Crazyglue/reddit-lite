<template>
    <v-app>
        <router-view name="title"></router-view>
        <v-content>
            <v-container fluid>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>

</style>
