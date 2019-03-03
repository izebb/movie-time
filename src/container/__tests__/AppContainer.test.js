import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { AppContainer } from '../AppContainer';

jest.useFakeTimers();
describe('AppContainer', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<AppContainer />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
