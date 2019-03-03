import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { PlayButton } from '../PlayButtons';

describe('PlayButtons', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<PlayButton />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
