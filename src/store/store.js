import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    posts: [],
    history: [],
    error: null,
  },
  mutations,
  actions,
  getters: {
    posts: state => state.posts,
    history: state => state.history,
  },
});
