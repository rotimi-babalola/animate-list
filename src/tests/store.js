import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

export const localVue = createLocalVue();
localVue.use(Vuex);

const testStore = new Vuex.Store({
  state: {
    posts: [
      { id: 1, currentPosition: 0, initialPosition: 0 },
      { id: 2, currentPosition: 1, initialPosition: 1 },
      { id: 3, currentPosition: 2, initialPosition: 2 },
    ],
    history: [
      {
        from: 0,
        to: 1,
        postId: 1,
      },
      {
        from: 2,
        to: 1,
        postId: 3,
      },
    ],
  },
  actions: {
    getPosts: jest.fn(),
  },
  getters: {
    posts: state => state.posts,
    history: state => state.history,
  },
});

export default testStore;
