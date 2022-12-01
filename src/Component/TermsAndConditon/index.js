/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import Typography from '../Typography';
/**
 *
 * @param {*} props --required props
 * @returns {React.ReactElement} returns the radioButton Component
 */
const Terms = (props) => {
  const { para, tittle } = props;
  return (
    <Grid item md={12}>
      <Grid sx={{ pt: 2 }}>
        <Typography text={tittle} customStyle={{ fontSize: '15px', color: '#9597A8' }} />
      </Grid>
      <Grid sx={{ pt: 2 }}>
        <Typography text={para} customStyle={{ fontSize: '16px' }} />
      </Grid>
    </Grid>
  );
};
export default Terms;
Terms.propTypes = {
  para: PropTypes.string,
  tittle: PropTypes.string,
};

Terms.defaultProps = {
  para: '',
  tittle: '',
};
