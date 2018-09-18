import React from 'react';
import PropTypes from 'prop-types';
import './questionResponse.css';

/**
 * Display question and user answer
 * @param {Object} question Question details object
 * @param {number} index Question index in list
 * @return {React.Element} Return question and answer UI
 */
const QuestionResponse = ({ question, index }) => (
  <article className="question-response">
    <div className="question-container">
      <span>{`Q ${index} : `}</span>
      <span>{question.text}</span>
    </div>
    <div className="answer-container">
      <strong>A : </strong>
      <span>{question.answer || 'No answer'}</span>
    </div>
  </article>
);
// default values for component props
QuestionResponse.defaultProps = {
  question: {},
  index: 1,
};
// prop types checking
QuestionResponse.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
    answer: PropTypes.string,
  }),
  index: PropTypes.number,
};
export default QuestionResponse;
