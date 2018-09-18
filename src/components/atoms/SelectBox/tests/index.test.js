import React from 'react';
import { shallow } from 'enzyme';
import SelectBox from '..';
import toJson from 'enzyme-to-json';
import 'utils/configureAdapter';

describe('SelectBox Component', () => {
  test('should render correctly', () => {
    const options = [
      {
        label: 'test label 1',
        value: 'test value 1',
      },
      {
        label: 'test label 2',
        value: 'test value 2',
      },
    ];
    const wrapper = shallow(<SelectBox
      id="testId"
      className="test-className"
      name="test-name"
      label="test label"
      options={options}
    />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
