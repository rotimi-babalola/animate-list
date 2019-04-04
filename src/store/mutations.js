import uniqueId from 'lodash.uniqueid';
import reorder from '../utils/reorder';
import swap from '../utils/swap';

/* eslint-disable no-param-reassign */
const mutations = {
  setPosts: (state, posts) => {
    const postsWithPositions = posts.map((post, index) => ({
      id: post.id,
      currentPosition: index,
      initialPosition: index,
    }));
    state.posts = postsWithPositions;
    state.initialPosts = postsWithPositions;
  },
  up: (state, postId) => {
    const postIndex = state.posts.findIndex(post => post.id === postId);
    state.posts[postIndex].currentPosition -= 1;
    state.posts[postIndex - 1].currentPosition += 1;

    // reorder posts array based on new postions
    const indexes = state.posts.map(post => post.currentPosition);
    state.posts = reorder(state.posts, indexes);

    // record history
    state.history.unshift({
      postId,
      from: postIndex,
      to: postIndex - 1,
      key: uniqueId(),
    });
  },
  down: (state, postId) => {
    const postIndex = state.posts.findIndex(post => post.id === postId);
    state.posts[postIndex].currentPosition += 1;
    state.posts[postIndex + 1].currentPosition -= 1;

    // reorder posts array based on new postions
    const indexes = state.posts.map(post => post.currentPosition);
    state.posts = reorder(state.posts, indexes);

    // record history
    state.history.unshift({
      postId,
      from: postIndex,
      to: postIndex + 1,
      key: uniqueId(),
    });
  },
  timeTravel: (state, index) => {
    // sets post in state to the posts in the history
    const numOfMovements = state.history.length - index;
    while (state.history.length > numOfMovements) {
      const action = state.history.shift();
      state.posts = swap(state.posts, action.to, action.from);
    }
  },
  reset: state => {
    // clear history
    state.history = [];
    state.posts = state.initialPosts;
  },
  setError: (state, error) => {
    state.error = error;
  },
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  },
};

export default mutations;
