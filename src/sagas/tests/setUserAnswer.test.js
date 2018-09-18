import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import * as questionsApi from '../../api/questions';
import TYPES from '../../actions/types';
import { setUserAnswerSuccess } from '../../actions';
import watchSetUserAnswer, { setUserAnswer } from '../setUserAnswer';

const stepper = fn => mock => fn.next(mock).value;

const action = {
  type: TYPES.SET_USER_ANSWER,
  payload: 'test data',
};

describe('watchSetUserAnswer saga', () => {
  test('should take latest SET_USER_ANSWER', () => {
    const step = stepper(watchSetUserAnswer());
    expect(step())
      .toEqual(takeEvery(TYPES.SET_USER_ANSWER, setUserAnswer));
  });
});
describe('setUserAnswer saga', () => {
  test('should call get user data api and dispatch success action', () => {
    const step = stepper(setUserAnswer(action));
    expect(step()).toEqual(call(questionsApi.storeUserAns, action.payload));
    expect(step()).toEqual(put(setUserAnswerSuccess(action.payload)));
  });
});
