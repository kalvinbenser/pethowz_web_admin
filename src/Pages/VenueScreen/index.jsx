/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '../../Component/Typography';
import './styles.css';
import CustomTab from '../../Component/CustomTab';
import Pending from './pending';
import Approved from './approved';
import Rejected from './rejected';
import { GET_ALL_SPACE_LIST, UPDATE_VENUE_LIST_ADMIN } from '../../constants/actionType/index';
import Footer from '../../Component/Footer';
/**
 * @returns {React.ReactElement} returns the venue Screen
 */
const VenueScreen = () => {
  const [table, setTable] = useState([]);
  const [tabColor, setTabColor] = useState('orange');
  const [tabIndicator, setTabIndicator] = useState('orange');
  /**
   *
   */
  const dispatch = useDispatch();
  /**
   *
   */
  const { getspacelist, getpendinglist, updatedadminlist } = useSelector((state) => state?.venueList);
  console.log(getspacelist, updatedadminlist, getpendinglist, 'sadfsdf');
  const [tmpIdsArr, setTmpIdsArr] = useState([]);

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
    dispatch({ type: GET_ALL_SPACE_LIST, payload: newValue });
  };

  React.useEffect(() => {
    dispatch({ type: GET_ALL_SPACE_LIST, payload: 0 });
  }, [dispatch]);
  /**
   *
   */
  React.useEffect(() => {
    // dispatch({ type: GET_PET_PENDING_LIST });
    dispatch({ type: UPDATE_VENUE_LIST_ADMIN });
  }, [dispatch]);
  /**
   *
   */
  React.useEffect(() => {
    const tmpArr = [];
    const IdsArray = [];

    getspacelist.data?.map((values, index) => {
      IdsArray.push(values.id);

      return tmpArr.push({
        sno: index + 1,
        Name: values.venue_name,
        venue_category: values.venue_category.toString(),
        Address: values.location,
        // Service: values?.service_id.toString(),
        // Amenities: values?.amenities_id.toString(),
        // option_Avabilable: values?.options_id.toString(),
        cost_per_day: values.cost_per_hour,
      });
    });
    setTable(tmpArr);
    setTmpIdsArr(IdsArray);
  }, [getspacelist]);
  /**
   *
   */
  React.useEffect(() => {
    dispatch({ type: UPDATE_VENUE_LIST_ADMIN });
  }, [dispatch]);

  return (
    <Grid>
      <Grid className="title_text_page">
        <Typography
          text="Venues"
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
          tab={tabIndicator}
          color={tabColor}
        />
      </Grid>
      <Footer />
    </Grid>
  );
};
export default VenueScreen;
