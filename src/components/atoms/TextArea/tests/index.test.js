import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('TextArea Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<TextArea
      id="testId"
      className="test-className"
      label="test label"
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
