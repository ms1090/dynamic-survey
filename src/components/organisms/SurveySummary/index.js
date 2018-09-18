import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Divider from '../../atoms/Divider';
import Button from '../../atoms/Button';
import QuestionResponse from '../../molecules/QuestionResponse';
import { resetQuestions, resetUserAnswer, clearUserAnswers } from '../../../actions';

/**
 * Display survey summary and survey restart button
 * @param {Object} byId Questions stacked by question ids
 * @param {Object} allIds Array of question ids
 * @param {Function} restartSurvey Restart button click handler
 * @return {React.Element} Return survey summary UI
 */
const SurveySummary = ({
  questions: { byId, allIds },
  restartSurvey,
}) => (
  <section>
    {allIds.map((qid, index) => (
      <QuestionResponse index={index + 1} key={qid} question={byId[qid]} />
    ))}
    <Divider />
    <Button onClick={restartSurvey}>RESTART SURVEY</Button>
  </section>
);
// default values for component props
SurveySummary.defaultProps = {
  questions: { allIds: [], byId: {}, currQuesIndex: 0 },
  restartSurvey: null,
};
// prop types checking
SurveySummary.propTypes = {
  questions: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.string),
    byId: PropTypes.object,
    currQuesIndex: PropTypes.number,
  }),
  restartSurvey: PropTypes.func,
};

/**
 * Maps state values to props for child component
 * @param {Object} state Redux's store object containing app's current state
 * @return {Object} Return object containing the props for child component
 */
const mapStateToProps = state => ({ questions: state.questions });
/**
 * Maps dispatch function to props for child component
 * @param {Function} dispatch Redux's dispatch function
 * @return {Object} Return object containing the props for child component
 */
const mapDispatchToProps = dispatch => ({
  restartSurvey: () => {
    dispatch(clearUserAnswers());
    dispatch(resetQuestions());
    dispatch(resetUserAnswer());
  },
});

// Create and export HOC connected to redux store
export default connect(mapStateToProps, mapDispatchToProps)(SurveySummary);
export { SurveySummary as SurveySummaryVanilla };
