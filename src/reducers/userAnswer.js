import TYPES from '../actions/types';

// initial state for user answer
const initState = '';
/**
 * update slice 'userAnswer' of redux's store
 * @param {String} state User answer string
 * @param {Object} action Object containing action type and payload
 * @return {Array} Updated value for this slice of redux's store
 */
const userAnswer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.STORE_USER_ANSWER:
      return action.payload.userAnswer;
    case TYPES.RESET_USER_ANSWER:
      return initState;
    default:
      return state;
  }
};

export default userAnswer;
