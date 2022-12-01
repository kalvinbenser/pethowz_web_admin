import React from 'react';
import { Grid } from '@mui/material';
import Typography from '../../Component/Typography';
import CustomTab from '../../Component/CustomTab';
import VenueBooked from './venueBooked';
import ServiceBooked from './serviceBooked';
import Footer from '../../Component/Footer';
/**
 *
 * @returns {React.ReactElement} returns the Bookings screen
 */
const VenueScreen = () => {
  const tabArray = [
    {
      label: 'Venue Request',
    },
    {
      label: 'Service Request',
    },
  ];
  const content = [
    {
      content: <VenueBooked />,
    },
    {
      content: <ServiceBooked />,
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
  };

  return (
    <Grid>
      <Grid className="title_text_page">
        <Typography
          text="Bookings"
          colorType="primary"
          type="subHeading"
          customStyle={{ paddingLeft: '27px', fontWeight: 'bold' }}
        />
      </Grid>
      <Grid>
        <CustomTab tabDetails={tabArray} handleChange={handleChange} value={value} tabContent={content} />
      </Grid>
      <Footer />
    </Grid>
  );
};
export default VenueScreen;
