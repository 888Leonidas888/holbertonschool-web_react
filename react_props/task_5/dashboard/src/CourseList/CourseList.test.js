import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('Test para el componente CourseList', () => {
  let CourseListWrapper;

  beforeEach(() => {
    CourseListWrapper = shallow(<CourseList listCourses={[]} />);
  });

  it('Renderiza sin romperse', () => {
    expect(CourseListWrapper.exists()).toBe(true);
  });

  it('Renderiza con 3 CourseListRow', () => {
    expect(CourseListWrapper.find(CourseListRow).length).toBe(3);
  });

  it(
    'Renderiza con el texto "No course available yet"' +
      ' cuando se le pasa una lista vacia',
    () => {
      const noCourseRow = CourseListWrapper.find(CourseListRow).at(2).dive();
      expect(noCourseRow.find('td').length).toBe(2);
      expect(noCourseRow.find('td').at(0).text()).toBe(
        'No course available yet'
      );
    }
  );

  it('Renderiza cuando se le pasa una lista de cursos.', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
