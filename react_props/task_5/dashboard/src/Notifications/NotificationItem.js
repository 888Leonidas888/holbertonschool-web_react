import React from 'react';
import { PropTypes } from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}
      >
        {value}
      </li>
    );
  } else {
    return <li data-notification-type={type}>{value}</li>;
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default NotificationItem;
