import { takeEvery, call } from 'redux-saga/effects';
import * as questionsApi from '../api/questions';
import TYPES from '../actions/types';

// delete user answers and current question index
export function* clearUserAnswers() {
  yield call(questionsApi.clearUserData);
}

// watch and handle every action of type 'CLEAR_USER_ANSWERS'
export default function* watchClearUserAnswers() {
  yield takeEvery(TYPES.CLEAR_USER_ANSWERS, clearUserAnswers);
}
