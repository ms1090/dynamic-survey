import {
  fetchQuestions,
  fetchQuestionsSuccess,
  resetQuestions,
  fetchUserAnswers,
  fetchUserAnswersSuccess,
  setCurrQuesIndex,
  storeUserAnswer,
  resetUserAnswer,
  setUserAnswer,
  setUserAnswerSuccess,
  clearUserAnswers,
} from '..';
import TYPES from '../types';

const testPayload = { text: 'test payload' };

describe('action creators', () => {
  test('fetchQuestions', () => {
    expect(fetchQuestions())
      .toEqual({ type: TYPES.FETCH_QUESTIONS });
  });
  test('fetchQuestionsSuccess', () => {
    expect(fetchQuestionsSuccess(testPayload))
      .toEqual({ type: TYPES.FETCH_QUESTIONS_SUCCESS, payload: testPayload });
  });
  test('resetQuestions', () => {
    expect(resetQuestions())
      .toEqual({ type: TYPES.RESET_QUESTIONS });
  });
  test('fetchUserAnswers', () => {
    expect(fetchUserAnswers())
      .toEqual({ type: TYPES.FETCH_USER_ANSWERS });
  });
  test('fetchUserAnswersSuccess', () => {
    expect(fetchUserAnswersSuccess(testPayload))
      .toEqual({ type: TYPES.FETCH_USER_ANSWERS_SUCCESS, payload: testPayload });
  });
  test('setCurrQuesIndex', () => {
    expect(setCurrQuesIndex(testPayload))
      .toEqual({ type: TYPES.SET_CURRENT_QUESTION_INDEX, payload: testPayload });
  });
  test('storeUserAnswer', () => {
    expect(storeUserAnswer(testPayload))
      .toEqual({ type: TYPES.STORE_USER_ANSWER, payload: testPayload });
  });
  test('resetUserAnswer', () => {
    expect(resetUserAnswer())
      .toEqual({ type: TYPES.RESET_USER_ANSWER });
  });
  test('setUserAnswer', () => {
    expect(setUserAnswer(testPayload))
      .toEqual({ type: TYPES.SET_USER_ANSWER, payload: testPayload });
  });
  test('setUserAnswerSuccess', () => {
    expect(setUserAnswerSuccess(testPayload))
      .toEqual({ type: TYPES.SET_USER_ANSWER_SUCCESS, payload: testPayload });
  });
  test('clearUserAnswers', () => {
    expect(clearUserAnswers())
      .toEqual({ type: TYPES.CLEAR_USER_ANSWERS });
  });
});
