import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App Componente', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('App se renderiza sin romperse.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Contiene el componente Notifications.', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('Contiene el componente Header.', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('Contiene el componente Footer.', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('Renderiza con el componente Login cuando isLoggedIn es false', () => {
    const appWrapper = shallow(<App isLoggedIn={false} />);
    expect(appWrapper.find(Login).length).toBe(1);
  });

  it('Renderiza con el componente CourseList cuando isLoggedIn es true', () => {
    const appWrapper = shallow(<App isLoggedIn={true} />);
    expect(appWrapper.find(CourseList).length).toBe(1);
  });
});
