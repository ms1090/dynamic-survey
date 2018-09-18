import React from 'react';
import { shallow } from 'enzyme';
import RadioBox from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('RadioBox Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<RadioBox
      id="testId"
      className="test-className"
      name="test-name"
      label="test label"
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
