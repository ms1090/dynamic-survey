import TYPES from '../actions/types';

// initial state for questions
const getInitialState = () => ({ allIds: [], byId: {}, currQuesIndex: 0 });

/**
 * update slice 'questions' of redux's store
 * @param {String} state Object of questions and current question id
 * @param {Object} action Object containing action type and payload
 * @return {Array} Updated value for this slice of redux's store
 */
const questions = (state = getInitialState(), action) => {
  switch (action.type) {
    case TYPES.FETCH_QUESTIONS_SUCCESS: {
      const { questions: quesList } = action.payload;
      const newState = getInitialState();
      quesList.forEach((q) => {
        newState.allIds.push(q.id);
        newState.byId[q.id] = { ...q };
      });
      return newState;
    }
    case TYPES.FETCH_USER_ANSWERS_SUCCESS: {
      const { currQuesIndex, answers } = action.payload;
      const newState = { ...state, currQuesIndex };
      newState.allIds.forEach((qid) => {
        newState.byId[qid] = {
          ...newState.byId[qid],
          answer: answers[qid],
        };
      });
      return newState;
    }
    case TYPES.SET_CURRENT_QUESTION_INDEX: {
      const currQuesIndex = action.payload;
      return {
        ...state,
        currQuesIndex,
      };
    }
    case TYPES.SET_USER_ANSWER_SUCCESS: {
      const { currQuesId, userAnswer } = action.payload;
      if (userAnswer) {
        const newState = {
          ...state,
          byId: {
            ...state.byId,
            [currQuesId]: {
              ...state.byId[currQuesId],
              answer: userAnswer,
            },
          },
        };
        return newState;
      }
      return state;
    }
    case TYPES.RESET_QUESTIONS: {
      const newState = { ...state, currQuesIndex: 0 };
      newState.allIds.forEach((qid) => {
        newState.byId[qid] = {
          ...newState.byId[qid],
          answer: '',
        };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default questions;
