import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MovieCard } from '../MovieCard';

describe('MovieCard', () => {
  it('should render without crashing', () => {
    const props = {
      id: 'movie',
      title: 'a beautiful mind',
      seasons: 5,
      coverTemplate:
        'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3Exc_Packshot.jpg{?width,height}',
      onClick: jest.fn()
    };
    const wrapper = shallow(<MovieCard {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
