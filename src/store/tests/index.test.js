import store from '..';

describe('store configuration test', () => {
  const storeMock = {
    dispatch: expect.any(Function),
    getState: expect.any(Function),
    replaceReducer: expect.any(Function),
    subscribe: expect.any(Function),
  };
  test('store should be configured', () => {
    expect(store).toEqual(storeMock);
  });
});
