import rootReducer from '..';

describe('root reducer', () => {
  const initialState = {
    questions: { allIds: [], byId: {}, currQuesIndex: 0 },
    userAnswer: '',
  };
  test('should return initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
