import API from './api';

const actions = {
  getPosts: store => {
    API.getPosts()
      .then(response => {
        store.commit('setPosts', response.data.splice(0, 5));
      })
      .catch(error => {
        store.commit('setError', error);
      });
  },
};

export default actions;
