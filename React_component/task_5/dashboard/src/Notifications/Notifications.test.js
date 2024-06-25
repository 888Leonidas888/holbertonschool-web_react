import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    );
  });

  it('Renderiza sin romperse.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renderiza con 0 componentes NotificationItem.', () => {
    expect(wrapper.find(NotificationItem).length).toBe(0);
  });

  it(
    'Renderiza con el texo "No new notifications for now"' +
      ' cuando displaDrawer=true y listNotifications=[]',
    () => {
      expect(wrapper.find('.Notifications p').at(0).text()).toBe(
        'No new notifications for now'
      );
    }
  );

  it(
    'Renderiza con el texo "Here is the list of notifications" cuando displayDrawer=true' +
      ' y listNotificatios se le pasa una lista con data.',
    () => {
      const notification = {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      };
      wrapper = shallow(
        <Notifications
          displayDrawer={true}
          listNotifications={[notification]}
        />
      );
      expect(wrapper.find('.Notifications p').at(0).text()).toBe(
        'Here is the list of notifications'
      );
    }
  );

  it('Renderiza con la cantidad correcta de notificiones', () => {
    const notification = {
      id: 2,
      type: 'urgent',
      value: 'New resume available',
    };
    wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[notification]} />
    );
    expect(wrapper.find(NotificationItem).length).toBe(1);
  });

  it('Renderiza con el texo "Your notifications" cuando displayDrawer=false', () => {
    wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('p').text()).toBe('Your notifications');
  });
});
