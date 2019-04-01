import getters from '../../store/getters';

describe('getters', () => {
  it('gets posts from state', () => {
    const state = {
      posts: [
        { id: 1, text: 'Lorem Isum' },
        { id: 2, text: 'Lorem Ipsum' },
        { id: 3, text: 'Lorem Ipsum' },
      ],
    };
    const result = getters.posts(state);
    expect(result).toStrictEqual(state.posts);
  });

  it('gets history from state', () => {
    const state = {
      history: [
        {
          post: [{ id: 1, text: 'Lorem Ipsum' }],
          from: 1,
          to: 2,
          posts: [
            { id: 1, text: 'Lorem Ipsum' },
            { id: 2, text: 'Lorem Ipsum' },
          ],
        },
      ],
    };
    const result = getters.history(state);
    expect(result).toStrictEqual(state.history);
  });
});
