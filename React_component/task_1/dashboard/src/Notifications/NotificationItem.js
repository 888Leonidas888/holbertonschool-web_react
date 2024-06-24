import React from 'react';
import { PropTypes } from 'prop-types';

function NotificationItem({
  type = 'default',
  html = null,
  value = '',
  markAsRead,
}) {
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={markAsRead}
      ></li>
    );
  } else {
    return (
      <li data-notification-type={type} onClick={markAsRead}>
        {value}
      </li>
    );
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
