import React from 'react';
import { shallow } from 'enzyme';
import { SurveySummaryVanilla } from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('SurveySummaryVanilla Component', () => {
  const questions = {
    allIds: ['ques1', 'ques2'],
    byId: {
      ques1: {
        id: 'ques1',
        text: 'What do you think about the use of dummies?',
        options: [
          "It's fine- whatever works, right?",
          "I don't mind them but never used much.",
          'I preferred to not use the dummy as much as possible.',
          'I would never use a dummy.',
        ],
      },
      ques2: {
        id: 'ques2',
        text: 'Can you tell us why you have this view?',
      },
    },
    currQuesIndex: 0,
  };
  const restartSurveyMock = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SurveySummaryVanilla
      questions={questions}
      restartSurvey={restartSurveyMock}
    />);
  });
  test('should render correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('should call restartSurvey on "restart survey" button click', () => {
    const buttonEle = wrapper.find('Button');
    expect(buttonEle.exists()).toBe(true);
    buttonEle.simulate('click');
    expect(restartSurveyMock.mock.calls.length).toBe(1);
  });
});
