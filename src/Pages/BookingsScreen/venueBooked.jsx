import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../Component/Table';
import { venueBookedHeader } from './tableData';
import { GET_VENUE_BOOKING } from '../../constants/actionType/index';

import './styles.css';
// import SearchBar from '../../Component/Search';
/**
 *
 * @returns {React.ReactElement} returns the venue booked content
 */
const VenueBooked = () => {
  const [bookingtable, setBookingtable] = useState([]);

  /**
   *
   */
  const { getBookingVenue } = useSelector((state) => state?.bookingsList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: GET_VENUE_BOOKING });
  }, [dispatch]);
  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];

    getBookingVenue.data?.map((value, index) => {
      return tmpArr.push({
        sno: index + 1,
        Name: value.name,
        contactnumber: value.contact_number,
        petname: value.pet_name,
        petcount: value.pet_count,
        services: value.service,

        Venue: value?.venue_name,
        No_of_days: value.days,
        cost: value.cost_per_hour,

        Requirement: value.service_type,
      });
    });
    setBookingtable(tmpArr);
  }, [getBookingVenue]);
  return (
    <Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table header={venueBookedHeader} rows={bookingtable} />
      </Grid>
    </Grid>
  );
};
export default VenueBooked;
