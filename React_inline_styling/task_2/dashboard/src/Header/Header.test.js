import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header componente', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  let headerWrapper;

  beforeEach(() => {
    headerWrapper = shallow(<Header />);
  });

  it('Renderizar son romperse.', () => {
    expect(headerWrapper.exists()).toBe(true);
  });

  it('Renderiza con un elemento img', () => {
    expect(headerWrapper.find('img').length).toBe(1);
  });

  it('Renderiza con un elemento h1', () => {
    expect(headerWrapper.find('h1').length).toBe(1);
  });
});
