import React from 'react';
import { Grid } from '@mui/material';
import './styles.css';
import CustomIcons from '../../utils/Icons';
import Typography from '../Typography';
/**
 * @name Footer
 * @returns {React.ReactElement} returns the footer Component
 */
const Footer = () => {
  return (
    <Grid className="footer_text">
      <img src={CustomIcons.CopyRight} alt="" />
      <Typography text="Pethowz 2022" />
    </Grid>
  );
};
export default Footer;
