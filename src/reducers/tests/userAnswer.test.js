import userAnswer from '../userAnswer';
import TYPES from '../../actions/types';

describe('userAnswer reducer test', () => {
  const initialState = '';
  test('should return initial state', () => {
    expect(userAnswer(undefined, {})).toEqual(initialState);
  });
  test('should store user answer', () => {
    const expectedState = 'test data';
    const action = {
      type: TYPES.STORE_USER_ANSWER,
      payload: {
        userAnswer: 'test data',
      },
    };
    const state = userAnswer(initialState, action);
    expect(state).toBe(expectedState);
  });
  test('should reset user answer', () => {
    const expectedStoreState = 'test data';
    const actionStore = {
      type: TYPES.STORE_USER_ANSWER,
      payload: {
        userAnswer: 'test data',
      },
    };
    const storeState = userAnswer(initialState, actionStore);
    expect(storeState).toBe(expectedStoreState);
    const actionReset = { type: TYPES.RESET_USER_ANSWER };
    const resetState = userAnswer(storeState, actionReset);
    expect(resetState).toBe(initialState);
  });
});
