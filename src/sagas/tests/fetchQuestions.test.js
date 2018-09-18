import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import * as questionsApi from '../../api/questions';
import TYPES from '../../actions/types';
import { fetchQuestionsSuccess } from '../../actions';
import watchFetchQuestions, { fetchQuestions } from '../fetchQuestions';

const stepper = fn => mock => fn.next(mock).value;

describe('watchFetchQuestions saga', () => {
  test('should take latest FETCH_QUESTIONS', () => {
    const step = stepper(watchFetchQuestions());
    expect(step())
      .toEqual(takeLatest(TYPES.FETCH_QUESTIONS, fetchQuestions));
  });
});
describe('fetchQuestions saga', () => {
  test('should call get all questions api and dispatch success action', () => {
    const step = stepper(fetchQuestions());
    expect(step()).toEqual(call(questionsApi.getAll));
    expect(step({
      data: 'test data',
    })).toEqual(put(fetchQuestionsSuccess('test data')));
  });
});
