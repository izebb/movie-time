import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MovieCardSummary } from '../MovieCardSummary';

describe('MovieCardSummary', () => {
  it('should render without crashing', () => {
    const props = {
      title: 'a beautiful mind',
      seasons: 5
    };
    const wrapper = shallow(<MovieCardSummary {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
