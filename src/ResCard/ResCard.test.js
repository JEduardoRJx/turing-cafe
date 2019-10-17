import React from 'react';
import ResCard from './ResCard';
import { shallow } from 'enzyme'

describe('ResCard', () => {
  let wrapper, mockGuest;

  beforeEach(() => {
    mockGuest = {
      id: 0,
      name: 'Eduardo',
      date: '05/01',
      number: 2,
      time: '5'
    }
    wrapper = shallow(<ResCard guest={mockGuest}/>)
  });

  it('should create a snapshot of ResCard', () => {
    expect(wrapper).toMatchSnapshot();
  });

})