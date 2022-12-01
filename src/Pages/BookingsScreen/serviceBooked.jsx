import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Table from '../../Component/Table';
import { serviceBookedHeader } from './tableData';
import './styles.css';
import { GET_SERVICES_BOOKING } from '../../constants/actionType/index';
/**
 *
 * @returns {React.ReactElement} returns the service booked content
 */
const ServiceBooked = () => {
  const [bookingtable, setBookingtable] = useState([]);
  /**
   *
   */
  const { getListServices } = useSelector((state) => state?.bookingsList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: GET_SERVICES_BOOKING });
  }, [dispatch]);
  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];

    getListServices.data?.map((value, index) => {
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
      });
    });
    setBookingtable(tmpArr);
  }, [getListServices]);

  return (
    <Grid>
      <Grid className="dividerStyle" />
      <Grid>
        <Table header={serviceBookedHeader} rows={bookingtable} dropdown />
      </Grid>
    </Grid>
  );
};
export default ServiceBooked;
