import React from 'react';
import App from './App';
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should create a snapshot of App', () => {
    expect(wrapper).toMatchSnapshot();
  });

})

