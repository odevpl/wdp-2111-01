import PaginationDots from './PaginationDots';
import React from 'react';
import { shallow } from 'enzyme';

describe('Component PaginationDots', () => {
  it('should render without crashing', () => {
    const component = shallow(<PaginationDots />);
    expect(component).toBeTruthy();
  });
});
