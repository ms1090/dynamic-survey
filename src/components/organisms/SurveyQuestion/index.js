import { connect } from 'react-redux';
import QuestionForm from '../../molecules/QuestionForm';
import {
  storeUserAnswer,
  setUserAnswer,
  resetUserAnswer,
  setCurrQuesIndex,
} from '../../../actions';

/**
 * Maps state values to props for child component
 * @param {Object} state Redux's store object containing app's current state
 * @return {Object} Return object containing the props for child component
 */
const mapStateToProps = ({
  questions: { allIds, byId, currQuesIndex },
  userAnswer,
}) => ({
  quesCount: allIds.length,
  currQuesIndex,
  question: byId[allIds[currQuesIndex]],
  userAnswer,
});
/**
 * Maps dispatch function to props for child component
 * @param {Function} dispatch Redux's dispatch function
 * @return {Object} Return object containing the props for child component
 */
const mapDispatchToProps = dispatch => ({
  setUserAnswer: userAnsData => dispatch(setUserAnswer(userAnsData)),
  resetUserAnswer: () => dispatch(resetUserAnswer()),
  storeUserAnswer: userAnsData => dispatch(storeUserAnswer(userAnsData)),
  setCurrQuesIndex: currQuesIndex => dispatch(setCurrQuesIndex(currQuesIndex)),
});

// Create and export HOC connected to redux store
export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
