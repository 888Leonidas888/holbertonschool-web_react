import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('Test para el componente CourseList', () => {
  let CourseListWrapper;

  beforeEach(() => {
    CourseListWrapper = shallow(<CourseList />);
  });

  it('Renderiza sin romperse', () => {
    expect(CourseListWrapper.exists()).toBe(true);
  });

  it('Renderiza con 5 CourseListRow', () => {
    expect(CourseListWrapper.find(CourseListRow).length).toBe(5);
  });
});
