import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Test para el componente BodySectionWithMarginBottom', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Se renderiza con un titulo y un nodo', () => {
    let wrapper = shallow(
      <BodySectionWithMarginBottom title={'test title'}>
        <p>lorem ipsum</p>
      </BodySectionWithMarginBottom>
    );

    expect(wrapper.find(BodySection).props().title).toEqual('test title');
    expect(wrapper.find(BodySection).props().children.type).toEqual('p');
    expect(wrapper.find(BodySection).props().children.props.children).toEqual(
      'lorem ipsum'
    );
    expect(wrapper.find('.bodySectionWithMargin').exists()).toBeTruthy();
  });
});
