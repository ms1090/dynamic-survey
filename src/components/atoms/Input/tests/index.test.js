import React from 'react';
import { shallow } from 'enzyme';
import Input from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('Input Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Input
      id="testId"
      className="test-className"
      label="test label"
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
