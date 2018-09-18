import {
  takeLatest,
  call,
  put,
} from 'redux-saga/effects';
import * as questionsApi from '../api/questions';
import TYPES from '../actions/types';
import { fetchQuestionsSuccess } from '../actions';

// fetch questions data and dispatch success action with questions data
export function* fetchQuestions() {
  const response = yield call(questionsApi.getAll);
  yield put(fetchQuestionsSuccess(response.data));
}

// watch and handle latest action of type 'FETCH_QUESTIONS'
export default function* watchFetchQuestions() {
  yield takeLatest(TYPES.FETCH_QUESTIONS, fetchQuestions);
}
