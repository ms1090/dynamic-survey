import React from 'react';
import { shallow } from 'enzyme';
import Button from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('Button Component', () => {
  const props = {
    className: 'test-class',
    children: null,
    primary: false,
    secondary: false,
    onClick: null,
  };
  test('should render correctly', () => {
    let wrapper = shallow(<Button {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper = shallow(<Button {...props} primary />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper = shallow(<Button {...props} secondary />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
