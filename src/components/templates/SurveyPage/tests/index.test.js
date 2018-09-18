import React from 'react';
import { shallow } from 'enzyme';
import { SurveyPageVanilla } from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('SurveyPageVanilla Component', () => {
  const fetchQuestionsMock = jest.fn();
  const fetchUserAnswersMock = jest.fn();
  beforeEach(() => {

  });
  test('should render correctly', () => {
    let wrapper = shallow(<SurveyPageVanilla
      quesCount={4}
      currQuesIndex={1}
      fetchQuestions={() => {}}
      fetchUserAnswers={() => {}}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper = shallow(<SurveyPageVanilla
      quesCount={4}
      currQuesIndex={4}
      fetchQuestions={() => {}}
      fetchUserAnswers={() => {}}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('should call fetchQuestions, fetchUserAnswers after mount', () => {
    shallow(<SurveyPageVanilla
      quesCount={4}
      currQuesIndex={1}
      fetchQuestions={fetchQuestionsMock}
      fetchUserAnswers={fetchUserAnswersMock}
    />);
    expect(fetchQuestionsMock.mock.calls.length).toBe(1);
    expect(fetchUserAnswersMock.mock.calls.length).toBe(1);
  });
});
