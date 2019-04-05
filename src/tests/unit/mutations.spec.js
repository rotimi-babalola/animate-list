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
        { id: 1, currentPosition: 0, initialPosition: 0 },
        { id: 2, currentPosition: 1, initialPosition: 1 },
        { id: 3, currentPosition: 2, initialPosition: 2 },
      ],
      history: [],
    };

    mutations.up(state, 3);
    expect(state.posts[1].id).toEqual(3);
    expect(state.posts[2].id).toEqual(2);
    // checking that element at index 0 is unaffected
    expect(state.posts[0].id).toEqual(1);
  });

  it('Changes order downwards', () => {
    const state = {
      posts: [
        { id: 1, currentPosition: 0, initialPosition: 0 },
        { id: 2, currentPosition: 1, initialPosition: 1 },
        { id: 3, currentPosition: 2, initialPosition: 2 },
      ],
      history: [],
    };

    mutations.down(state, 2);
    expect(state.posts[1].id).toEqual(3);
    expect(state.posts[2].id).toEqual(2);
    // checking that element at index 0 is unaffected
    expect(state.posts[0].id).toEqual(1);
  });

  it('Time travels', () => {
    const state = {
      posts: [
        { id: 1, currentPosition: 0, initialPosition: 0 },
        { id: 2, currentPosition: 1, initialPosition: 1 },
        { id: 3, currentPosition: 2, initialPosition: 2 },
        { id: 4, currentPosition: 3, initialPosition: 3 },
      ],
      history: [],
    };
    // change order
    mutations.down(state, 2);
    mutations.up(state, 4);
    mutations.down(state, 1);

    expect(state.history.length).toEqual(3);
    // time travel
    mutations.timeTravel(state, 1);
    expect(state.posts[2].id).toEqual(4);
  });
});
