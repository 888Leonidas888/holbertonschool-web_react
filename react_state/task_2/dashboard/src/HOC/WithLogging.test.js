import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';

const originalConsoleLog = console.log;
beforeEach(() => {
  console.log = jest.fn();
});

afterEach(() => {
  console.log = originalConsoleLog;
});

const DummyComponent = () => <p>Dummy Component</p>;

describe('WithLogging', () => {

  it('Mostar en consola el mensaje correcto al montar y desmontar componente', () => {
    const WrappedComponent = WithLogging(DummyComponent);
    const wrapper = shallow(<WrappedComponent />);

    // Check console.log calls on mount and unmount
    expect(console.log).toHaveBeenCalledWith('Component DummyComponent is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith(
      'Component DummyComponent is going to unmount'
    );
  });
});
