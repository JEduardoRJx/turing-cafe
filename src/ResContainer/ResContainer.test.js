import React from 'react';
import ResContainer from './ResContainer';
import { shallow } from 'enzyme'

describe('ResContainer', () => {
  let wrapper, mockGuests;

  beforeEach(() => {
    mockGuests = []
    wrapper = shallow(<ResContainer guests={mockGuests}/>)
  });

  it('should create a snapshot of ResContainer', () => {
    expect(wrapper).toMatchSnapshot();
  });

})