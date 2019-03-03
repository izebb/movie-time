import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { MovieSummary } from '../MovieSummary';

describe('MovieSummary', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<MovieSummary />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call `onClear` when CancelButton is clicked', () => {
    const props = {
      onClear: jest.fn()
    };
    const wrapper = mount(<MovieSummary {...props} />);
    wrapper
      .find('CancelButton')
      .first()
      .simulate('click');
    expect(props.onClear).toHaveBeenCalled();
  });
});
