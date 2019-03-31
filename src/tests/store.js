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
  },
  actions: {
    getPosts: jest.fn(),
  },
  getters: {
    posts: state => state.posts,
  },
});

export default testStore;
