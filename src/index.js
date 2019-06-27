import Vue from 'vue';
import App from './App.vue';

import './plugins/vuetify';
import { router } from './plugins/router';

Vue.component(App.name, App);

new Vue({
    router,
    el: '#app',
    template: '<App></App>'
})