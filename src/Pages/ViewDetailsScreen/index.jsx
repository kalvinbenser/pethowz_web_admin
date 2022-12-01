/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import PhotoGallery from '../../Component/PhotoGallery';
import ViewDetails from '../../Component/ViewDetails';
import VenueDetails from '../../Component/VenueDetails';
import Typography from '../../Component/Typography';
import CustomIcons from '../../utils/Icons';
import { UPDATE_VENUE_LIST_ADMIN } from '../../constants/actionType/index';

import './styles.css';
/**
 * @param {*} props required props
 * @name ViewDetailsScreen
 * @returns {React.ReactElement} returns the ViewDetailsScreen
 */
const ViewDetailsScreen = () => {
  const [table, setTable] = useState([]);
  const [tmpIdsArr, setTmpIdsArr] = useState([]);
  const [approved, setApproved] = useState();
  const [reg, setReg] = useState([]);
  const [desc, setDesc] = useState([]);
  // const [option, setOption] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [reject, setReject] = useState([]);
  const [cost, setCost] = useState([]);
  const [venue, setVenue] = useState([]);
  const [categories, setCategories] = useState([]);
  const [amen, setAmen] = useState([]);
  const dispatch = useDispatch();
  /**
   *
   */
  const { getpendinglist, updatedadminlist } = useSelector((state) => state?.venueList);
  console.log(updatedadminlist, 'updatedadminlist');
  console.log(categories[0]?.toString(), 'sdfsdasdasdf');
  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];
    const approv = [];
    const registerdetail = [];
    const selfdiscription = [];
    // const options = [];
    const service = [];
    const rejectd = [];
    const coster = [];
    const venueName = [];
    const categorey = [];
    const amens = [];
    getpendinglist.data?.map((values, index) => {
      console.log('values123', values);
      IdsArray.push(values?.id);
      approv.push(values?.status === 1);
      registerdetail.push(values?.RegistrationDetails);
      selfdiscription.push(values?.SelfDescriptionDetails);
      // options.push(values.options_id);
      service.push(values?.Slot);
      rejectd.push(values?.status === 2);
      coster.push(values?.cost_per_hour);
      venueName.push(values?.venue_name);
      categorey.push(values?.venue_category);
      amens.push(values?.amenities);
      return tmpArr.push({
        sno: index + 1,
        venue_name: values.venue_name,
        service: values.service_details,
        cost: values.cost_per_hour,
        location: values.location,
        service_cost: values.service_cost,
      });
    });
    setTable(tmpArr);
    setTmpIdsArr(IdsArray);
    setApproved(approv);
    setReg(registerdetail);
    setDesc(selfdiscription);
    // setOption(options);
    setServiceData(service);
    setReject(rejectd);
    setCost(coster);
    setVenue(venueName);
    setCategories(categorey);
    setAmen(amens);
  }, [getpendinglist]);
  /**
   *
   */
  const onApproved = () => {
    dispatch({ type: UPDATE_VENUE_LIST_ADMIN, payload: { tmpIdsArr, type: 'approval' } });
  };
  /**
   *
   */
  const onRejected = () => {
    dispatch({ type: UPDATE_VENUE_LIST_ADMIN, payload: { tmpIdsArr, type: 'reject' } });
  };

  return (
    <Grid height="100vh">
      <Grid>
        <Grid md={12} container justifyContent="space-between" margin="10px">
          <Typography text={venue[0]} type="subHeading" colorType="primary" />
          <NavLink to="/venues">
            <img src={CustomIcons.CrossIcon} alt="" className="crossIconStyle" />
          </NavLink>
        </Grid>
        <Grid width="100%" item className="photoGalleryView " container margin="10px">
          <PhotoGallery />
        </Grid>
      </Grid>
      <Grid padding="10px" overflow="auto" width="100%" height="50%" item container>
        <ViewDetails
          userName={reg[0]?.name}
          contactNumber={reg[0]?.contact_number}
          address={reg[0]?.address}
          petCategory={reg[0]?.PetCategory}
          SelfDescription={desc}
        />
        <VenueDetails
          venueName={table[0]?.venue_name}
          // service={services.toString()}
          service={serviceData}
          // optionApplicable={option.toString()}
          costPerHour={cost[0]}
          category={categories[0]?.toString()}
          amenities={amen[0]?.toString()}
          location={table[0]?.location}
          onApprovedHandle={onApproved}
          onRejectedHandle={onRejected}
          ViewDetailNavLink="/venues"
          rejectedViewNavLink="/venues"
          btnHandler={approved}
          btnreject={reject}
        />
      </Grid>
    </Grid>
  );
};
export default ViewDetailsScreen;
