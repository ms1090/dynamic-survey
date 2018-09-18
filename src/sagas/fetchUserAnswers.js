import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import * as questionsApi from '../api/questions';
import TYPES from '../actions/types';
import { fetchUserAnswersSuccess } from '../actions';

// fetch user data and dispatch success action with user data
export function* fetchUserAnswers() {
  const response = yield call(questionsApi.getUserData);
  yield put(fetchUserAnswersSuccess(response.data));
}

// watch and handle latest action of type 'FETCH_USER_ANSWERS'
export default function* watchFetchUserAnswers() {
  yield takeLatest(TYPES.FETCH_USER_ANSWERS, fetchUserAnswers);
}
