import React from 'react';
import { Button, Grid } from '@mui/material';
import PropTypes from 'prop-types';
/**
 *
 * @param {*} props --
 * @returns {React.ReactElement} returns the CustomButton
 */
const CustomButton = (props) => {
  const { btnTitle, variant, color, btnStyles, onClickHandle } = props;

  return (
    <Grid>
      <Button variant={variant} color={color} sx={btnStyles} onClick={onClickHandle}>
        {btnTitle}
      </Button>
    </Grid>
  );
};
export default CustomButton;
CustomButton.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  btnStyles: PropTypes.objectOf(),
  onClickHandle: PropTypes.func,
};
CustomButton.defaultProps = {
  variant: 'contained',
  color: '',
  btnStyles: {},
  onClickHandle: () => null,
};
