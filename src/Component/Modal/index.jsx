/* eslint-disable no-unused-vars */
import * as React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  Grid,
  DialogContentText,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CustomButton from '../CustomButton';
/**
 *
 * @param {*} props --required props
 * @returns {React.ReactElement} - returns the CustomModal --
 */
const CustomModal = (props) => {
  const { openModal, handleClose, modalContent, modalTitle } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
      <Dialog fullScreen={fullScreen} open={openModal} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>{modalContent}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid sx={{ justifyContent: 'center', p: 1 }} item container direction="row" columnGap={3}>
            <CustomButton
              btnTitle="SUBMIT"
              color="primary"
              variant="contained"
              autoFocus
              onClickHandle={handleClose}
              btnStyles={{ color: '#fff' }}
            />
            <CustomButton btnTitle="CANCEL" color="primary" variant="outlined" autoFocus onClickHandle={handleClose} />
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default CustomModal;
CustomModal.propTypes = {
  openModal: PropTypes.string.isRequired,
  handleClose: PropTypes.func,
  modalContent: PropTypes.node.isRequired,
  modalTitle: PropTypes.string,
};
CustomModal.defaultProps = {
  handleClose: () => null,
  modalTitle: '',
};
