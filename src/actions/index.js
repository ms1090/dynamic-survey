import TYPES from './types';
/**
 * Create Action with optional payload
 * @param {Object} payload Contains data for the action
 * @return {Object} Return created action object
 */

export const fetchQuestions = () => (
  { type: TYPES.FETCH_QUESTIONS }
);
export const fetchQuestionsSuccess = payload => (
  { type: TYPES.FETCH_QUESTIONS_SUCCESS, payload }
);
export const resetQuestions = () => (
  { type: TYPES.RESET_QUESTIONS }
);

export const fetchUserAnswers = () => (
  { type: TYPES.FETCH_USER_ANSWERS }
);
export const fetchUserAnswersSuccess = payload => (
  { type: TYPES.FETCH_USER_ANSWERS_SUCCESS, payload }
);

export const setCurrQuesIndex = payload => (
  { type: TYPES.SET_CURRENT_QUESTION_INDEX, payload }
);

export const storeUserAnswer = payload => (
  { type: TYPES.STORE_USER_ANSWER, payload }
);
export const resetUserAnswer = () => (
  { type: TYPES.RESET_USER_ANSWER }
);
export const setUserAnswer = payload => (
  { type: TYPES.SET_USER_ANSWER, payload }
);
export const setUserAnswerSuccess = payload => (
  { type: TYPES.SET_USER_ANSWER_SUCCESS, payload }
);

export const clearUserAnswers = () => (
  { type: TYPES.CLEAR_USER_ANSWERS }
);
