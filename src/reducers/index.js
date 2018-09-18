import { combineReducers } from 'redux';
import questions from './questions';
import userAnswer from './userAnswer';

// combine all reducers to be used in redux's store
export default combineReducers({
  questions,
  userAnswer,
});
