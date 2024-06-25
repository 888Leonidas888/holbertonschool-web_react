import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

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
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default NotificationItem;
