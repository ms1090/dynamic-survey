import { takeEvery, call } from 'redux-saga/effects';
import * as questionsApi from '../../api/questions';
import TYPES from '../../actions/types';
import watchClearUserAnswers, { clearUserAnswers } from '../clearUserAnswers';

const stepper = fn => mock => fn.next(mock).value;

describe('watchClearUserAnswers saga', () => {
  test('should take every CLEAR_USER_ANSWERS', () => {
    const step = stepper(watchClearUserAnswers());
    expect(step())
      .toEqual(takeEvery(TYPES.CLEAR_USER_ANSWERS, clearUserAnswers));
  });
});
describe('clearUserAnswers saga', () => {
  test('should call clear user data api', () => {
    const step = stepper(clearUserAnswers());
    expect(step()).toEqual(call(questionsApi.clearUserData));
  });
});
