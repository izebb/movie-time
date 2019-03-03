import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MovieList } from '../MovieList';
import { movieListPayload } from '../../__mocks__/response_payload';

describe('MovieList', () => {
  it('should render without crashing', () => {
    const props = {
      list: movieListPayload
    };
    const wrapper = shallow(<MovieList {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
