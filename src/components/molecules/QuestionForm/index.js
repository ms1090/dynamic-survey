import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioBox from '../../atoms/RadioBox';
import SelectBox from '../../atoms/SelectBox';
import TextArea from '../../atoms/TextArea';
import Divider from '../../atoms/Divider';
import Button from '../../atoms/Button';
import './questionForm.css';

// Display survey question form
export default class QuestionForm extends Component {
  // Dispatch action to store user answer in state
  componentDidMount() {
    const {
      question,
      storeUserAnswer,
    } = this.props;
    if (question) {
      storeUserAnswer({ userAnswer: question.answer || '' });
    }
  }

  // Dispatch action to store user answer if updated
  componentDidUpdate(prevProps) {
    const {
      question,
      storeUserAnswer,
    } = this.props;
    if (prevProps.question.answer !== question.answer) {
      storeUserAnswer({ userAnswer: question.answer || '' });
    }
  }

  /**
   * Store user answer in state
   * @param {Object} event Event object containing user answer
   */
  handleChange = (event) => {
    const userAnswer = event.target.value;
    const { storeUserAnswer } = this.props;
    storeUserAnswer({ userAnswer });
  }

  /**
   * Set user answer, update current question index
   * and navigate to next question
   * @param {String} navDir To show next or prev question
   */
  handleNav = (navDir) => {
    const {
      setUserAnswer,
      currQuesIndex,
      quesCount,
      setCurrQuesIndex,
      resetUserAnswer,
      userAnswer,
      question: { id: currQuesId },
    } = this.props;
    let newQuesIndex;
    if (navDir === 'next') {
      if (currQuesIndex < quesCount) {
        newQuesIndex = currQuesIndex + 1;
      }
    } else if (currQuesIndex > 0) {
      newQuesIndex = currQuesIndex - 1;
    }
    const payload = {
      currQuesIndex: newQuesIndex,
      currQuesId,
      userAnswer,
    };
    setUserAnswer(payload);
    setCurrQuesIndex(newQuesIndex);
    resetUserAnswer();
  }

  // Handle "NEXT" button click event
  handleNext = () => {
    this.handleNav('next');
  }

  // Handle "BACK" button click event
  handleBack = () => {
    this.handleNav('back');
  }

  // Handle "SUBMIT" button click event
  handleSubmitSurvey = () => {
    this.handleNav('next');
  }

  /**
   * @return {React.Element} Render survey question form component UI
   */
  render() {
    const {
      question,
      userAnswer: value,
      currQuesIndex,
      quesCount,
    } = this.props;
    let userInput;
    // Create input element for survey question
    if (question.options) {
      if (question.options.length <= 5) {
        // use radio button if there are <= 5 options
        userInput = question.options.map((ele, index) => (
          <RadioBox
            name="userAns"
            id={`userAns${index}`}
            key={ele}
            value={ele}
            label={ele}
            onChange={this.handleChange}
            checked={value === ele ? 'checked' : ''}
          />
        ));
      } else {
        // use select box if there are more than 5 options
        userInput = (
          <SelectBox
            id="userAns"
            options={question.options.map(ele => ({
              value: ele, label: ele,
            }))}
            label="Select an option"
            onChange={this.handleChange}
            value={value}
          />
        );
      }
    } else {
      // use text input field if there are no options for question
      userInput = (
        <TextArea
          id="userAns"
          label="Your answer"
          onChange={this.handleChange}
          value={value}
        />
      );
    }
    return (
      <section className="question-form">
        <div className="question-container">
          <span>{`Question ${currQuesIndex + 1} :`}</span>
          <span>{question.text}</span>
        </div>
        <div className="input-field-container">{userInput}</div>
        <Divider />
        {currQuesIndex < quesCount - 1
          ? (
            <Button
              className="float-right"
              disabled={value ? '' : 'disabled'}
              onClick={this.handleNext}
            >
              NEXT
            </Button>
          )
          : (
            <Button
              className="float-right"
              disabled={value ? '' : 'disabled'}
              onClick={this.handleSubmitSurvey}
            >
              SUBMIT
            </Button>
          )
        }
        {currQuesIndex > 0
          ? <Button onClick={this.handleBack}>BACK</Button>
          : null
        }
      </section>
    );
  }
}
// default values for component props
QuestionForm.defaultProps = {
  quesCount: 0,
  currQuesIndex: 0,
  question: {},
  userAnswer: '',
  setUserAnswer: null,
  resetUserAnswer: null,
  storeUserAnswer: null,
  setCurrQuesIndex: null,
};
// prop types checking
QuestionForm.propTypes = {
  quesCount: PropTypes.number,
  currQuesIndex: PropTypes.number,
  question: PropTypes.shape({
    id: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    text: PropTypes.string,
    answer: PropTypes.string,
  }),
  userAnswer: PropTypes.string,
  setUserAnswer: PropTypes.func,
  resetUserAnswer: PropTypes.func,
  storeUserAnswer: PropTypes.func,
  setCurrQuesIndex: PropTypes.func,
};
