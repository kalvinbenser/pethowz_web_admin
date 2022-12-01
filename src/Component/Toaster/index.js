import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import { CheckCircleOutline, ErrorOutline } from '@material-ui/icons';
import { Alert } from '@mui/lab';
import useStyle from './toastermessage-style';

/**
 * ToastMessage component displaying the toast
 *
 * @function ToastMessage
 * @param {object} props contains data related to Toast
 * @returns {React.ReactElement} ToastMessage component.
 */
const ToastMessage = memo((props) => {
  const { open, severity, message, anchorOrigin, close } = props;
  const { successAlert, errorAlert, marginTop, errorIcon } = useStyle();
  const [show, setShowHide] = React.useState(open);
  let customClass = '';
  let icon = null;
  if (severity === 'success') {
    customClass = successAlert;
    icon = <CheckCircleOutline />;
  } else if (severity === 'error') {
    customClass = errorAlert;
    icon = <ErrorOutline className={errorIcon} />;
  }
  return (
    <Snackbar
      classes={{
        root: marginTop,
      }}
      aria-label="toast-message"
      anchorOrigin={anchorOrigin}
      open={show}
      onClose={() => {
        setShowHide(false);
        close();
      }}
      autoHideDuration={2000}
    >
      <Alert className={customClass} severity={severity} icon={icon}>
        {message}
      </Alert>
    </Snackbar>
  );
});

ToastMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  severity: PropTypes.string,
  message: PropTypes.string.isRequired,
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string.isRequired,
    horizontal: PropTypes.string.isRequired,
  }),
  close: PropTypes.func,
};

ToastMessage.defaultProps = {
  anchorOrigin: { vertical: 'top', horizontal: 'end' },
  severity: 'success',
  close: () => {},
};
export default ToastMessage;
