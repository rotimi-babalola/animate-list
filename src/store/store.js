import Vue from 'vue';
import Vuex from 'vuex';
import API from './api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    history: [],
    error: null,
  },
  mutations: {
    setPosts: (state, posts) => {
      state.posts = posts;
    },
    up: (state, { index, postId }) => {
      const postsCopy = [...state.posts];

      const temp = postsCopy[index - 1];
      postsCopy[index - 1] = postsCopy[index];
      postsCopy[index] = temp;
      state.posts = postsCopy;
      // push into history array
      state.history.push({
        post: state.posts.filter(post => post.id === postId),
        from: index,
        to: index - 1,
        posts: postsCopy,
      });
    },
    down: (state, { index, postId }) => {
      const postsCopy = [...state.posts];

      const temp = postsCopy[index + 1];
      postsCopy[index + 1] = postsCopy[index];
      postsCopy[index] = temp;
      state.posts = postsCopy;
      // push into history array
      state.history.push({
        post: state.posts.filter(post => post.id === postId),
        from: index,
        to: index + 1,
        posts: postsCopy,
      });
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
