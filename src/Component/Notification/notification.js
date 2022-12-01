/* eslint-disable require-jsdoc */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Notification = ({ dispatch, id, type, message }) => {
  const [exit, setExit] = useState(false);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    // eslint-disable-next-line no-shadow
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        // clearInterval(id);
        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNotification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch({
        type: 'REMOVE_NOTIFICATION',
        id,
      });
    }, 400);
  };

  React.useEffect(() => {
    if (width === 100) {
      // Close notification
      handleCloseNotification();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  React.useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      // eslint-disable-next-line no-nested-ternary
      className={`notification-item ${type === 'SUCCESS' ? 'success' : type === 'ERROR' ? 'error' : 'warning'} ${
        exit ? 'exit' : ''
      }`}
    >
      <p>{message}</p>
      {/* <div className={"bar"} style={{ width: `${width}%` }} /> */}
    </div>
  );
};

export default Notification;
