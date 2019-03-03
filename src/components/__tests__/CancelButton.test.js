import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { CancelButton } from '../CancelButton';

describe('CancelButton', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<CancelButton />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should call `onClick`  when button is clicked', () => {
    const onClick = jest.fn();
    const component = mount(<CancelButton onClick={onClick} />);

    component.find('button').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
