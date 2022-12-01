import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import CustomImages from '../../utils/Images';
import Typography from '../Typography';

/**
 *
 * @param {*} props required props
 * @returns {React.ReactElement} returns the ViewDetails Component
 */
const ViewDetails = (props) => {
  const { SelfDescription } = props;

  const { userName, contactNumber, address, petCategory } = props;

  const aboutYourself = [
    {
      ques: 'Introduce Yourself nd why you enjoy being with pets.',
      ans: SelfDescription[0]?.content1,
    },
    {
      ques: 'Tell about the type of pet you have experienced with it.',
      ans: SelfDescription[0]?.content2,
    },
    {
      ques: 'How does your service stand out?',
      ans: SelfDescription[0]?.content3,
    },
    {
      ques: 'What do you enjoy about the work do you?',
      ans: SelfDescription[0]?.content4,
    },
  ];

  return (
    <Grid item md={12}>
      <Grid>
        <Typography text="User Profile" colorType="primary" customStyle={{ fontSize: '20px' }} />
        <Grid item container md={12} width="100%">
          <Grid item md={2.5} justifyContent="center" padding="10px" rowSpacing={10}>
            <Grid>
              <img
                src={CustomImages.ProfilePic}
                alt=""
                style={{ height: '70px', width: '70px', borderRadius: '50px' }}
              />
              <Grid sx={{ pt: 2 }}>
                <Typography text="Name" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
              </Grid>
              <Grid>
                <Typography text={userName} customStyle={{ fontSize: '17px', color: '#2C3051' }} />
              </Grid>
            </Grid>
            <Grid sx={{ pt: 2 }}>
              <Grid>
                <Typography text="Contact Number" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
              </Grid>
              <Grid>
                <Typography text={contactNumber} customStyle={{ fontSize: '17px', color: '#2C3051' }} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} padding="12px" sx={{ pt: 10 }}>
            <Grid sx={{ pt: 2 }}>
              <Typography text="Pet Category" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
              <Typography text={petCategory} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
            </Grid>
            <Grid>
              <Typography text="Address" customStyle={{ fontSize: '17px', color: '#9597A8' }} />
              <Typography text={address} customStyle={{ fontSize: '15px', color: '#2C3051' }} />
            </Grid>
          </Grid>
          <Grid item md={5.5}>
            {aboutYourself?.map((item, index) => {
              const key = index;
              return (
                <Grid key={key} rowSpacing={3} padding="5px">
                  <Grid>
                    <Typography text={item.ques} customStyle={{ fontSize: '17px', color: '#9597A8' }} />
                  </Grid>
                  <Grid>
                    <Typography text={item.ans} customStyle={{ fontSize: '17px', color: '#2C3051' }} />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default ViewDetails;
ViewDetails.propTypes = {
  userName: PropTypes.string,
  contactNumber: PropTypes.string,
  address: PropTypes.string,
  petCategory: PropTypes.string,
  SelfDescription: PropTypes.string,
};
ViewDetails.defaultProps = {
  userName: '',
  contactNumber: '',
  address: '',
  petCategory: '',
  SelfDescription: '',
};
