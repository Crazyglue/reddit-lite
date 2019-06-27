import Vue from 'vue';
import App from './App.vue';

import './plugins/vuetify';

Vue.component(App.name, App);

new Vue({
    el: '#app',
    template: '<App></App>'
})