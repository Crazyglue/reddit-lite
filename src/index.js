import Vue from 'vue';
import { sync } from 'vuex-router-sync'

import App from './App.vue';

import './plugins/vuetify';
import { router } from './plugins/router';
import { store } from './plugins/vuex';

Vue.component(App.name, App);

sync(store, router);

new Vue({
    router,
    store,
    el: '#app',
    template: '<App></App>'
})