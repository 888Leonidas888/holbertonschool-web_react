import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('Test para el component BodySection', () => {
  it('Se renderinza con el titulo correcto.', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Verificar que se renderice un h2 con el título correcto
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Verificar que se renderice un p con el contenido correcto
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
