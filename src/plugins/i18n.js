import Vue from 'vue';
import VueI18n from 'vue-i18n';

import messages from '../data/i18n_messages.json';

Vue.use(VueI18n)

// Create VueI18n instance with options
export const i18n = new VueI18n({
    locale: window.navigator.language,
    messages,
})

export default i18n
  