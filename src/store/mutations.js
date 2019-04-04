import reorder from '../utils/reorder';
import swap from '../utils/swap';

/* eslint-disable no-param-reassign */
const mutations = {
  setPosts: (state, posts) => {
    const postsWithPositions = posts.map((post, index) => ({
      id: post.id,
      position: index,
    }));
    state.posts = postsWithPositions;
    // state.history = postsWithPositions;
  },
  up: (state, postId) => {
    const postIndex = state.posts.findIndex(post => post.id === postId);
    state.posts[postIndex].position -= 1;
    state.posts[postIndex - 1].position += 1;

    // reorder posts array based on new postions
    const indexes = state.posts.map(post => post.position);
    state.posts = reorder(state.posts, indexes);

    // record history
    state.history.unshift({
      postId,
      from: postIndex,
      to: postIndex - 1,
    });
  },
  down: (state, postId) => {
    const postIndex = state.posts.findIndex(post => post.id === postId);
    state.posts[postIndex].position += 1;
    state.posts[postIndex + 1].position -= 1;

    // reorder posts array based on new postions
    const indexes = state.posts.map(post => post.position);
    state.posts = reorder(state.posts, indexes);

    // record history
    state.history.unshift({
      postId,
      from: postIndex,
      to: postIndex + 1,
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
  setError: (state, error) => {
    state.error = error;
  },
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  },
};

export default mutations;
