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
    up: (state, index) => {
      const postsCopy = [...state.posts];

      const temp = postsCopy[index - 1];
      postsCopy[index - 1] = postsCopy[index];
      postsCopy[index] = temp;
      state.posts = postsCopy;
    },
    down: (state, index) => {
      console.log(state, 'state down >>>');
      console.log(index, 'index down >>>');
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
    posts: state => {
      console.log(state.posts, 'getters posts >>>');
      return state.posts;
    },
  },
});
