import rootSaga from '..';
import watchFetchQuestions from '../fetchQuestions';
import watchFetchUserAnswers from '../fetchUserAnswers';
import watchSetUserAnswer from '../setUserAnswer';
import watchClearUserAnswers from '../clearUserAnswers';
import { all } from 'redux-saga/effects';

describe('root saga test', () => {
  test('yields all sagas and handles error', () => {
    const step = rootSaga();
    expect(step.next().value).toEqual(all([
      watchFetchQuestions(),
      watchFetchUserAnswers(),
      watchSetUserAnswer(),
      watchClearUserAnswers(),
    ]));

    expect(step.throw('test error').value)
      /* eslint-disable no-console */
      .toEqual(console.log('Error in saga:', 'test error'));
  });
});
