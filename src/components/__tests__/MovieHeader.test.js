import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MovieHeader } from '../MovieHeader';

describe('MovieCard', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<MovieHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
