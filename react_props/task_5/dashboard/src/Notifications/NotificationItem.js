import React from 'react';
import { PropTypes } from 'prop-types';

function NotificationItem({ type = 'default', html = null, value = '' }) {
  if (html) {
    return (
      <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
    );
  } else {
    return <li data-notification-type={type}>{value}</li>;
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
