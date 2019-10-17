import React from 'react';
import Form from './Form';
import { shallow } from 'enzyme'

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />)
  });

  it('should create a snapshot of Form', () => {
    expect(wrapper).toMatchSnapshot();
  });

})