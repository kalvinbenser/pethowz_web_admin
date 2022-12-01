import React from 'react';
import { Grid } from '@mui/material';
// import CustomImages from '../../utils/Images';
// import Typography from '../Typography';
import './Header.css';
/**
 *
 * @returns {React.ReactElement} returns the Header Component
 */
const Header = () => {
  return (
    <Grid justifyContent="flex-end" padding="10px">
      {/* <Typography type="primary" colorType="primary" text="Dinesh " customClass="userName" />
      <img src={CustomImages.ProfilePic} alt="" className="userImage" /> */}
    </Grid>
  );
};
export default Header;
