import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login componente', () => {
  let loginWrapper;

  beforeEach(() => {
    loginWrapper = shallow(<Login />);
  });

  it('Renderizar sin romperse.', () => {
    expect(loginWrapper.exists()).toBe(true);
  });

  it('Renderiza con 2 input', () => {
    expect(loginWrapper.find('input').length).toBe(2);
  });

  it('Renderiza con 2 labels', () => {
    expect(loginWrapper.find('label').length).toBe(2);
  });
});
