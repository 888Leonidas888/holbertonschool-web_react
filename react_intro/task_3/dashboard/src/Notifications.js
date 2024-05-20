import './Notifications.css';
import { getLastestNotification } from './utils';
// import React from 'react';

function Notifications() {
  return (
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
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLastestNotification() }}
        >
        </li>
      </ul>
    </div>
  );
}

export default Notifications;
