import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer = false }) {
  return (
    <div className="menuItem">
      <p>Your notifications</p>
      {displayDrawer ? (
        <div className="Notifications">
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            aria-label="Close"
            onClick={() => console.log('Close button has been clicked')}
          >
            x
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={getLatestNotification()} />
          </ul>
        </div>
      ) : null}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
