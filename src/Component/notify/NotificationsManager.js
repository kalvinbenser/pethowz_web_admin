import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification';

/**
 *
 * @param root0
 * @param root0.setNotify
 */
export default function NotificationsManager({ setNotify }) {
  const [notifications, setNotifications] = React.useState([]);

  // eslint-disable-next-line require-jsdoc
  const createNotification = ({ color, autoClose, children }) => {
    setNotifications((prevNotifications) => {
      return [
        ...prevNotifications,
        {
          children,
          color,
          autoClose,
          id: prevNotifications.length,
        },
      ];
    });
  };

  React.useEffect(() => {
    setNotify(({ color, autoClose, children }) => createNotification({ color, autoClose, children }));
  }, [setNotify]);

  // eslint-disable-next-line require-jsdoc
  const deleteNotification = (id) => {
    const filteredNotifications = notifications.filter((_, index) => id !== index, []);
    setNotifications(filteredNotifications);
  };

  return notifications.map(({ id, ...props }, index) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Notification key={id} onDelete={() => deleteNotification(index)} {...props} />
  ));
}

NotificationsManager.propTypes = {
  setNotify: PropTypes.func.isRequired,
};
