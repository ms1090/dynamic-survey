import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('ProgressBar Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<ProgressBar className="test-className" />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
