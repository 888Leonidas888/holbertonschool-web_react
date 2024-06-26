import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notificationDefault: {
    color: 'blue',
  },
  notificationUrgent: {
    color: 'red',
  },
  notificationStrong: {
    fontWeight: 900,
  },
});

class NotificationItem extends PureComponent {
  render() {
    const {
      type = 'default',
      html = null,
      value = '',
      markAsRead,
    } = this.props;
    if (html) {
      return (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
          onClick={markAsRead}
          // className={css(
          //   item.type === 'urgent'
          //     ? styles.notificationUrgent
          //     : styles.notificationDefault
          // )}
          className={css(
            type === 'urgent'
              ? styles.notificationUrgent
              : styles.notificationDefault,
          )}
        ></li>
      );
    } else {
      return (
        <li
          data-notification-type={type}
          onClick={markAsRead}
          className={css(
            type === 'urgent'
              ? styles.notificationUrgent
              : styles.notificationDefault,
          )}
        >
          {value}
        </li>
      );
    }
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default NotificationItem;
