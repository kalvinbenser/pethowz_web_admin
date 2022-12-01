import { Grid } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Typography from '../Typography';
import './cardStyles.css';
/**
 *
 * @param {*} props -- required props
 * @returns {React.ReactElement} returns the Dashboard Card
 */
const DashboardCard = (props) => {
  const { dashboardCard } = props;
  const navigate = useNavigate();

  /**
   *
   */
  const handleClick = (key) => {
    if (key === 0) {
      navigate('/booking');
    }
    if (key === 1) {
      navigate('/venues');
    }
    if (key === 2) {
      navigate('/service');
    }
  };

  return (
    <Grid style={{ display: 'flex', width: '100%' }}>
      {dashboardCard?.map((item, index) => {
        const key = index;
        return (
          <Grid key={key} item container style={{ justifyContent: 'center' }} onClick={() => handleClick(key)}>
            <Grid className="cardContainer box_design" style={{ backgroundColor: item.backgroundColor }}>
              <Grid className="circle-ripple"> </Grid>
              <Grid>
                <Typography text={item.header} type="header" customStyle={{ color: '#FFF' }} />
              </Grid>
              <Grid item container direction="row" className="subContainer">
                <Grid>
                  <img src={item.iconSource} alt="" />
                </Grid>
                <Grid>
                  <Typography text={item.count} customStyle={{ fontSize: 40, color: 'white' }} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default DashboardCard;
DashboardCard.propTypes = {
  dashboardCard: PropTypes.arrayOf().isRequired,
};
