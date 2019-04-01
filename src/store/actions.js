import API from './api';

const actions = {
  getPosts: async store => {
    store.commit('setLoading', true);
    try {
      const response = await API.getPosts();
      store.commit('setPosts', response.data.splice(0, 5));
      store.commit('setLoading', false);
    } catch (error) {
      store.commit('setError', error);
      store.commit('setLoading', false);
    }
  },
};

export default actions;
