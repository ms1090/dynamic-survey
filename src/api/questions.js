import questions from './dummy-data.json';

// Dummy api for question data

/**
 * Fetch and return all questions of team
 * @return {Object} Return all question list
 */
export const getAll = () => ({ data: questions });

// initial user data
const initData = { answers: {}, currQuesIndex: 0 };

/**
 * Store user answer and current question index
 * @param {Object} payload Payload of currQuesIndex, currQuesId and userAnswer
 */
export const storeUserAns = (payload) => {
  let dataStr = localStorage.getItem('survey');
  const data = JSON.parse(dataStr) || initData;
  const { currQuesIndex, currQuesId, userAnswer } = payload;
  data.currQuesIndex = currQuesIndex;
  if (userAnswer && userAnswer !== '') {
    data.answers[currQuesId] = userAnswer;
  }
  dataStr = JSON.stringify(data);
  localStorage.setItem('survey', dataStr);
};

/**
 * fetch user answers and question index
 * @return {Object} Return user data
 */
export const getUserData = () => {
  const dataStr = localStorage.getItem('survey');
  const data = JSON.parse(dataStr);
  return { data: data || initData };
};

// Delete user answers
export const clearUserData = () => {
  localStorage.removeItem('survey');
};
