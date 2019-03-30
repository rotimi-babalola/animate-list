import mutations from '../store/mutations';

describe('mutations', () => {
  it('Sets Posts in state', () => {
    // mock state
    const state = { posts: [] };
    mutations.setPosts(state, [
      { id: 1, text: 'Lorem Isum' },
      { id: 2, text: 'Lorem Ipsum' },
    ]);
    expect(state.posts.length).to.equal(2);
  });
});
