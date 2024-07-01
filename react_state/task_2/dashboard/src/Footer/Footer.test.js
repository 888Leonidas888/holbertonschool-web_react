import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer componente', () => {
  let footerWrapper;

  beforeEach(() => {
    footerWrapper = shallow(<Footer />);
  });

  it('Renderizar son romperse.', () => {
    expect(footerWrapper.exists()).toBe(true);
  });

  it('Renderiza con el texto Copyright', () => {
    expect(footerWrapper.text().includes('Copyright')).toBe(true);
  });
});
