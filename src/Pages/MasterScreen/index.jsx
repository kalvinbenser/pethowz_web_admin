import React from 'react';
import { Grid } from '@mui/material';
import CustomTab from '../../Component/CustomTab';
import CategoryMaster from './CategoryMaster';
import VenueCategoryMaster from './VenueCategoryMaster';
// import OptionalApplicableMaster from './OptionApplicableMaster';
import AmenitiesMaster from './AmenitiesMaster';
import ServiceMaster from './ServiceMaster';
import TermsAndCondition from './termsAndCondition';
import About from './About';
import Privacy from './privacy';
import Footer from '../../Component/Footer';
/**
 *
 * @returns {React.ReactElement} returns the MasterScreen
 */
const MasterScreen = () => {
  const tabArray = [
    {
      label: 'Pet Category',
    },
    {
      label: 'Venue Category',
    },
    // {
    //   label: 'Option Applicable',
    // },
    {
      label: 'Amenities',
    },
    {
      label: 'Service',
    },
    {
      label: 'Terms & Condition',
    },
    {
      label: 'Privacy Policy',
    },
    {
      label: 'About Us',
    },
  ];
  const content = [
    {
      content: <CategoryMaster />,
    },
    {
      content: <VenueCategoryMaster />,
    },
    // {
    //   content: <OptionalApplicableMaster />,
    // },
    {
      content: <AmenitiesMaster />,
    },
    {
      content: <ServiceMaster />,
    },
    { content: <TermsAndCondition /> },
    { content: <Privacy /> },

    { content: <About /> },
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
      <Grid>
        <CustomTab tabDetails={tabArray} handleChange={handleChange} value={value} tabContent={content} />
      </Grid>
      <Footer />
    </Grid>
  );
};
export default MasterScreen;
