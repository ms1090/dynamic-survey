import React from 'react';
import { shallow } from 'enzyme';
import QuestionForm from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('QuestionForm Component', () => {
  const props = {
    quesCount: 4,
    currQuesIndex: 1,
    question: {
      id: 'ques2',
      text: 'Can you tell us why you have this view?',
    },
    userAnswer: 'test answer',
    setUserAnswer: () => {},
    resetUserAnswer: () => {},
    storeUserAnswer: () => {},
    setCurrQuesIndex: () => {},
  };
  test('should render correctly', () => {
    let wrapper = shallow(<QuestionForm {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper = shallow(<QuestionForm
      {...props}
      currQuesIndex={4}
      question={
        {
          id: 'ques1',
          text: 'What do you think about the use of dummies?',
          options: [
            "It's fine- whatever works, right?",
            "I don't mind them but never used much.",
            'I preferred to not use the dummy as much as possible.',
            'I would never use a dummy.',
          ],
        }
      }
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper = shallow(<QuestionForm
      {...props}
      currQuesIndex={0}
      question={
        {
          id: 'ques3',
          text: 'At what age do you think it is appropriate for a child to have a dummy?',
          options: [
            'Up to 1 yr',
            'Up to 2 yrs',
            'Up to 3 yrs',
            'Up to 4yrs',
            'Up to 5yrs',
            'Beyond 5yrs',
          ],
        }
      }
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('should call storeUserAnswer on mount', () => {
    const storeUserAnswerMock = jest.fn();
    shallow(<QuestionForm
      {...props}
      storeUserAnswer={storeUserAnswerMock}
    />);
    expect(storeUserAnswerMock.mock.calls.length).toBe(1);
  });
  test('should call storeUserAnswer on change event', () => {
    const storeUserAnswerMock = jest.fn();
    const wrapper = shallow(<QuestionForm
      {...props}
      storeUserAnswer={storeUserAnswerMock}
    />);
    wrapper.find('TextArea').simulate('change', { target: { value: 'test data' } });
    expect(storeUserAnswerMock.mock.calls.length).toBe(2);
  });
  test(
    'should navigate to next/prev question on click of "NEXT"/"BACK" button',
    () => {
      const mocks = {
        setUserAnswer: jest.fn(),
        setCurrQuesIndex: jest.fn(),
        resetUserAnswer: jest.fn(),
      };
      const wrapper = shallow(<QuestionForm
        {...props}
        {...mocks}
      />);
      const buttonEles = wrapper.find('Button');
      buttonEles.at(0).simulate('click');
      buttonEles.at(1).simulate('click');
      expect(mocks.setUserAnswer.mock.calls.length).toBe(2);
      expect(mocks.setCurrQuesIndex.mock.calls.length).toBe(2);
      expect(mocks.resetUserAnswer.mock.calls.length).toBe(2);
    },
  );
  test('should complete survey on click of "SUBMIT" button', () => {
    const mocks = {
      setUserAnswer: jest.fn(),
      setCurrQuesIndex: jest.fn(),
      resetUserAnswer: jest.fn(),
    };
    const wrapper = shallow(<QuestionForm
      {...props}
      {...mocks}
      currQuesIndex={4}
    />);
    wrapper.find('Button').at(0).simulate('click');
    expect(mocks.setUserAnswer.mock.calls.length).toBe(1);
    expect(mocks.setCurrQuesIndex.mock.calls.length).toBe(1);
    expect(mocks.resetUserAnswer.mock.calls.length).toBe(1);
  });
  test('should call storeUserAnswer on update', () => {
    const storeUserAnswerMock = jest.fn();
    const wrapper = shallow(<QuestionForm
      {...props}
      storeUserAnswer={storeUserAnswerMock}
    />);
    wrapper.setProps({
      question: {
        id: 'ques2',
        text: 'Can you tell us why you have this view?',
        answer: 'test answer',
      },
    });
    expect(storeUserAnswerMock.mock.calls.length).toBe(2);
  });
});
