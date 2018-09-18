import questions from '../questions';
import TYPES from '../../actions/types';

describe('questions reducer test', () => {
  const initialState = { allIds: [], byId: {}, currQuesIndex: 0 };
  const questionsData = [
    {
      id: 'ques1',
      text: 'What do you think about the use of dummies?',
      options: [
        "It's fine- whatever works, right?",
        "I don't mind them but never used much.",
        'I preferred to not use the dummy as much as possible.',
        'I would never use a dummy.',
      ],
    },
    {
      id: 'ques2',
      text: 'Can you tell us why you have this view?',
    },
  ];
  const getExpectedQuestions = () => ({
    allIds: ['ques1', 'ques2'],
    byId: {
      ques1: questionsData[0],
      ques2: questionsData[1],
    },
    currQuesIndex: 0,
  });
  const userData = {
    currQuesIndex: 1,
    answers: {
      ques1: 'I would never use a dummy.',
      ques2: 'Test input text',
    },
  };
  test('should return initial state', () => {
    expect(questions(undefined, {})).toEqual(initialState);
  });
  test('should store questions data', () => {
    const expectedState = getExpectedQuestions();
    const action = {
      type: TYPES.FETCH_QUESTIONS_SUCCESS,
      payload: { questions: questionsData },
    };
    const state = questions(initialState, action);
    expect(state.allIds).toEqual(expectedState.allIds);
    expect(state.currQuesIndex).toBe(expectedState.currQuesIndex);
    expect(state.byId).toEqual(expectedState.byId);
  });
  test('should update questions with user answer data', () => {
    const action = {
      type: TYPES.FETCH_USER_ANSWERS_SUCCESS,
      payload: {
        currQuesIndex: userData.currQuesIndex,
        answers: { ...userData.answers },
      },
    };
    const stateInit = getExpectedQuestions();
    const state = questions(stateInit, action);
    const expectedById = { ...getExpectedQuestions().byId };
    expectedById.ques1.answer = userData.answers.ques1;
    expectedById.ques2.answer = userData.answers.ques2;
    expect(state.currQuesIndex).toBe(userData.currQuesIndex);
    expect(state.byId).toEqual(expectedById);
  });
  test('should set current question index', () => {
    const action = {
      type: TYPES.SET_CURRENT_QUESTION_INDEX,
      payload: 3,
    };
    const state = questions(initialState, action);
    expect(state.currQuesIndex).toBe(3);
  });
  test('should set user answer for the question', () => {
    const action = {
      type: TYPES.SET_USER_ANSWER_SUCCESS,
      payload: { currQuesId: 'ques1', userAnswer: 'test answer' },
    };
    const stateInit = getExpectedQuestions();
    const state = questions(stateInit, action);
    expect(state.byId.ques1.answer).toBe('test answer');
    const nextAction = { type: TYPES.SET_USER_ANSWER_SUCCESS, payload: {} };
    const nextState = questions(state, nextAction);
    expect(nextState.byId.ques1.answer).toBe('test answer');
  });
  test('should remove user answers and reset current question index', () => {
    const action = { type: TYPES.RESET_QUESTIONS };
    const stateInit = getExpectedQuestions();
    stateInit.byId.ques1.answer = userData.answers.ques1;
    stateInit.byId.ques2.answer = userData.answers.ques2;
    stateInit.currQuesIndex = userData.currQuesIndex;
    const state = questions(stateInit, action);
    expect(state.currQuesIndex).toBe(0);
    expect(state.byId.ques1.answer).toBe('');
    expect(state.byId.ques2.answer).toBe('');
  });
});
