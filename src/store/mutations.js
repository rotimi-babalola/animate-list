/* eslint-disable no-param-reassign */
const mutations = {
  setPosts: (state, posts) => {
    state.posts = posts;
  },
  up: (state, { index, postId }) => {
    const postsCopy = [...state.posts];

    const temp = postsCopy[index - 1];
    postsCopy[index - 1] = postsCopy[index];
    postsCopy[index] = temp;
    state.posts = postsCopy;
    // add history to the beginning of the array
    state.history.unshift({
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
    // add history to the beginning of the array
    state.history.unshift({
      post: state.posts.filter(post => post.id === postId),
      from: index,
      to: index + 1,
      posts: postsCopy,
    });
  },
  timeTravel: (state, index) => {
    // sets post in state to the posts in the history
    state.posts = state.history[index].posts;
  },
  setError: (state, error) => {
    state.error = error;
  },
};

export default mutations;
