import {
  takeEvery,
  call,
  put,
} from 'redux-saga/effects';
import * as questionsApi from '../api/questions';
import TYPES from '../actions/types';
import { setUserAnswerSuccess } from '../actions';

/**
 * store user answer and current question index
 * and dipatch success action with user answer and current question index
 * @param {Object} action Object containing action type and payload data
 */
export function* setUserAnswer(action) {
  yield call(questionsApi.storeUserAns, action.payload);
  yield put(setUserAnswerSuccess(action.payload));
}

// watch and handle every action of type 'SET_USER_ANSWER'
export default function* watchSetUserAnswer() {
  yield takeEvery(TYPES.SET_USER_ANSWER, setUserAnswer);
}
