/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DashboardCard from '../../Component/DashboardCard';
import CustomIcons from '../../utils/Icons';
import Footer from '../../Component/Footer';
import CustomBarChart from '../../Component/BarChart';
import {
  GET_TOTAL_SERVICE_BOOKING,
  GET_TOTAL_VENUE_BOOKING,
  GET_TOTAL_BOOKINGS,
} from '../../constants/actionType/index';

/**
 *
 * @returns {React.ReactElement} returns the Dashboard Screen
 */
const DashboardScreen = () => {
  const { getTotalBooking, getServiceBooking, getVenueBooking } = useSelector((state) => state?.dashboardList);
  const cardData = [
    {
      header: 'Total Bookings',
      count: getTotalBooking.data,
      iconSource: CustomIcons.TotalBookings,
      backgroundColor: '#FF5F6D',
    },
    {
      header: 'Venues',
      count: getVenueBooking.data,
      iconSource: CustomIcons.TotalVenues,
      backgroundColor: '#FFBA00',
    },
    {
      header: 'Service',
      count: getServiceBooking.data,
      iconSource: CustomIcons.TotalService,
      backgroundColor: '#1BE3BB',
    },
  ];
  /**
   *
   */
  const dispatch = useDispatch();
  /**
   *
   */

  React.useEffect(() => {
    dispatch({ type: GET_TOTAL_SERVICE_BOOKING });
    dispatch({ type: GET_TOTAL_VENUE_BOOKING });
    dispatch({ type: GET_TOTAL_BOOKINGS });
  }, [dispatch]);
  const datas = localStorage.getItem('header');

  return (
    <Grid item container direction="row">
      {/* <Grid sx={{ pl: 10 }}>
        <p className="welcome_text">Welcome {datas} </p>{' '}
      </Grid> */}
      <DashboardCard dashboardCard={cardData} />
      <Grid justifyContent="center" display="flex" padding="20px" width="100%" height="60vh" paddingTop="50px">
        <CustomBarChart />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default DashboardScreen;
