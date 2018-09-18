import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import * as questionsApi from '../../api/questions';
import TYPES from '../../actions/types';
import { fetchUserAnswersSuccess } from '../../actions';
import watchFetchUserAnswers, { fetchUserAnswers } from '../fetchUserAnswers';

const stepper = fn => mock => fn.next(mock).value;

describe('watchFetchUserAnswers saga', () => {
  test('should take latest FETCH_USER_ANSWERS', () => {
    const step = stepper(watchFetchUserAnswers());
    expect(step())
      .toEqual(takeLatest(TYPES.FETCH_USER_ANSWERS, fetchUserAnswers));
  });
});
describe('fetchUserAnswers saga', () => {
  test('should call get user data api and dispatch success action', () => {
    const step = stepper(fetchUserAnswers());
    expect(step()).toEqual(call(questionsApi.getUserData));
    expect(step({
      data: 'test data',
    })).toEqual(put(fetchUserAnswersSuccess('test data')));
  });
});
