import React from 'react';
import { shallow } from 'enzyme';
import Divider from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('Divider Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Divider />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
