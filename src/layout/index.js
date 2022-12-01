/* eslint-disable no-constant-condition */
/* eslint-disable require-jsdoc */
import React from 'react';
import { Grid } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../Component/NavBar';
// import Header from '../Component/Header';
import Dashboard from '../Pages/DashboardScreen';
import Master from '../Pages/MasterScreen';
import Venues from '../Pages/VenueScreen';
import Service from '../Pages/ServiceScreen';
import Bookings from '../Pages/BookingsScreen';
import ViewDetails from '../Pages/ViewDetailsScreen';
import Login from '../Pages/LoginScreen';
import ViewServiceDetails from '../Pages/ServiceViewDetails';
/**
 *
 * @returns {React.ReactElement} --
 */
const Layout = () => {
  const location = useLocation();

  //   const [isLogin, setIsLogin] = React.useState(false);
  //   // const isLogin = false;
  //   const NavigatorSwitch = () => {
  //     setIsLogin(true);
  //   };

  // const handleLogout = () => {
  //   setIsLogin(false);
  //   localStorage.setItem('LoginChecker', '');
  // };

  return (
    <Grid md={12}>
      {location.pathname === '/' || location.pathname === '/login' ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <Grid item container direction="row">
          <Grid item container md={1}>
            <Navbar />
          </Grid>
          <Grid item md={11}>
            <Grid sx={{ pt: 6 }}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} exact />
                <Route path="/master" element={<Master />} />
                <Route path="/venues" element={<Venues />} />
                <Route path="/service" element={<Service />} />
                <Route path="/booking" element={<Bookings />} />
                <Route path="/viewDetails" element={<ViewDetails />} />
                <Route path="/viewServiceDetails" element={<ViewServiceDetails />} />
              </Routes>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
export default Layout;
