import Vue from 'vue';
import Vuex from 'vuex';
import API from './api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    error: null,
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    getPosts: store => {
      API.getPosts()
        .then(response => {
          store.commit('setPosts', response.data.splice(0, 5));
        })
        .catch(error => {
          store.commit('error', error);
        });
    },
  },
  getters: {
    posts: state => state.posts,
  },
});
