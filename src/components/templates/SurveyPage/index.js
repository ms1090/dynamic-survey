import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SurveyQuestion from '../../organisms/SurveyQuestion';
import SurveySummary from '../../organisms/SurveySummary';
import ProgressBar from '../../atoms/ProgressBar';
import { fetchQuestions, fetchUserAnswers } from '../../../actions';
import './surveyPage.css';

// Display survey page template
class SurveyPage extends Component {
  // Dispatch actions to fetch questions and stored user data
  componentDidMount() {
    const {
      fetchQuestions: fetchQuestionsProp,
      fetchUserAnswers: fetchUserAnswersProp,
    } = this.props;
    fetchQuestionsProp();
    fetchUserAnswersProp();
  }

  /**
   * @return {React.Element} Render survey page template UI
   */
  render() {
    const {
      currQuesIndex,
      quesCount,
    } = this.props;
    return (
      <div className="layout-container">
        <ProgressBar max={quesCount} value={currQuesIndex} />
        {currQuesIndex < quesCount
          ? <SurveyQuestion />
          : <SurveySummary />
        }
      </div>
    );
  }
}
// default values for component props
SurveyPage.defaultProps = {
  quesCount: 0,
  currQuesIndex: 0,
  fetchQuestions: null,
  fetchUserAnswers: null,
};
// prop types checking
SurveyPage.propTypes = {
  quesCount: PropTypes.number,
  currQuesIndex: PropTypes.number,
  fetchQuestions: PropTypes.func,
  fetchUserAnswers: PropTypes.func,
};

/**
 * Maps state values to props for child component
 * @param {Object} state Redux's store object containing app's current state
 * @return {Object} Return object containing the props for child component
 */
const mapStateToProps = ({ questions: { allIds, currQuesIndex } }) => ({
  quesCount: allIds.length,
  currQuesIndex,
});
/**
 * Maps dispatch function to props for child component
 * @param {Function} dispatch Redux's dispatch function
 * @return {Object} Return object containing the props for child component
 */
const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions()),
  fetchUserAnswers: () => dispatch(fetchUserAnswers()),
});

// Create and export HOC connected to redux store
export default connect(mapStateToProps, mapDispatchToProps)(SurveyPage);
export { SurveyPage as SurveyPageVanilla };
