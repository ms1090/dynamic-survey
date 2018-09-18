import { all } from 'redux-saga/effects';
import watchFetchQuestions from './fetchQuestions';
import watchFetchUserAnswers from './fetchUserAnswers';
import watchSetUserAnswer from './setUserAnswer';
import watchClearUserAnswers from './clearUserAnswers';

// register sagas to handle async actions
export default function* rootSaga() {
  try {
    yield all([
      watchFetchQuestions(),
      watchFetchUserAnswers(),
      watchSetUserAnswer(),
      watchClearUserAnswers(),
    ]);
  } catch (e) {
    // TODO: dispatch error action
    /* eslint-disable no-console */
    console.log('Error in saga:', e);
  }
}
