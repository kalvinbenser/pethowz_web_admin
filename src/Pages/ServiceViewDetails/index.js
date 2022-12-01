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
import { UPDATE_SERVICE_LIST_ADMIN } from '../../constants/actionType/index';
import './style.css';

/**
 * @param {*} props required props
 * @name ViewDetailsScreen
 * @returns {React.ReactElement} returns the ViewDetailsScreen
 */
const ServiceViewScreen = () => {
  /** */
  const [table, setTable] = useState([]);
  const [tmpIdsArr, setTmpIdsArr] = useState([]);
  const [approved, setApproved] = useState();
  const [reg, setReg] = useState([]);
  const [desc, setDesc] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  // const [options, setOption] = useState([]);
  const [reject, setReject] = useState([]);
  const [cost, setCost] = useState([]);

  const { getservicependinglist, updatedpendinglist } = useSelector((state) => state?.serviceList);
  console.log(updatedpendinglist, 'sdsfds');

  const dispatch = useDispatch();

  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];
    const approv = [];
    const services = [];
    // const option = [];
    const rejectd = [];
    const coster = [];
    const registerdetail = [];
    const selfdiscription = [];
    getservicependinglist.data?.map((values, index) => {
      IdsArray.push(values?.id);
      approv.push(values?.status === 1);
      rejectd.push(values?.status === 2);
      coster.push(values?.cost_per_hour);
      registerdetail.push(values?.RegistrationDetails);
      selfdiscription.push(values?.SelfDescriptionDetails);
      services.push(values?.Slot);
      return tmpArr.push({
        sno: index + 1,
        venue_name: values?.venue_name,
        service: values?.service_details,
        cost: values?.cost_per_hour,
        location: values?.location,
      });
    });
    setTable(tmpArr);
    setTmpIdsArr(IdsArray);
    setApproved(approv);
    setReg(registerdetail);
    setDesc(selfdiscription);
    setServiceData(services);
    // setOption(option);
    setReject(rejectd);
    setCost(coster);
  }, [getservicependinglist]);

  /**
   *
   */
  const onApproved = () => {
    dispatch({ type: UPDATE_SERVICE_LIST_ADMIN, payload: { tmpIdsArr, type: 'approval' } });
  };
  /**
   *
   */
  const onRejected = () => {
    dispatch({ type: UPDATE_SERVICE_LIST_ADMIN, payload: { tmpIdsArr, type: 'reject' } });
  };

  return (
    <Grid height="100vh">
      <Grid>
        <Grid md={12} container justifyContent="space-between" margin="10px">
          <Typography text="John Petaa Center" type="subHeading" colorType="primary" />
          <NavLink to="/service">
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
          service={serviceData}
          optionApplicable="servcie"
          costPerHour={cost[0]}
          category="Dog"
          location={table[0]?.location}
          onApprovedHandle={onApproved}
          onRejectedHandle={onRejected}
          btnHandler={approved}
          btnreject={reject}
          ViewDetailNavLink="/service"
          rejectedViewNavLink="/service"
        />
      </Grid>
    </Grid>
  );
};
export default ServiceViewScreen;
