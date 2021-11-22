import React from 'react';
import SectionHeading from './SectionHeading';
import { shallow } from 'enzyme';

describe('Component SectionHeading', () => {
  it('should render without crashing', () => {
    const component = shallow(<SectionHeading />);
    expect(component).toBeTruthy();
  });
});
