import mutations from '../../store/mutations';

describe('mutations', () => {
  it('Sets Posts in state', () => {
    // mock state
    const state = { posts: [] };
    mutations.setPosts(state, [
      { id: 1, text: 'Lorem Isum' },
      { id: 2, text: 'Lorem Ipsum' },
    ]);
    expect(state.posts.length).toEqual(2);
  });

  it('Changes order upwards', () => {
    const state = {
      posts: [
        { id: 1, text: 'Lorem Isum' },
        { id: 2, text: 'Lorem Ipsum' },
        { id: 3, text: 'Lorem Ipsum' },
      ],
      history: [],
    };

    mutations.up(state, { index: 2, postId: 3 });
    expect(state.posts[1].id).toEqual(3);
    expect(state.posts[2].id).toEqual(2);
    // checking that element at index 0 is unaffected
    expect(state.posts[0].id).toEqual(1);
  });

  it('Changes order downwards', () => {
    const state = {
      posts: [
        { id: 1, text: 'Lorem Isum' },
        { id: 2, text: 'Lorem Ipsum' },
        { id: 3, text: 'Lorem Ipsum' },
      ],
      history: [],
    };

    mutations.down(state, { index: 1, postId: 2 });
    expect(state.posts[1].id).toEqual(3);
    expect(state.posts[2].id).toEqual(2);
    // checking that element at index 0 is unaffected
    expect(state.posts[0].id).toEqual(1);
  });

  it('Time travels', () => {
    const state = {
      posts: [
        { id: 1, text: 'Lorem Ipsum' },
        { id: 2, text: 'Lorem Isum' },
        { id: 3, text: 'Lorem Ipsum' },
        { id: 4, text: 'Lorem Ipsum' },
      ],
      history: [],
    };
    // change order
    mutations.down(state, { index: 1, postId: 2 });
    mutations.up(state, { index: 3, postId: 4 });
    mutations.down(state, { index: 0, postId: 1 });

    expect(state.history.length).toEqual(3);
    // time travel
    mutations.timeTravel(state, 1);
    expect(state.posts[2].id).toEqual(4);

    mutations.timeTravel(state, 2);
    expect(state.posts[0].id).toEqual(1);
    expect(state.posts[1].id).toEqual(3);
  });
});
