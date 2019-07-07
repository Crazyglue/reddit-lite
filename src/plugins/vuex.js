import Vue from 'vue';
import Vuex from 'vuex';
import get from 'lodash/get';

Vue.use(Vuex);

// TODO: Turn this into an env var
const REDDIT_BASE_URL = 'https://www.reddit.com/r/';

export const store = new Vuex.Store({
    state: {
        subreddit: {},
        name: '',
        error: null
    },
    mutations: {
        SET_SUBREDDIT: (state, payload) => state.subreddit = payload,
        SET_SUBREDDIT_NAME: (state, payload) => state.name = payload,
        SET_ERROR: (state, payload) => state.error = payload
    },
    actions: {
        async fetchSubreddit({ commit, state }) {
            const { subreddit = 'dankmemes' } = state.route.params;

            const subredditUrl = `${REDDIT_BASE_URL}${subreddit}.json`

            commit('SET_SUBREDDIT_NAME', subreddit)

            return fetch(subredditUrl)
                .then(res => res.json())
                .then(data => commit('SET_SUBREDDIT', data))
                .catch(err => commit('SET_ERROR', err));
        }
    },
    getters: {
        posts: (state) => get(state.subreddit, 'data.children', []).slice(0, 25),
        name: (state) => `r/${state.name}`
    }
})

export default store;