/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Typography from '../Typography';
import Button from '../CustomButton';

/**
 * @param {*} props required props
 * @name venueDetails
 * @returns {React.ReactElement} returns the VenueDetails
 */
const VenueDetails = (props) => {
  /**
   *
   */
  const {
    venueName,
    amenities,
    service,
    optionApplicable,
    costPerHour,
    category,
    venueDetails,
    btnreject,
    location,
    btnHandler,
    onApprovedHandle,
    onRejectedHandle,
    ViewDetailNavLink,
    rejectedViewNavLink,
  } = props;
  useEffect(() => {
    console.log('service', service);
  }, [service]);
  return (
    <Grid item md={12}>
      <Grid>
        <Typography text="Venue Details" type="subHeading" />
      </Grid>
      <Grid item container md={12}>
        <Grid item md={2.5} height="200px" padding="10px">
          <Grid>
            <Grid>
              <Typography text="Venue Name" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
            </Grid>
            <Grid>
              <Typography text={venueName} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} padding="10px">
          <Grid>
            <Typography text="Location" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
            <Typography text={location} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
          </Grid>
          {/* <Grid sx={{ pt: 2 }}>
            <Typography text="amenities" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
            <Typography text={amenities} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
          </Grid> */}
        </Grid>
        <Grid item md={5.5} padding="10px">
          <Grid>
            <Typography text="Category" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
            <Typography text={category} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container md={12}>
        <Grid item md={2.5} height="200px" padding="5px">
          <Grid>
            <Grid>
              <Typography text="Service Name" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
            </Grid>
            {service[0]?.map((item) => (
              <Grid>
                <Typography text={item?.service_name} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item md={2.5} height="200px" padding="5px">
          <Grid>
            <Grid>
              <Typography text="Cost Per Hour" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
            </Grid>
            {service[0]?.map((item) => (
              <Grid>
                <Typography text={item?.cost} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {btnreject[0] === true && (
        <Grid display="grid" justifyContent="flex-end" paddingRight="20px">
          <Typography text="Rejected" customStyle={{ fontSize: '19px', color: 'red' }} />
        </Grid>
      )}
      {btnHandler[0] === false && btnreject[0] === false && (
        <Grid item container md={12} justifyContent="flex-end" columnGap={3} sx={{ p: 3 }}>
          <Grid>
            <NavLink to={ViewDetailNavLink} style={{ textDecoration: 'none' }}>
              <Button
                btnTitle="APPROVED"
                color="success"
                variant="contained"
                btnStyles={{ color: 'white' }}
                onClickHandle={onApprovedHandle}
              />
            </NavLink>
          </Grid>
          <Grid>
            <NavLink to={rejectedViewNavLink} style={{ textDecoration: 'none' }}>
              <Button
                btnTitle="REJECTED"
                color="error"
                variant="contained"
                btnStyles={{ color: 'white' }}
                onClickHandle={onRejectedHandle}
              />
            </NavLink>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default VenueDetails;
VenueDetails.propTypes = {
  venueName: PropTypes.string,
  amenities: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  service: PropTypes.array,
  optionApplicable: PropTypes.string,
  costPerHour: PropTypes.string,
  category: PropTypes.string,
  venueDetails: PropTypes.string,
  location: PropTypes.string,
  onApprovedHandle: PropTypes.func,
  onRejectedHandle: PropTypes.func,
  ViewDetailNavLink: PropTypes.string,
  rejectedViewNavLink: PropTypes.string,
  btnHandler: PropTypes.string,
  btnreject: PropTypes.string,
};
VenueDetails.defaultProps = {
  venueName: '',
  amenities: '',
  service: [],
  optionApplicable: '',
  costPerHour: '',
  category: '',
  venueDetails: '',
  location: '',
  onApprovedHandle: () => null,
  onRejectedHandle: () => null,
  ViewDetailNavLink: '',
  rejectedViewNavLink: '',
  btnHandler: '',
  btnreject: '',
};
