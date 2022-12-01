/* eslint-disable no-constant-condition */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '../../Component/Typography';
import CustomTab from '../../Component/CustomTab';
import Footer from '../../Component/Footer';
import Pending from './pending';
import Approved from './approved';
import Rejected from './rejected';
import { GET_ALL_SERVICE_LIST, UPDATE_SERVICE_LIST_ADMIN } from '../../constants/actionType/index';
/**
 *
 * @returns {React.ReactElement} returns the Service Screen
 */
const ServiceScreen = () => {
  const dispatch = useDispatch();
  const [table, setTable] = useState([]);
  const [tabColor, setTabColor] = useState('orange');
  const [tabIndicator, setTabIndicator] = useState('orange');
  const [tmpIdsArr, setTmpIdsArr] = useState([]);
  /**
   *
   */
  const { getservicelist, updatedpendinglist } = useSelector((state) => state?.serviceList);
  console.log(updatedpendinglist, 'weweej');
  /**
   *
   */
  const tabArray = [
    {
      label: 'Pending',
    },
    {
      label: 'Approved',
    },
    {
      label: 'Rejected',
    },
  ];
  const content = [
    {
      content: <Pending table={table} list={tmpIdsArr} />,
    },
    {
      content: <Approved list={tmpIdsArr} table={table} />,
    },
    {
      content: <Rejected table={table} list={tmpIdsArr} />,
    },
  ];
  const [value, setValue] = React.useState(0);

  /**
   *
   * @param {*} event --
   * @param {*} newValue --
   */
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setTabColor('orange');
      setTabIndicator('orange');
    } else if (newValue === 1) {
      setTabColor('green');
      setTabIndicator('green');
    } else if (newValue === 2) {
      setTabColor('red');
      setTabIndicator('red');
    }
    dispatch({ type: GET_ALL_SERVICE_LIST, payload: newValue });
  };

  React.useEffect(() => {
    dispatch({ type: GET_ALL_SERVICE_LIST, payload: 0 });
    // dispatch({ type: GET_PET_SERVICE_PENDING_LIST });
  }, [dispatch]);
  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];

    getservicelist.data?.map((values, index) => {
      IdsArray.push(values.id);

      return tmpArr.push({
        sno: index + 1,
        Name: values?.venue_name,
        // service_details: values.service_details,
        Address: values.location,
        // services: values.services_id.toString(),
        // cost: values?.cost_per_hour,
      });
    });
    setTable(tmpArr);
    setTmpIdsArr(IdsArray);
  }, [getservicelist]);

  React.useEffect(() => {
    dispatch({ type: UPDATE_SERVICE_LIST_ADMIN });
  }, [dispatch]);

  return (
    <Grid>
      <Grid className="title_text_page">
        <Typography
          text="Services"
          colorType="primary"
          type="subHeading"
          customStyle={{ paddingLeft: '28px', fontWeight: 'bold' }}
        />
      </Grid>
      <Grid>
        <CustomTab
          tabDetails={tabArray}
          handleChange={handleChange}
          value={value}
          tabContent={content}
          color={tabColor}
          tab={tabIndicator}
        />
      </Grid>
      <Footer />
    </Grid>
  );
};
export default ServiceScreen;
