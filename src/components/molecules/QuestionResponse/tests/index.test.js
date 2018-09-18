import React from 'react';
import { shallow } from 'enzyme';
import QuestionResponse from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('QuestionResponse Component', () => {
  test('should render correctly', () => {
    const question = { text: 'test question?' };
    const wrapper = shallow(<QuestionResponse
      question={question}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
