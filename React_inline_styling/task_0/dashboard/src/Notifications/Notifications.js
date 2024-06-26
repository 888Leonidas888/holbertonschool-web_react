import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.listNotifications.length <
      nextProps.listNotifications.length
      ? true
      : false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    const { displayDrawer = true, listNotifications = [] } = this.props;

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
            {listNotifications.length === 0 ? (
              <p>No new notifications for now</p>
            ) : (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((item) => (
                    <NotificationItem
                      key={item.id}
                      type={item.type}
                      value={item.value}
                      html={item.html}
                      markAsRead={() => this.markAsRead(item.id)}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

// Notifications.defaultProps = {
//   displayDrawer: true,
//   listNotifications: [],
// };

export default Notifications;
