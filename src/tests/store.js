import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

export const localVue = createLocalVue();
localVue.use(Vuex);

const testStore = new Vuex.Store({
  state: {
    posts: [
      { id: 1, text: 'Lorem Isum' },
      { id: 2, text: 'Lorem Ipsum' },
      { id: 3, text: 'Lorem Ipsum' },
    ],
    history: [
      {
        post: [{ id: 1, text: 'Lorem Ipsum' }],
        from: 0,
        to: 1,
        posts: [
          { id: 2, text: 'Lorem Ipsum' },
          { id: 1, text: 'Lorem Ipsum' },
          { id: 3, text: 'Lorem Ipsum' },
        ],
      },
      {
        post: [{ id: 3, text: 'Lorem Ipsum' }],
        from: 2,
        to: 1,
        posts: [
          { id: 2, text: 'Lorem Ipsum' },
          { id: 3, text: 'Lorem Ipsum' },
          { id: 1, text: 'Lorem Ipsum' },
        ],
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
